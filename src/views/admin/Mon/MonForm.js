import React from "react";
import {withFormik} from "formik";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/Button";
// Services or Utilities
import {MonService} from "services/MonService";
import {ResponseHandling} from "utilities/ResponseHandling";

const MonForm = props => {
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

            {/*Salary*/}
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

            {/*Work Time*/}
            <TextField
                required
                margin="normal"
                id="point"
                onChange={handleChange}
                label="Point"
                fullWidth
                value={values.point}
                error={errors.point && touched.point}
                helperText={errors.point}
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
        idMon: values.idMon,
        name: values.name,
        price: values.price,
        point: values.point
    };

    return object;
};

const mapPropsObjectToValues = object => {
    console.log("mapPropsObjectToValues: " + JSON.stringify(object));
    let values = {
        idMon: object.idMon,
        name: object.name,
        price: object.price,
        point: object.point
    };

    return values;
};

export const MonValidatedForm = withFormik({
    mapPropsToValues: props => {
        return {
            ...mapPropsObjectToValues(props.mon),
            onClose: props.onClose,
            responseError: ""
        };
    },

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = "Required";
        }

        if (!values.price) {
            errors.price = "Salary is required";
        }

        if (!values.point) {
            errors.point = "WorkTime is required";
        }

        return errors;
    },

    handleSubmit: (values, {setErrors, setSubmitting}) => {
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

        if (object.idMon) {
            MonService.updateOne(object).then(res => {
                snack.message = "Update";
                handleResponse(res);
            });
        } else {
            MonService.addOne(object).then(res => {
                snack.message = "Create";
                handleResponse(res);
            });
        }
    }
})(MonForm);
