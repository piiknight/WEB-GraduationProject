import React from "react";
import {withFormik} from "formik";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/Button";
// Services or Utilities
import {DichvuService} from "services/DichvuService";
import {ResponseHandling} from "utilities/ResponseHandling";

const DichvuForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        isSubmitting,
        handleSubmit
    } = props;

    return (
        <form onSubmit={handleSubmit}>

            {/*name*/}
            <TextField
                required
                margin="normal"
                id="name"
                onChange={handleChange}
                label="Name"
                fullWidth
                value={values.name}
                error={errors.name && touched.name}
                helperText={errors.name}
            />

            {/*Price*/}
            <TextField
                required
                margin="normal"
                id="price"
                onChange={handleChange}
                label="Price"
                fullWidth
                value={values.price}
                error={errors.price && touched.price}
                helperText={errors.price}
                type="number"
            />

            {errors.responseError && (
                <p style={{color: "red"}}>{errors.responseError}</p>
            )}
            <Button type={"submit"} disabled={isSubmitting} color="primary">
                Save
            </Button>
            <Button onClick={values.onClose} color="primary">
                Cancel
            </Button>
        </form>
    );
};

const convertToObject = values => {
    let object = {
        idDV: values.idDV,
        name: values.name,
        price: values.price
    };

    return object;
};

const mapPropsObjectToValues = object => {
    let values = {
        idDV: object.idDV,
        name: object.name,
        price: object.price
    };

    return values;
};

export const DichvuValidatedForm = withFormik({
    mapPropsToValues: props => {
        return {
            ...mapPropsObjectToValues(props.dichvu),
            onClose: props.onClose,
            responseError: ""
        };
    },

    // Custom sync validation
    validate: values => {
        const errors = {};
        console.log("values: " + JSON.stringify(values));
        if (!values.name) {
            errors.name = "Name is Required";
        }

        if (!values.price) {
            errors.price = "Price is required";
        }

        return errors;
    },

    handleSubmit: (values, {setErrors, setSubmitting}) => {
        console.log("handleSubmit");
        const object = convertToObject(values);
        const snack = {
            open: true,
            place: "bc",
            color: "",
            message: ""
        };

        const handleResponse = res => {
            if (res.error) {
                snack.color = "warning";
                snack.message = `${snack.message} fail`;
                handleError(res.error);
            } else {
                snack.color = "success";
                snack.message = `${snack.message} successfully`;
                handleSuccess();
            }
        };

        const handleError = error => {
            const errors = {
                responseError: ResponseHandling.extractErrorMessage(error)
            };
            setSubmitting(false);
            setErrors(errors);
        };

        const handleSuccess = () => {
            EventBus.publish("snack", snack);
            EventBus.publish("updateDataList");

            setSubmitting(true);
            values.onClose();
        };

        if (object.idDV) {
            DichvuService.updateOne(object).then(res => {
                snack.message = "Update";
                handleResponse(res);
            });
        } else {
            DichvuService.addOne(object).then(res => {
                snack.message = "Create";
                handleResponse(res);
            });
        }
    }
})(DichvuForm);
