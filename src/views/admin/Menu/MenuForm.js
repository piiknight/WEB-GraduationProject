import React, {Component} from "react";
import {withFormik} from "formik";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/Button";

// Components
import TitlebarGridList from "components/Grid/TitlebarGridList";

// Services or Utilities
import {ResponseHandling} from "utilities/ResponseHandling";
import {MenuService} from "../../../services/MenuService";
import {MenuMonService} from "../../../services/MenuMonService";
import {MonService} from "../../../services/MonService";


class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tileData: [],
            listMon: []
        };
    };

    loadDataList = () => {
        const {
            values,
        } = this.props;
        if (values.idMenu === undefined) {
            this.setState({tileData: []});
            return;
        }
        MenuMonService.getAllByIdMenu(values.idMenu).then(res => {
            if (!res.error) {
                this.setState({tileData: res.data});
            }
        });
    };

    loadDataSelectMon() {
        MonService.getAll().then(res => {
            if (!res.error) {
                this.setState({listMon: res.data});
            }
        });
    };

    componentDidMount() {
        this.loadDataList();
        this.loadDataSelectMon();
    };

    removeOne = (item) => {
        console.log("removeOne");
        this.setState({tileData: []})
    };

    addOne = (id) => {
        const {
            values
        } = this.props;
        const {
            tileData,
        } = this.state;
        MonService.getById(id).then(res => {
            if (!res.error) {
                let firstElement = res.data[0];
                tileData.push(firstElement);
                if (!values.mon) values.mon = [];
                values.mon.push(firstElement.idMon);

                this.setState({tileData: tileData});
            }
        });
    };

    render() {
        const {
            values,
            touched,
            errors,
            handleChange,
            isSubmitting,
            handleSubmit
        } = this.props;

        const {
            tileData,
            listMon
        } = this.state;

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

                {/*Quantity*/}
                <TextField
                    required
                    margin="normal"
                    id="quantity"
                    onChange={handleChange}
                    label="Quantity"
                    fullWidth
                    value={values.quantity}
                    error={errors.quantity && touched.quantity}
                    helperText={errors.quantity}
                    type="number"
                />

                <TextField
                    margin="normal"
                    id="mon"
                    label="Danh sách món"
                    fullWidth
                    disabled={true}
                />

                <TitlebarGridList selectData={listMon} tileData={tileData} addOne={this.addOne} removeOne={this.removeOne}/>

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
    console.log("convertToObject: " + JSON.stringify(values));
    let object = {
        idMenu: values.idMenu,
        name: values.name,
        quantity: values.quantity,
        mon: values.mon,
    };

    return object;
};

const mapPropsObjectToValues = object => {
    let values = {
        idMenu: object.idMenu,
        name: object.name,
        quantity: object.quantity,
        mon: object.mon
    };

    return values;
};

export const MenuValidatedForm = withFormik({
    mapPropsToValues: props => {
        return {
            ...mapPropsObjectToValues(props.menu),
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

        if (!values.quantity) {
            errors.quantity = "Quantity is required";
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

        if (object.idMenu) {
            MenuService.updateOne(object).then(res => {
                snack.message = "Update";
                handleResponse(res);
            });
        } else {
            MenuService.addOne(object).then(res => {
                snack.message = "Create";
                handleResponse(res);
            });
        }
    }
})(MenuForm);
