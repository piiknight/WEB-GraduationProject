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
import EnhancedTable from "components/Table/EnhancedTable";
import MonDialog from "./MonDialog";

// services or utilities
import { search } from "utilities/Searching";
import { MonService } from "services/MonService";

class AdminMon extends Component {
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
		    listMon: []
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
	};

	newObject = () => {
		var mon: {
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

  	render(){
  		const {
  			openObjectDialog,
  			objectToEdit,
  			openDeleteConfirmDialog,
  			displayedColumns,
  			keyWords, 
  			listMon
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
	        <EnhancedTable
	          	name={"Thông tin món ăn"}
	         	head={displayedColumns}
	         	onEdit={item => this.handleEdit(item)}
				onDelete={item => this.handleDelete(item)}
	          	data={listMon.filter(item => this.filterByFullName(item))}
	        />
	        <MonDialog
	            mon={objectToEdit}
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

export default AdminMon;
