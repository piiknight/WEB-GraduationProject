import React, {Component} from "react";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField/TextField";
import {DeleteConfirmDialog} from "components/DeleteConfirmDialog/DeleteConfirmDialog";
// @material-ui icon
import Search from "@material-ui/icons/Search";

// core components
import EnhancedTable from "components/Table/EnhancedTable";

// services or utilities
import {search} from "utilities/Searching";
import {LocalStorageManager} from "utilities/LocalStorageManager";
import {ConvertTime} from "utilities/ConvertTime";
import {TiecStatus} from "utilities/TiecStatus";
import {TiecService} from "services/TiecService";

class AdminTiecND extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWords: "",
            displayedColumns: [
                // {
                //   id: "idTiec",
                //   numeric: false,
                //   disablePadding: true,
                //   label: "ID"
                // },
                {
                    id: "address",
                    numeric: false,
                    disablePadding: true,
                    label: "Địa chỉ"
                },
                {
                    id: "name",
                    numeric: false,
                    disablePadding: true,
                    label: "Loại tiệc"
                },
                {
                    id: "phone",
                    numeric: false,
                    disablePadding: true,
                    label: "Số điện thoại"
                },
                {
                    id: "nameMenu",
                    numeric: false,
                    disablePadding: true,
                    label: "Menu",
                    href: "/menu"
                },
                {
                    id: "nameNN",
                    numeric: false,
                    disablePadding: true,
                    label: "Người nhận",
                    href: "/owner"
                },
                {
                    id: "status",
                    numeric: false,
                    disablePadding: true,
                    label: "Trạng thái"
                },
                {
                    id: "quantity",
                    numeric: false,
                    disablePadding: true,
                    label: "Số bàn"
                },
                {
                    id: "start",
                    numeric: false,
                    disablePadding: true,
                    label: "Thời gian tổ chức"
                }
            ],
            listTiec: [],
        };
        this.subscription = EventBus.on("updateDataList", this.loadDataList);
    };

    loadDataList = () => {
        let curId = LocalStorageManager.getCurrentIdUser();
        TiecService.getAllByIdND(curId).then(res => {
            if (!res.error) {
                console.log("getAllByIdND: " + JSON.stringify(res.data));
                for (let i = 0; i < res.data.length; i++) {
                    let obj = res.data[i];
                    obj.status = TiecStatus.getStatus(obj.status);
                    obj.start = ConvertTime.getDay(obj.start);
                }
                this.setState({listTiec: res.data});
            }
        });
    };

    componentDidMount() {
        this.loadDataList();
    };

    componentWillUnmount = () => {
        this.subscription();
    };

    onKeyWordsChange = event => {
        this.setState({
            keyWords: event.target.value
        });
    };

    filterByFullName = item => {
        const {keyWords} = this.state;
        return search(item.name, keyWords);
    };

    render() {
        const {
            displayedColumns,
            keyWords,
            listTiec,
        } = this.state;

        return (
            <div>
                <TextField
                    label="Tìm kiếm tiệc"
                    placeholder="Tìm kiếm"
                    fullWidth
                    margin="normal"
                    name={"keyWords"}
                    value={keyWords}
                    InputLabelProps={{shrink: true}}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment variant="filled" position="end">
                                <Search/>
                            </InputAdornment>
                        )
                    }}
                    onChange={this.onKeyWordsChange}
                />
                <EnhancedTable
                    name={"Thông tin tiệc"}
                    head={displayedColumns}
                    data={listTiec.filter(item => this.filterByFullName(item))}
                    numCustom={0}
                />
            </div>
        );
    }
}

export default AdminTiecND;
