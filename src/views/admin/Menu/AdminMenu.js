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
import EnhancedTableExtend from "components/Table/EnhancedTableExtend";
import MenuDialog from "./MenuDialog";

// services or utilities
import {search} from "utilities/Searching";
import {MenuService} from "services/MenuService";

class AdminMenu extends Component {
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
                    id: "idMenu",
                    numeric: false,
                    disablePadding: true,
                    disablePadding: true,
                    label: "ID"
                },
                {
                    id: "name",
                    numeric: false,
                    disablePadding: true,
                    label: "Tên"
                },
                {
                    id: "quantity",
                    numeric: false,
                    disablePadding: true,
                    label: "Số lượng đã đặt"
                }
            ],
            listMenu: []
        };
        this.subscription = EventBus.on("updateDataList", this.loadDataList);
    };

    loadDataList = () => {
        MenuService.getAll().then(res => {
            if (!res.error) {
                this.setState({listMenu: res.data});
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
        this.setState({objectToEdit: item, openObjectDialog: true});
    };

    handleDelete = item => {
        this.setState({objectToDelete: item, openDeleteConfirmDialog: true});
    };

    handleExtend = item => {
        console.log("Show GUI");
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
        MenuService.deleteOne(objectToDelete.idMenu).then(res => {
            if (!res.error) {
                this.setState({openDeleteConfirmDialog: false});
                this.loadDataList();
            }
        });
    };

    newObject = () => {
        let menu: {
            idMenu: "",
            name: "",
            quantity: "",
            mon: ""
        };
        return menu;
    };

    addNewObject = () => {
        this.setState({objectToEdit: this.newObject, openObjectDialog: true});
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
            listMenu
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
                    label="Tìm kiếm menu"
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
                <EnhancedTableExtend
                    name={"Thông tin menu"}
                    head={displayedColumns}
                    onEdit={item => this.handleEdit(item)}
                    onDelete={item => this.handleDelete(item)}
                    onExtend={item => this.handleExtend(item)}
                    data={listMenu.filter(item => this.filterByFullName(item))}
                />
                <MenuDialog
                    menu={objectToEdit}
                    open={openObjectDialog}
                    onClose={this.closeAddObjectDialog}
                />
                <DeleteConfirmDialog
                    open={openDeleteConfirmDialog}
                    onClose={this.handleCloseConfirmDeleteDialog}
                    title="Xóa món ăn này?"
                    message="Bạn có thật sự muốn xóa?"
                    onYes={this.deleteOne}
                />
            </div>
        );
    }
}

export default AdminMenu;
