import React, {Component} from "react";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EnhancedTable from "components/Table/EnhancedTable";

// core components

// services or utilities
import { NNVDungService } from "services/NNVDungService";

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
                },
                {
                    id: "enough",
                    numeric: false,
                    disablePadding: true,
                    label: "Đủ điều kiện"
                }
            ],
            listData: [],
            isAllEnough: false
        };
    };

    loadDataList = () => {
        // passCurUserId
        NNVDungService.getCheckQuantityVDByTiec(1).then(res => {
            if (!res.error) {
                console.log("getCheckQuantityVDByTiec: " + JSON.stringify(res.data));
                let countEnough = 0;
                for (let i = 0; i < res.data.length; i++) {
                    let obj = res.data[i];
                    if (obj && obj.enough != null && obj.enough != undefined &&  obj.enough >= 0) {
                        obj.enough = "OK";
                        countEnough++;
                    }
                }
                this.setState({ listData: res.data, isAllEnough: countEnough == res.data.length });
            }
        });
    };

    componentDidMount() {
        this.loadDataList();
    };

    handleEdit(item) {
        console.log("handleEdit: " + JSON.stringify(item));
    };

    render() {
        const { open, onClose, tiec } = this.props;
        const { displayedColumns, listData, isAllEnough } = this.state;

        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" maxWidth={"lg"}>
                <DialogTitle id="form-dialog-title">Số lượng vật dụng {(tiec && tiec.quantity) ? "[" + tiec.quantity + " bàn]" : ""}</DialogTitle>
                <DialogContent>
                    {
                        isAllEnough ?
                            <h4>
                                Có thể nhận làm tiệc này
                            </h4>
                            :
                            <h5>
                                Không đủ vật dụng để nhận làm tiệc này =>
                                <a href="/nn-vd" aria-expanded="true"><span> Thêm vật dụng vào kho</span></a>
                            </h5>
                    }
                    <EnhancedTable
                        name={"Kiểm tra thông tin số lượng"}
                        head={displayedColumns}
                        onEdit={item => this.handleEdit(item)}
                        data={listData}
                        numCustom={0}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}

export default CheckQuantityVDDialog;
