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
                    id: "maxQuantity",
                    numeric: false,
                    disablePadding: true,
                    label: "Hiện có"
                }
            ],
            listDataByMenu: [],
            listDataByTiec: [],
            isAllEnough: false
        };
    };

    loadDataList = () => {
        const { tiec } = this.props;
        console.log("tiec: " + JSON.stringify(tiec));
        NNVDungService.getCheckQuantityVDByTiec(tiec).then(res => {
            if (!res.error) {
                console.log("getCheckQuantityVDByTiec: " + JSON.stringify(res.data));
                this.setState({ listDataByTiec: res.data });
            }
        });
        NNVDungService.getCheckQuantityVDByMenu(tiec).then(res => {
            if (!res.error) {
                console.log("getCheckQuantityVDByMenu: " + JSON.stringify(res.data));
                this.setState({ listDataByMenu: res.data });
            }
        });
    };

    convertListData() {
        const { listDataByTiec, listDataByMenu } = this.state;
        if (listDataByTiec.length == 0 || listDataByMenu.length == 0)
            return [...listDataByMenu, ...listDataByTiec];

        console.log("random: " + _.random(1, 2));

        // let result = [];
        //
        // for (let i = 0; i < listDataByTiec.length; i++) {
        //     for (let j = 0; j < listDataByMenu.length; j++) {
        //         if (listDataByTiec[i].idMon == listDataByMenu[j].idMon) {
        //
        //         }
        //     }
        // }

        return [...listDataByMenu, ...listDataByTiec];
    };

    componentDidMount() {
        // this.loadDataList();
    };

    handleEdit(item) {
        console.log("handleEdit: " + JSON.stringify(item));
    };

    render() {
        const { open, onClose, tiec } = this.props;
        const { displayedColumns, isAllEnough } = this.state;

        let data = this.convertListData();

        console.log("render: " + tiec);
        if (data.length == 0 && tiec) {
            this.loadDataList();
        }

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
                        data={data}
                        numCustom={0}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}

export default CheckQuantityVDDialog;
