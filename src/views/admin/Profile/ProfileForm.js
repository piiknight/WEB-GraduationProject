import React, {Component} from "react";
import {withFormik} from "formik";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import Button from "@material-ui/core/Button/Button";
// Services or Utilities
import {AuthenticationService} from "services/AuthenticationService";
import {ResponseHandling} from "utilities/ResponseHandling";
import {UserService} from "services/UserService";
import {LocalStorageManager} from "utilities/LocalStorageManager";

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listType: []
        };
    };

    loadTypeList = () => {
        AuthenticationService.getPermission().then(res => {
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
            handleSubmit,
            isAdd
        } = this.props;

        const {
            listType
        } = this.state;

        return (
            <form onSubmit={handleSubmit}>

                <TextField
                    required
                    margin="normal"
                    id="username"
                    onChange={handleChange}
                    label="Tài khoản"
                    fullWidth
                    value={values.username}
                    error={errors.username && touched.username}
                    helperText={errors.username}
                    disabled
                />

                <TextField
                    margin="normal"
                    label="Quyền"
                    fullWidth
                    disabled={true}
                />
                <Select
                    value={values.idMode || ""}
                    error={errors.idMode && touched.idMode}
                    onChange={handleChange}
                    name="idMode"
                    fullWidth
                    disabled
                >
                    <MenuItem value="" disabled>
                        Placeholder
                    </MenuItem>
                    {listType.map((select, index) => (
                        <MenuItem key={index} value={select.idMode}>{select.modeName}</MenuItem>
                    ))}
                </Select>

                <TextField
                    required
                    margin="normal"
                    id="name"
                    onChange={handleChange}
                    label="Tên"
                    fullWidth
                    value={values.name}
                    error={errors.name && touched.name}
                    helperText={errors.name}
                />

                <TextField
                    margin="normal"
                    id="point"
                    onChange={handleChange}
                    label="Điểm số"
                    fullWidth
                    value={values.point}
                    error={errors.point && touched.point}
                    helperText={errors.point}
                    type={"number"}
                />

                <TextField
                    margin="normal"
                    id="phone"
                    onChange={handleChange}
                    label="Số điện thoại"
                    fullWidth
                    value={values.phone}
                    error={errors.phone && touched.phone}
                    helperText={errors.phone}
                />

                <TextField
                    margin="normal"
                    id="email"
                    onChange={handleChange}
                    label="E-mail"
                    fullWidth
                    value={values.email}
                    error={errors.email && touched.email}
                    helperText={errors.email}
                />

                <TextField
                    margin="normal"
                    id="address"
                    onChange={handleChange}
                    label="Địa chỉ"
                    fullWidth
                    value={values.address}
                    error={errors.address && touched.address}
                    helperText={errors.address}
                />

                <TextField
                    required
                    margin="normal"
                    id="password"
                    onChange={handleChange}
                    label="Nhập đúng mật khẩu để lưu thông tin"
                    fullWidth
                    value={values.password}
                    error={errors.password && touched.password}
                    helperText={errors.password}
                    type={"password"}
                />

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
    console.log("convertToObject: " + JSON.stringify(values));
    let object = {
        idU: values.idU,
        username: values.username,
        password: values.password,
        idMode: values.idMode,
        name: values.name,
        point: values.point || 0,
        phone: values.phone || "",
        email: values.email|| "",
        address: values.address|| "",
        lastPassword: values.lastPassword
    };

    return object;
};

const mapPropsObjectToValues = object => {
    console.log("mapPropsObjectToValues: " + JSON.stringify(object));
    let values = {
        idU: object.idU,
        username: object.username,
        password: "",
        idMode: object.idMode,
        name: object.name,
        point: object.point,
        phone: object.phone,
        email: object.email,
        address: object.address,
        lastPassword: object.password
    };

    return values;
};

export const ProfileValidatedForm = withFormik({
    mapPropsToValues: props => {
        return {
            ...mapPropsObjectToValues(props.profile),
            onClose: props.onClose,
            responseError: ""
        };
    },

    // Custom sync validation
    validate: values => {
        const errors = {};
        if (!values.username) {
            errors.username = "Hãy nhập tên";
        }

        if (!values.idMode) {
            errors.idMode = "Hãy chọn quyền";
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

            setSubmitting(false);
        };

        if (object.idU) {
            UserService.updateProfile(object).then(res => {
                snack.message = "Update";
                handleResponse(res);
            });
        }
    }
})(ProfileForm);
