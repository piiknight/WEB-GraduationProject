import React, {Component} from "react";
import {withFormik} from "formik";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/Button";
// Services or Utilities
import {NNVDungService} from "services/NNVDungService";
import {ResponseHandling} from "utilities/ResponseHandling";
import {VatdungService} from "services/VatdungService";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import { LocalStorageManager } from "utilities/LocalStorageManager";

class NNVDungForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listSelect: []
        };
    };

    loadSelectList = () => {
        VatdungService.getAll().then(res => {
            if (!res.error) {
                this.setState({ listSelect: res.data })
            }
        });
    };

    componentDidMount() {
        this.loadSelectList();
    };

    render(){
        const {
            values,
            touched,
            errors,
            handleChange,
            isSubmitting,
            handleSubmit,
            isAdd
        } = this.props;

        console.log("ISDADADADAD: " + isAdd);

        const {
            listSelect
        } = this.state;

        return (
            <form onSubmit={handleSubmit}>

                <TextField
                    margin="normal"
                    label="Vật dụng"
                    fullWidth
                    disabled={true}
                />
                <Select
                    value={values.idVD || ""}
                    onChange={handleChange}
                    name="idVD"
                    fullWidth
                >
                    <MenuItem value="" disabled>
                        Placeholder
                    </MenuItem>
                    {listSelect.map((select, index) => (
                        <MenuItem key={index} value={select.idVD}>{select.name}</MenuItem>
                    ))}
                </Select>

                <TextField
                    required
                    margin="normal"
                    id="maxQuantity"
                    onChange={handleChange}
                    label="Số lượng trong kho"
                    fullWidth
                    value={values.maxQuantity}
                    error={errors.maxQuantity && touched.maxQuantity}
                    helperText={errors.maxQuantity}
                    type="number"
                />


                { isAdd
                    ? <TextField
                        margin="normal"
                        label="Số lượng đã sử dụng (Không thể cài đặt trước)"
                        fullWidth
                        disabled={true}
                    />
                    : <TextField
                        margin="normal"
                        id="curQuantity"
                        onChange={handleChange}
                        label="Số lượng đã sử dụng (nên kiểm tra kho trước khi sửa thuộc tính này)"
                        fullWidth
                        value={values.curQuantity}
                        error={errors.curQuantity && touched.curQuantity}
                        helperText={errors.curQuantity}
                        type="number"
                        c
                    />
                }

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
    }
};

const convertToObject = values => {
    let object = {
        idNNVD: values.idNNVD,
        idVD: values.idVD,
        maxQuantity: values.maxQuantity,
        curQuantity: values.curQuantity
    };

    return object;
};

const mapPropsObjectToValues = object => {
    let values = {
        idNNVD: object.idNNVD,
        idVD: object.idVD,
        maxQuantity: object.maxQuantity,
        curQuantity: object.curQuantity
    };

    return values;
};

export const NNVDungValidatedForm = withFormik({
    mapPropsToValues: props => {
        return {
            ...mapPropsObjectToValues(props.obj),
            onClose: props.onClose,
            responseError: ""
        };
    },

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.idVD) {
            errors.idVD = "Hãy chọn vật dụng";
        }

        if (!values.maxQuantity) {
            errors.maxQuantity = "Hãy nhập số lượng";
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

        object.idNN = LocalStorageManager.getCurrentIdUser();
        if (object.idNNVD) {
            NNVDungService.updateOne(object).then(res => {
                snack.message = "Update";
                handleResponse(res);
            });
        } else {
            NNVDungService.addOne(object).then(res => {
                snack.message = "Create";
                handleResponse(res);
            });
        }
    }
})(NNVDungForm);
