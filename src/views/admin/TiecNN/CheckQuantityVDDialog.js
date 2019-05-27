import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EnhancedTable from "components/Table/EnhancedTable";

// core components

// services or utilities
import { NNVDungService } from "services/NNVDungService";
import { MenuService } from "services/MenuService";
import CheckQuantityVDTable from "./CheckQuantityVDTable";

class CheckQuantityVDDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        const { open, onClose, tiec } = this.props;

        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" maxWidth={"lg"}>
                <DialogTitle id="form-dialog-title">Số lượng vật dụng {(tiec && tiec.quantity) ? "[" + tiec.quantity + " bàn]" : ""}</DialogTitle>
                <DialogContent>
                    <CheckQuantityVDTable
                        tiec={tiec}
                    >
                    </CheckQuantityVDTable>
                </DialogContent>
            </Dialog>
        );
    }
}

export default CheckQuantityVDDialog;
