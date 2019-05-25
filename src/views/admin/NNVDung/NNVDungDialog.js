import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// core components
import { NNVDungValidatedForm } from "./NNVDungForm";

class NNVDungDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    const { open, onClose, obj, isAdd } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thông tin vật dụng</DialogTitle>
        <DialogContent>
          <NNVDungValidatedForm
            obj={obj}
            onClose={onClose}
            isAdd={isAdd}
          />
        </DialogContent>
      </Dialog>
    );
  }
}

export default NNVDungDialog;
