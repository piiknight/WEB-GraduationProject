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
import UserDialog from "./UserDialog";

// services or utilities
import {search} from "utilities/Searching";
import {UserService} from "services/UserService";

class AdminUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openObjectDialog: false,
            keyWords: "",
            openDeleteConfirmDialog: false,
            objectToDelete: null,
            objectToEdit: null,
            displayedColumns: [
                {
                    id: "idU",
                    numeric: false,
                    disablePadding: true,
                    label: "ID"
                },
                {
                    id: "username",
                    numeric: false,
                    disablePadding: true,
                    label: "Tên đăng nhập"
                },
                {
                    id: "modeName",
                    numeric: false,
                    disablePadding: true,
                    label: "Quyền"
                },
                {
                    id: "name",
                    numeric: false,
                    disablePadding: true,
                    label: "Tên"
                },
                {
                    id: "point",
                    numeric: false,
                    disablePadding: true,
                    label: "Điểm số"
                },
                {
                    id: "phone",
                    numeric: false,
                    disablePadding: true,
                    label: "Số điện thoại"
                },
                {
                    id: "email",
                    numeric: false,
                    disablePadding: true,
                    label: "E-mail"
                },
                {
                    id: "address",
                    numeric: false,
                    disablePadding: true,
                    label: "Địa chỉ"
                },
            ],
            listUser: [],
            isAdd: false
        };
        this.subscription = EventBus.on("updateDataList", this.loadDataList);
    };

    loadDataList = () => {
        UserService.getAll().then(res => {
            if (!res.error) {
                console.log("loadDataList: " + JSON.stringify(res.data));
                this.setState({listUser: res.data});
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
        this.setState({objectToEdit: item, openObjectDialog: true, isAdd: false});
    };

    handleDelete = item => {
        this.setState({objectToDelete: item, openDeleteConfirmDialog: true});
    };

    handleCloseConfirmDeleteDialog = () => {
        this.setState({openDeleteConfirmDialog: false});
    };

    filterByFullName = item => {
        const {keyWords} = this.state;
        return search(item.name, keyWords);
    };

    deleteOne = () => {
        const {objectToDelete} = this.state;
        UserService.deleteOne(objectToDelete.idU).then(res => {
            if (!res.error) {
                this.setState({openDeleteConfirmDialog: false});
                this.loadDataList();
            }
        });
    };

    newObject = () => {
        let user: {
            idU: "",
            username: "",
            idMode: "",
            name: "",
            point: "",
            phone: "",
            email: "",
            address: "",
        };
        return user;
    };
    addNewObject = () => {
        this.setState({objectToEdit: this.newObject, openObjectDialog: true, isAdd: true});
    };

    closeAddObjectDialog = () => {
        this.setState({openObjectDialog: false});
    };

    render() {
        const {
            openObjectDialog,
            objectToEdit,
            openDeleteConfirmDialog,
            displayedColumns,
            keyWords,
            listUser,
            isAdd
        } = this.state;

        return (
            <div>
                <Button
                    onClick={this.addNewObject}
                    variant="fab"
                    color={"primary"}
                >
                    <AddIcon/>
                </Button>
                <TextField
                    label="Tìm kiếm người dùng"
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
                    name={"Thông tin người dùng"}
                    head={displayedColumns}
                    onEdit={item => this.handleEdit(item)}
                    onDelete={item => this.handleDelete(item)}
                    data={listUser.filter(item => this.filterByFullName(item))}
                />
                <UserDialog
                    user={objectToEdit}
                    open={openObjectDialog}
                    onClose={this.closeAddObjectDialog}
                    isAdd={isAdd}
                />
                <DeleteConfirmDialog
                    open={openDeleteConfirmDialog}
                    onClose={this.handleCloseConfirmDeleteDialog}
                    title="Xóa người dùng này?"
                    message="Bạn có thật sự muốn xóa?"
                    onYes={this.deleteOne}
                />
            </div>
        );
    }
}

export default AdminUser;
