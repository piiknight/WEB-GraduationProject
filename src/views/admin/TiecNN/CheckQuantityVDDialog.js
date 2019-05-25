import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EnhancedTable from "components/Table/EnhancedTable";

// core components

class CheckQuantityVDDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedColumns: [
                {
                    id: "name",
                    numeric: false,
                    disablePadding: true,
                    label: "Vật dụng"
                },
                {
                    id: "quantity",
                    numeric: false,
                    disablePadding: true,
                    label: "Số lượng cần"
                },
                {
                    id: "sum",
                    numeric: false,
                    disablePadding: true,
                    label: "Số lượng cần (+ dự phòng)"
                },
                {
                    id: "validQuantity",
                    numeric: false,
                    disablePadding: true,
                    label: "Hiện có"
                }
            ],
            listData: []
        };
    };

    render() {
        const { open, onClose, tiec } = this.props;
        const { displayedColumns, listData } = this.state;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" maxWidth={"lg"}>
                <DialogTitle id="form-dialog-title">Số lượng vật dụng</DialogTitle>
                <DialogContent>
                    <EnhancedTable
                        name={"Kiểm tra thông tin số lượng"}
                        head={displayedColumns}
                        onEdit={item => this.handleEdit(item)}
                        onDelete={item => this.handleDelete(item)}
                        data={listData}
                        numCustom={1}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}

export default CheckQuantityVDDialog;
