import React, {Component} from "react";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField/TextField";
import { DeleteConfirmDialog } from "components/DeleteConfirmDialog/DeleteConfirmDialog";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
// @material-ui icon
import Search from "@material-ui/icons/Search";

// core components
import EnhancedTableExtend from "components/Table/EnhancedTableExtend";
import MonDialog from "./MonDialog";
import MonDialogSetQuantity from "./MonDialogSetQuantity";

// services or utilities
import { search } from "utilities/Searching";
import { MonService } from "services/MonService";
import { MonVatdungService } from "services/MonVatdungService";

class AdminMon extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	openObjectDialog: false,
	    	openDialogSetQuantity: false,
	    	keyWords: "",
	      	openDeleteConfirmDialog: false,
	      	objectToDelete: null,
	      	objectToEdit: null,
	      	displayedColumns: [
	      		{
		          id: "idMon",
		          numeric: false,
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
		          id: "price",
		          numeric: false,
		          disablePadding: true,
		          label: "Giá"
		        },
		        {
		          id: "point",
		          numeric: false,
		          disablePadding: true,
		          label: "Điểm đánh giá"
		        }
		    ],
		    listMon: [],
			listVatdung: []
	    };
	    this.subscription = EventBus.on("updateDataList", this.loadDataList);
	};

	loadDataList = () => {
        MonService.getAll().then(res => {
	      if (!res.error) {
	        this.setState({ listMon: res.data });
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
	    this.setState({ objectToEdit: item, openObjectDialog: true });
	};

    handleExtend = item => {
        console.log("handleExtend: " + JSON.stringify(item));
        MonVatdungService.getAllByIdMon(item.idMon).then(res => {
            if (!res.error) {
                console.log("res: " + JSON.stringify(res.data));
                this.setState({ listVatdung: res.data });
            }
        });
        this.setState({ objectToEdit: item, openDialogSetQuantity: true });
    };

	handleDelete = item => {
	    this.setState({ objectToDelete: item, openDeleteConfirmDialog: true });
    };

    handleCloseConfirmDeleteDialog = () => {
	    this.setState({ openDeleteConfirmDialog: false });
	};

	filterByFullName = item => {
	    const { keyWords } = this.state;
	    return search(item.name, keyWords);
	};

	deleteOne = () => {
	    const { objectToDelete } = this.state;
	    MonService.deleteOne(objectToDelete.idMon).then(res => {
	      if (!res.error) {
	        this.setState({ openDeleteConfirmDialog: false });
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
		let mon: {
      		idMon: "",
      		name: "",
      		price: "",
      		point: ""
      	};
		return mon;
	};
	addNewObject = () => {
	    this.setState({ objectToEdit: this.newObject, openObjectDialog: true });
	};

	closeAddObjectDialog = () => {
	    this.setState({ openObjectDialog: false });
	};

    closeDialogSetQuantity = () => {
        this.setState({ openDialogSetQuantity: false });
    };

  	render(){
  		const {
            openDialogSetQuantity,
  			openObjectDialog,
  			objectToEdit,
  			openDeleteConfirmDialog,
  			displayedColumns,
  			keyWords, 
  			listMon,
            listVatdung
  		} = this.state;

  		return (
    	<div>
	    	<Button
	          onClick={this.addNewObject}
	          variant="fab"
	          color={"primary"}
	        >
	          <AddIcon />
	        </Button>
	    	<TextField
	            label="Tìm kiếm món ăn"
	            placeholder="Tìm kiếm"
	            fullWidth
	            margin="normal"
	            name={"keyWords"}
	            value={keyWords}
	            InputLabelProps={{ shrink: true }}
	            InputProps={{
	              endAdornment: (
	                <InputAdornment variant="filled" position="end">
	                  <Search />
	                </InputAdornment>
	              )
	            }}
	            onChange={this.onKeyWordsChange}
            />
	        <EnhancedTableExtend
	          	name={"Thông tin món ăn"}
	         	head={displayedColumns}
	         	onEdit={item => this.handleEdit(item)}
	         	onExtend={item => this.handleExtend(item)}
				onDelete={item => this.handleDelete(item)}
	          	data={listMon.filter(item => this.filterByFullName(item))}
	        />
	        <MonDialog
	            mon={objectToEdit}
	            open={openObjectDialog}
	            onClose={this.closeAddObjectDialog}
	        />
            <MonDialogSetQuantity
                mon={objectToEdit}
                listVatdung={listVatdung}
                open={openDialogSetQuantity}
                onClose={this.closeDialogSetQuantity}
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

export default AdminMon;
