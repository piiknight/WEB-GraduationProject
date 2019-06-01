import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import "./loginStyle.css";
import {AuthenticationService} from "../../services/AuthenticationService";
import {LocalStorageManager} from "../../utilities/LocalStorageManager";
import {withRouter} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                username: "",
                password: ""
            },
            formError: {
                username: "",
                password: ""
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
        console.log("handleSubmit: " + JSON.stringify(this.state.formData));
        AuthenticationService.authenticate(this.state.formData)
            .then(res => {
                console.log("handleSubmit: " + JSON.stringify(res.data));
                if (res.data) {
                    if (res.data.success) {
                        LocalStorageManager.setAccessToken(res.data.token);
                        LocalStorageManager.setCurrentUser(res.data.data[0]);
                        this.props.history.push("/admin/profile");
                        window.location.reload();
                    } else {
                        this.state.formError.password = "Sai mật khẩu";
                        this.state.formError.username = undefined;
                        this.setState({});
                    }

                } else {
                    this.state.formError.username = "Không tìm thấy username";
                    this.setState({});
                }
            })
            .catch(error => {
                console.log("datne:" + error);
            });

        // this.setState({submitted: true});
        event.preventDefault();
    };

    register(){
        this.props.history.push("/register");
        window.location.reload();
    }

    render() {
        const {formData, formError, submitted} = this.state;
        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit} autoComplete={"off"}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={"card-category"}>Đăng nhập</h4>
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
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" type={"submit"} disabled={submitted}>
                                Đăng nhập
                            </Button>
                            <span style={{marginRight: '-400px'}}>Nếu chưa có tài khoản hãy đăng kí</span>
                            <Button color="primary" onClick={this.register.bind(this)}>
                                Đăng ký
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);
