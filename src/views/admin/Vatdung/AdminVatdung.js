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
import VatdungDialog from "./VatdungDialog";

// services or utilities
import {search} from "utilities/Searching";
import {VatdungService} from "services/VatdungService";

class AdminVatdung extends Component {
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
                    id: "idVD",
                    numeric: false,
                    disablePadding: true,
                    label: "ID"
                },
                {
                    id: "name",
                    numeric: false,
                    disablePadding: true,
                    label: "Tên vật dụng"
                },
                {
                    id: "description",
                    numeric: false,
                    disablePadding: true,
                    label: "Mô tả"
                },
                {
                    id: "idLVD",
                    numeric: false,
                    disablePadding: true,
                    label: "Loại vật dụng"
                },
                {
                    id: "quantity",
                    numeric: false,
                    disablePadding: true,
                    label: "Số lượng"
                }
            ],
            listVatdung: []
        };
        this.subscription = EventBus.on("updateDataList", this.loadDataList);
    };

    loadDataList = () => {
        VatdungService.getAll().then(res => {
            if (!res.error) {
                this.setState({listVatdung: res.data});
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

    handleCloseConfirmDeleteDialog = () => {
        this.setState({openDeleteConfirmDialog: false});
    };

    filterByFullName = item => {
        const {keyWords} = this.state;
        return search(item.name, keyWords);
    };

    deleteOne = () => {
        const {objectToDelete} = this.state;
        VatdungService.deleteOne(objectToDelete.idVD).then(res => {
            if (!res.error) {
                this.setState({openDeleteConfirmDialog: false});
                this.loadDataList();
            }
        });

        const snack = {
            open: true,
            place: "bc",
            color: "success",
            message: "Xóa thành công"
        };
        EventBus.publish("snack", snack);
    };

    newObject = () => {
        let vatdung: {
            idVD: "",
            name: "",
            description: "",
            idLVD: "",
            quantity: ""
        };
        return vatdung;
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
            listVatdung
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
                    label="Tìm kiếm vật dụng"
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
                    name={"Thông tin vật dụng"}
                    head={displayedColumns}
                    onEdit={item => this.handleEdit(item)}
                    onDelete={item => this.handleDelete(item)}
                    data={listVatdung.filter(item => this.filterByFullName(item))}
                />
                <VatdungDialog
                    vatdung={objectToEdit}
                    open={openObjectDialog}
                    onClose={this.closeAddObjectDialog}
                />
                <DeleteConfirmDialog
                    open={openDeleteConfirmDialog}
                    onClose={this.handleCloseConfirmDeleteDialog}
                    title="Xóa vật dụng này?"
                    message="Bạn có thật sự muốn xóa?"
                    onYes={this.deleteOne}
                />
            </div>
        );
    }
}

export default AdminVatdung;
