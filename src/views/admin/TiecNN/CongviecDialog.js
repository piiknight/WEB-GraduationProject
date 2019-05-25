import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// core components
import { CongviecValidatedForm } from "./CongviecForm";

class CongviecDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    const { open, onClose, congviec } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thông tin công việc</DialogTitle>
        <DialogContent>
          <CongviecValidatedForm
            congviec={congviec}
            onClose={onClose}
          />
        </DialogContent>
      </Dialog>
    );
  }
}

export default CongviecDialog;
