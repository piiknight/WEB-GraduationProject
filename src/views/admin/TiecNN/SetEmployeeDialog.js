import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// core components
import SetEmployeeForm from "./SetEmployeeForm";


class MonDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const {open, onClose, tiec, currentList} = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Chọn người phụ, làm</DialogTitle>
                <DialogContent>
                    <SetEmployeeForm
                        tiec={tiec}
                        onClose={onClose}
                        currentList={currentList}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}

export default MonDialog;
