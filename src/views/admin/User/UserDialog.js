import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// core components
import {UserValidatedForm} from "./UserForm";

class UserDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const {open, onClose, user, isAdd} = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thông tin người dùng</DialogTitle>
                <DialogContent>
                    <UserValidatedForm
                        isAdd={isAdd}
                        user={user}
                        onClose={onClose}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}

export default UserDialog;
