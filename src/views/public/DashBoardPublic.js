import React, {Component} from "react";

// @material-ui/core components
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import Snackbar from "../../components/Snackbar/Snackbar";

import PublicHeader from "../../../src/layouts/public/PublicHeader";
import Home from "./Home";
import Food from "./Food";
import Service from "./Service";
import Menu from "./Menu";

import * as EventBus from "eventing-bus";

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.content = null;
        this.state = {
            snack: {
                open: false,
                place: "bc",
                color: "info",
                message: ""
            }
        }
        this.subscription = EventBus.on("snack", this.changeSnackStatus);

        switch (this.props.content) {
            case "public":
                this.content = <Home/>;
                break;
            case "food":
                this.content = <Food/>;
                break;
            case "service":
                this.content = <Service/>;
                break;
            case "menu":
                this.content = <Menu/>;
                break;

            default:
                this.content = <div>Default</div>;
                break;
        }
    };

    changeSnackStatus = snack => {
        this.setState({snack: snack});
    };

    componentWillUnmount() {
        this.subscription();
    }

    closeSnack = () => {
        const {snack} = this.state;
        snack.open = false;
        this.setState({snack});
    };

    render() {
        const {snack} = this.state;
        return (
            <div>
                <PublicHeader/>
                {this.content}
                <Snackbar
                    place={snack.place}
                    color={snack.color}
                    icon={AddAlert}
                    message={snack.message}
                    open={snack.open}
                    closeNotification={this.closeSnack}
                    close
                />
            </div>
        );
    }
}

export default DashBoard;
