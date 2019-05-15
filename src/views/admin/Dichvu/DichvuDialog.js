import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// core components
import {DichvuValidatedForm} from "./DichvuForm";

class DichvuDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const {open, onClose, dichvu} = this.props;
        const {roles, majors} = this.state;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thông tin dịch vụ</DialogTitle>
                <DialogContent>
                    <DichvuValidatedForm
                        dichvu={dichvu}
                        onClose={onClose}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}

export default DichvuDialog;
