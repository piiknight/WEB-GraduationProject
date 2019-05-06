import React, {Component} from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField/TextField";
import { DeleteConfirmDialog } from "components/DeleteConfirmDialog/DeleteConfirmDialog";
// @material-ui icon
import Search from "@material-ui/icons/Search";

// core components
import EnhancedTable from "components/Table/EnhancedTable";

// services or utilities
import { search } from "utilities/Searching";
import { CongviecService } from "services/CongviecService";

class AdminCongviec extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	keyWords: "",
	      	openAddDialog: false,
	      	openDeleteConfirmDialog: false,
	      	objectToDelete: null,
	      	projectTemplates: [],
	      	displayedColumns: [
	      		{
		          id: "idCV",
		          numeric: false,
		          disablePadding: true,
		          label: "ID"
		        },
		        {
		          id: "name",
		          numeric: false,
		          disablePadding: true,
		          label: "Name"
		        },
		        {
		          id: "salary",
		          numeric: false,
		          disablePadding: true,
		          label: "Salary"
		        },
		        {
		          id: "workTime",
		          numeric: false,
		          disablePadding: true,
		          label: "WorkTime"
		        }
		    ],
		    listCongviec: []
	    };
	};

	loadDataList = () => {
	    CongviecService.getAll().then(res => {
	      if (!res.error) {
	        this.setState({ listCongviec: res.data });
	      }
	    });
	};

	componentDidMount() {
	    this.loadDataList();
	};

	onKeyWordsChange = event => {
	    this.setState({
	      	keyWords: event.target.value
	    });
	};

	handleDelete = item => {
	    this.setState({ objectToDelete: item, openDeleteConfirmDialog: true });
    };

    handleCloseConfirmDeleteDialog = () => {
	    this.setState({ openDeleteConfirmDialog: false });
	};

	filterByFullName = item => {
	    const { keyWords } = this.state;
	    return search(item.fullName, keyWords) || search(item.username, keyWords);
	};

	deleteOne = () => {
	    const { objectToDelete } = this.state;
	    CongviecService.deleteOne(objectToDelete.idCV).then(res => {
	      if (!res.error) {
	        this.setState({ openDeleteConfirmDialog: false });
	        this.loadDataList();
	      }
	    });
	};

  	render(){
  		const { 
  			openDeleteConfirmDialog,
  			projectTemplates,
  			displayedColumns,
  			keyWords, 
  			listCongviec 
  		} = this.state;
  		return (
    	<div>
	    	<TextField
	            label="Search Account"
	            placeholder="Search"
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
	          	name={"Guiding Info"}
	         	head={displayedColumns}
	         	onEdit={this.handleEdit}
				onDelete={item => this.handleDelete(item)}
	          	data={listCongviec}
	          	// data={data.filter(item => this.filterByFullName(item))}
	        />
	        <DeleteConfirmDialog
	            open={openDeleteConfirmDialog}
	            onClose={this.handleCloseConfirmDeleteDialog}
	            title="Delete Account?"
	            message="Are you sure want to delete?"
	            onYes={this.deleteOne}
	        />
        </div>
  	);
  	}
}

export default AdminCongviec;
