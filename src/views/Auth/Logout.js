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
        this.state = {};
    }

    handleLogout = () => {
        LocalStorageManager.clearAccessToken();
        this.props.history.push("/login");
    };

    render() {
        this.handleLogout();
        return (
            <div className={"container"}>

            </div>
        );
    }
}

export default withRouter(Login);
