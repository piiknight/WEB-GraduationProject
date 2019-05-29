import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import "./loginStyle.css";
import {AuthenticationService} from "../../services/AuthenticationService";
import {ResponseHandling} from "../../utilities/ResponseHandling";
import {withRouter} from "react-router-dom";
import {LocalStorageManager} from "../../utilities/LocalStorageManager";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                username: "",
                password: "",
                rePassword: ""
            },
            formError: {
                username: "",
                password: "",
                rePassword: ""
            },
            submitted: false
        };
    }

    handleChange = event => {
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    };

    handleSubmit = event => {
        console.log("handleSubmitSend: " + JSON.stringify(this.state.formData));
        if (this.state.formData.password !== this.state.formData.rePassword) {
            this.state.formError.rePassword = "Nhập lại mật khẩu không khớp";
            this.setState({});
            event.preventDefault();
            return;
        } else {
            this.state.formError.rePassword = "";
            this.setState({});
            event.preventDefault();
        }
        AuthenticationService.signup(this.state.formData)
            .then(res => {
                if (res.error) {
                    console.log("handleSubmitReceive: " + JSON.stringify(ResponseHandling.extractErrorObject(res.error)));
                    let error = ResponseHandling.extractErrorObject(res.error);
                    if (error.name != "username") {
                        this.state.formError.username = "";
                    }
                    this.state.formError[error.name] = error.messages;
                    this.setState({});
                }
                if (res.data) {
                    console.log("datne:" + JSON.stringify(res.data));
                    LocalStorageManager.setAccessToken(res.data.token);
                    LocalStorageManager.setCurrentUser(res.data.data[0]);
                    this.props.history.push("/home");
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log("error_signup:" + error);
            });

        // this.setState({submitted: true});
        event.preventDefault();
    };

    login(){
        this.props.history.push("/login");
        window.location.reload();
    }

    render() {
        const {formData, formError, submitted} = this.state;
        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit} autoComplete={"off"}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={"card-category"}>Đăng ký</h4>
                            <p className={"card-title"}>Hệ thống quản lí dịch vụ nấu ăn, lễ tiệc</p>
                        </CardHeader>
                        <CardBody>
                            <TextField
                                required
                                name={"username"}
                                label="Tài khoản"
                                error={formError.username !== ""}
                                helperText={formError.username}
                                margin="normal"
                                value={formData.username}
                                fullWidth
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                name={"password"}
                                label="Mật khẩu"
                                type={"password"}
                                error={formError.password !== ""}
                                helperText={formError.password}
                                margin="normal"
                                value={formData.password}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                required
                                name={"rePassword"}
                                label="Nhập lại mật khẩu"
                                type={"password"}
                                error={formError.rePassword !== ""}
                                helperText={formError.rePassword}
                                margin="normal"
                                value={formData.rePassword}
                                onChange={this.handleChange}
                                fullWidth
                            />
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" type={"submit"} disabled={submitted}>
                                Đăng kí
                            </Button>
                            <span style={{marginRight: '-600px'}}>Trờ về đăng nhập</span>
                            <Button color="primary" onClick={this.login.bind(this)}>
                                Đăng nhập
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);
