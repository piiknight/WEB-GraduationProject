import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// core components
import { MenuValidatedForm } from "./MenuForm";

class MenuDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    const { open, onClose, menu } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thông tin menu</DialogTitle>
        <DialogContent>
          <MenuValidatedForm
            menu={menu}
            onClose={onClose}
          />
        </DialogContent>
      </Dialog>
    );
  }
}

export default MenuDialog;
