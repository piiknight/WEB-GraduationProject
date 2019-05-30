import React, {Component} from "react";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField/TextField";
import {DeleteConfirmDialog} from "components/DeleteConfirmDialog/DeleteConfirmDialog";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
// @material-ui icon
import Search from "@material-ui/icons/Search";

// core components
import EnhancedTable from "components/Table/EnhancedTable";
import CheckQuantityVDDialog from "./CheckQuantityVDDialog";

// services or utilities
import {search} from "utilities/Searching";
import {LocalStorageManager} from "utilities/LocalStorageManager";
import {ConvertTime} from "utilities/ConvertTime";
import {TiecStatus} from "utilities/TiecStatus";
import {TiecService} from "services/TiecService";
import {TiecNLService} from "../../../services/TiecNLService";

import SetEmployeeDialog from "./SetEmployeeDialog";

class AdminTiecNN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openObjectDialog: false,
            keyWords: "",
            openDeleteConfirmDialog: false,
            objectToDelete: null,
            objectToEdit: null,
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
                    id: "idMenu",
                    numeric: false,
                    disablePadding: true,
                    label: "ID Menu"
                },
                {
                    id: "idND",
                    numeric: false,
                    disablePadding: true,
                    label: "ID Người đặt"
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
                    label: "Thời gian bắt đầu"
                },
                {
                    id: "end",
                    numeric: false,
                    disablePadding: true,
                    label: "Thời gian kết thúc"
                },
            ],
            listTiec: [],
            openDialogSetEmployee: false,
            currentListEmployee: []
        };
        this.subscription = EventBus.on("updateDataList", this.loadDataList);
    };

    loadDataList = () => {
        let curId = LocalStorageManager.getCurrentIdUser();
        TiecService.getAllByIdNN(curId).then(res => {
            if (!res.error) {
                console.log("getAllByIdNN: " + JSON.stringify(res.data));
                for (let i = 0; i < res.data.length; i++) {
                    let obj = res.data[i];
                    obj.status = TiecStatus.getStatus(obj.status);
                    obj.start = ConvertTime.toString(obj.start);
                    obj.end = ConvertTime.toString(obj.end);
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

    handleEdit = item => {
        console.log("handleEdit");
        TiecNLService.getAllByIdTiec(item.idTiec).then(res => {
            if (!res.error) {
                this.setState({currentListEmployee: res.data, objectToEdit: item, openDialogSetEmployee: true});
            }
        });
        // this.setState({objectToEdit: item, openDialogSetEmployee: true});
    };

    handleDelete = item => {
        this.setState({objectToDelete: item, openDeleteConfirmDialog: true});
    };

    deleteOne = item => {
        const {objectToDelete} = this.state;
        TiecService.ignoreResponsibility(objectToDelete.idTiec).then(res => {
            if (!res.error) {
                const snack = {
                    open: true,
                    place: "bc",
                    color: "success",
                    message: "Thao tác thành công"
                };
                EventBus.publish("snack", snack);
                EventBus.publish("updateDataList");
                this.setState({openDeleteConfirmDialog: false});
            }
        });
    };

    handleCloseConfirmDeleteDialog = () => {
        this.setState({openDeleteConfirmDialog: false});
    };

    filterByFullName = item => {
        const {keyWords} = this.state;
        return search(item.name, keyWords);
    };

    closeAddObjectDialog = () => {
        this.setState({openObjectDialog: false});
    };

    closeDialogSetEmployee = () => {
        this.setState({openDialogSetEmployee: false});
    };

    render() {
        const {
            openObjectDialog,
            objectToEdit,
            openDeleteConfirmDialog,
            displayedColumns,
            keyWords,
            listTiec,
            openDialogSetEmployee,
            currentListEmployee
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
                    onEdit={item => this.handleEdit(item)}
                    onDelete={item => this.handleDelete(item)}
                    data={listTiec.filter(item => this.filterByFullName(item))}
                    numCustom={3}
                />
                <CheckQuantityVDDialog
                    tiec={objectToEdit}
                    open={openObjectDialog}
                    onClose={this.closeAddObjectDialog}
                />
                <SetEmployeeDialog
                    tiec={objectToEdit}
                    open={openDialogSetEmployee}
                    onClose={this.closeDialogSetEmployee}
                    currentList={currentListEmployee}
                />
                <DeleteConfirmDialog
                    open={openDeleteConfirmDialog}
                    onClose={this.handleCloseConfirmDeleteDialog}
                    title="Không nhận tiệc này?"
                    message="Bạn có thật sự muốn tiếp tục?"
                    onYes={this.deleteOne}
                />
            </div>
        );
    }
}

export default AdminTiecNN;
