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
import NNVDungDialog from "./NNVDungDialog";

// services or utilities
import {search} from "utilities/Searching";
import {NNVDungService} from "services/NNVDungService";

class AdminNNVDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openObjectDialog: false,
            keyWords: "",
            openDeleteConfirmDialog: false,
            objectToDelete: null,
            objectToEdit: null,
            isAdd: false,
            displayedColumns: [
                {
                    id: "idNNVD",
                    numeric: false,
                    disablePadding: true,
                    label: "ID"
                },
                {
                    id: "name",
                    numeric: false,
                    disablePadding: true,
                    label: "Vật dụng"
                },
                {
                    id: "maxQuantity",
                    numeric: false,
                    disablePadding: true,
                    label: "Số lượng trong kho"
                },
                {
                    id: "curQuantity",
                    numeric: false,
                    disablePadding: true,
                    label: "Số lượng đang sử dụng"
                }
            ],
            listData: []
        };
        this.subscription = EventBus.on("updateDataList", this.loadDataList);
    };

    loadDataList = () => {
        // passCurUserId
        NNVDungService.getAllByIdNN(1).then(res => {
            console.log("NNVDungService: " + JSON.stringify(res.data));
            if (!res.error) {
                this.setState({listData: res.data});
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
        NNVDungService.deleteOne(objectToDelete.idNNVD).then(res => {
            if (!res.error) {
                this.setState({openDeleteConfirmDialog: false});
                this.loadDataList();
            }
        });
    };

    newObject = () => {
        let obj: {
            idNNVD: "",
            idVD: "",
            maxQuantity: "",
            curQuantity: ""
        };
        return obj;
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
            listData,
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
                    data={listData.filter(item => this.filterByFullName(item))}
                />
                <NNVDungDialog
                    obj={objectToEdit}
                    open={openObjectDialog}
                    onClose={this.closeAddObjectDialog}
                    isAdd={isAdd}
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

export default AdminNNVDung;
