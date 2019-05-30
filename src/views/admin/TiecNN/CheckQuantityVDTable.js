import React, {Component} from "react";
// @material-ui/core components
import EnhancedTable from "components/Table/EnhancedTable";
import Button from "../../../components/CustomButtons/Button";

// core components

// services or utilities
import {NNVDungService} from "services/NNVDungService";
import {MenuService} from "services/MenuService";
import {TiecService} from "services/TiecService";
import {TiecStatus} from "utilities/TiecStatus";
import * as EventBus from "eventing-bus";

class CheckQuantityVDTable extends Component {
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
                },
                {
                    id: "enough",
                    numeric: false,
                    disablePadding: true,
                    label: "Đủ điều kiện"
                }
            ],
            listDataByMenu: [],
            listDataByTiec: [],
            listData: [],
            isAllEnough: false,
            totalPrice: 0
        };
    };

    loadDataList = () => {
        const {tiec} = this.props;
        console.log("tiec: " + JSON.stringify(tiec));
        NNVDungService.getCheckQuantityVDByTiec(tiec).then(res => {
            if (!res.error) {
                console.log("getCheckQuantityVDByTiec: " + JSON.stringify(res.data));
                // this.setState({ listDataByTiec: res.data });
                this.state.listDataByTiec = res.data;
            }
        });
        NNVDungService.getCheckQuantityVDByMenu(tiec).then(res => {
            if (!res.error) {
                console.log("getCheckQuantityVDByMenu: " + JSON.stringify(res.data));
                // this.setState({ listDataByMenu: res.data });
                this.state.listDataByMenu = res.data;
                this.state.listData = this.convertListData();
            }
        });

        MenuService.getTotalPrice(tiec.idMenu).then(res => {
            if (!res.error) {
                console.log("getTotalPrice: " + JSON.stringify(res.data));
                this.setState({totalPrice: res.data[0].totalPrice});
            }
        });
    };

    convertListData() {
        const {listDataByTiec, listDataByMenu} = this.state;
        if (listDataByTiec.length == 0 || listDataByMenu.length == 0)
            return [...listDataByMenu, ...listDataByTiec];

        let result = [];
        let data = [...listDataByMenu, ...listDataByTiec];

        let countEnough = 0;
        data.forEach(function (o) {
            let existing = result.filter(function (i) {
                return i.idVD === o.idVD
            })[0];

            if (!existing) {
                if (o.maxQuantity - o.sum >= 0) {
                    o.enough = "OK";
                    countEnough++;
                } else {
                    o.enough = "Không đủ";
                }
                result.push(o);
            } else {
                existing.quantity += o.quantity;
                existing.sum += o.sum;
            }
        });

        if (countEnough == result.length) this.state.isAllEnough = true;
        return result;
    };

    componentDidMount() {
        this.loadDataList();
    };

    handleEdit(item) {
        console.log("handleEdit: " + JSON.stringify(item));
    };

    acceptRequest() {
        const {tiec, onClose} = this.props;
        tiec.status = TiecStatus.ACCEPT;
        TiecService.updateStatus(tiec).then(res => {
            if (!res.error) {
                const snack = {
                    open: true,
                    place: "bc",
                    color: "success",
                    message: "Nhận tiệc thành công"
                };
                EventBus.publish("snack", snack);
                EventBus.publish("updateDataList");
                onClose();
            }
        });
    };

    handleSetEmployee() {
        console.log("handleSetEmployee");
    };

    render() {
        const {displayedColumns, isAllEnough, totalPrice, listData} = this.state;
        const {tiec} = this.props;

        return (
            <div>
                <h5>
                    Tổng tiền thực đơn: {totalPrice} VND
                </h5>

                {
                    tiec.status == TiecStatus.getStatus(TiecStatus.REQUEST) ?
                        isAllEnough ?
                            <div>
                                <h5 style={{color: 'green'}}>
                                    Có thể nhận làm tiệc này
                                </h5>
                                <Button color="primary" onClick={this.acceptRequest.bind(this)}>
                                    Nhận
                                </Button>
                            </div>
                            :
                            <h5>
                                Không đủ vật dụng để nhận làm tiệc này =>
                                <a href="/nn-vd" aria-expanded="true"><span> Thêm vật dụng vào kho</span></a>
                            </h5>
                        : <div>
                            <Button color="primary" onClick={this.handleSetEmployee.bind(this)}>
                                Chọn người phụ, làm
                            </Button>
                        </div>
                }
                <EnhancedTable
                    name={"Kiểm tra thông tin số lượng"}
                    head={displayedColumns}
                    onEdit={item => this.handleEdit(item)}
                    data={listData}
                    numCustom={0}
                />
            </div>
        );
    }
}

export default CheckQuantityVDTable;
