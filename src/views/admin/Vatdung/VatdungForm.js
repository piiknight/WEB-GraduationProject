import React, {Component} from "react";
import {withFormik} from "formik";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button/Button";
// Services or Utilities
import {VatdungService} from "services/VatdungService";
import {ResponseHandling} from "utilities/ResponseHandling";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";

class VatdungForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listType: []
        };
    };

    loadTypeList = () => {
        VatdungService.getAllType().then(res => {
            if (!res.error) {
                this.setState({ listType: res.data })
            }
        });
    };

    componentDidMount() {
        this.loadTypeList();
    };

    render () {
        const {
            values,
            touched,
            errors,
            handleChange,
            isSubmitting,
            handleSubmit
        } = this.props;

        const {
            listType
        } = this.state;

        return (
            <form onSubmit={handleSubmit}>

                {/*name*/}
                <TextField
                    required
                    margin="normal"
                    id="name"
                    onChange={handleChange}
                    label="Tên vật dụng"
                    fullWidth
                    value={values.name}
                    error={errors.name && touched.name}
                    helperText={errors.name}
                />

                {/*Price*/}
                <TextField
                    margin="normal"
                    id="description"
                    onChange={handleChange}
                    label="Mô tả"
                    fullWidth
                    value={values.description}
                    error={errors.description && touched.description}
                    helperText={errors.description}
                />

                <TextField
                    margin="normal"
                    label="Loại vật dụng"
                    fullWidth
                    disabled={true}
                />
                <Select
                    value={values.idLVD || ""}
                    error={errors.idLVD && touched.idLVD}
                    onChange={handleChange}
                    name="idLVD"
                    fullWidth
                >
                    <MenuItem value="" disabled>
                        Placeholder
                    </MenuItem>
                    {listType.map((select, index) => (
                        <MenuItem key={index} value={select.idLVD}>{select.name}</MenuItem>
                    ))}
                </Select>

                {errors.responseError && (
                    <p style={{color: "red"}}>{errors.responseError}</p>
                )}
                <div style={{marginTop:'45px'}}>
                    <Button type={"submit"} disabled={isSubmitting} color="primary">
                        Save
                    </Button>
                    <Button onClick={values.onClose} color="primary">
                        Cancel
                    </Button>
                </div>
            </form>
        );
    }
};

const convertToObject = values => {
    let object = {
        idVD: values.idVD,
        name: values.name,
        description: values.description || "",
        idLVD: values.idLVD
    };

    return object;
};

const mapPropsObjectToValues = object => {
    console.log("mapPropsObjectToValues: " + JSON.stringify(object));
    let values = {
        idVD: object.idVD,
        name: object.name,
        description: object.description,
        idLVD: object.idLVD
    };

    return values;
};

export const VatdungValidatedForm = withFormik({
    mapPropsToValues: props => {
        return {
            ...mapPropsObjectToValues(props.vatdung),
            onClose: props.onClose,
            responseError: ""
        };
    },

    // Custom sync validation
    validate: values => {
        const errors = {};
        if (!values.name) {
            errors.name = "Hãy nhập tên";
        }

        if (!values.idLVD) {
            errors.idLVD = "Hãy chọn loại vật dụng";
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

        console.log("handleSubmit: " + JSON.stringify(values));

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

        if (object.idVD) {
            VatdungService.updateOne(object).then(res => {
                snack.message = "Update";
                handleResponse(res);
            });
        } else {
            VatdungService.addOne(object).then(res => {
                snack.message = "Create";
                handleResponse(res);
            });
        }
    }
})(VatdungForm);
