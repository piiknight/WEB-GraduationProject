import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// core components
import { MonValidatedForm } from "./MonForm";

class MonDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    const { open, onClose, mon } = this.props;
    const { roles, majors } = this.state;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thông tin món ăn</DialogTitle>
        <DialogContent>
          <MonValidatedForm
            mon={mon}
            onClose={onClose}
          />
        </DialogContent>
      </Dialog>
    );
  }
}

export default MonDialog;
