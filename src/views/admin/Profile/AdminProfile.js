import React, {Component} from "react";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import {DeleteConfirmDialog} from "components/DeleteConfirmDialog/DeleteConfirmDialog";
// @material-ui icon

// core components

// services or utilities
import {search} from "utilities/Searching";
import {LocalStorageManager} from "utilities/LocalStorageManager";
import {UserService} from "services/UserService";
import {ProfileValidatedForm} from "./ProfileForm";

class AdminProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: <div></div>
        };
    };

    loadProfile = () => {
        UserService.getUserById(LocalStorageManager.getCurrentIdUser()).then(res => {
            if (!res.error) {
                console.log("loadProfile: " + JSON.stringify(res.data));
                this.setState({
                    component: <ProfileValidatedForm profile={res.data[0]}/>
                });
            }
        });
    };

    componentDidMount() {
        this.loadProfile();
    };

    render() {
        const {
            component
        } = this.state;

        return (
            component
        );
    }
}

export default AdminProfile;
