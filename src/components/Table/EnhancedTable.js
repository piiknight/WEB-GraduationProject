import React from "react";
import PropTypes from "prop-types";
// @material-ui components
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
// Core components
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
// Style
import tasksStyle from "../../assets/jss/material-dashboard-react/components/tasksStyle.jsx";

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === "desc"
        ? (a, b) => desc(a, b, orderBy)
        : (a, b) => -desc(a, b, orderBy);
}

const styles = theme => ({
    ...tasksStyle,
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3
    },
    table: {
        minWidth: 1020
    },
    tableWrapper: {
        overflowX: "auto",
        marginLeft: 25
    }
});

class EnhancedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: "asc",
            orderBy: "name",
            selected: [],
            page: 0,
            rowsPerPage: 10
        };
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = "desc";

        if (this.state.orderBy === property && this.state.order === "desc") {
            order = "asc";
        }

        this.setState({order, orderBy});
    };

    handleSelectAllClick = event => {
        if (event.target.checked) {
            this.setState(state => ({selected: state.data.map(n => n.id)}));
            return;
        }
        this.setState({selected: []});
    };

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    handleEdit = item => {
        this.props.onEdit(item);
    };

    handleExtend = item => {
        this.props.onExtend(item);
    };

    loadExtendFunc = (item) => {
        const {classes, numCustom} = this.props;

        switch (numCustom) {
            case undefined:
            case 2:
                return <TableCell padding="none">
                    <Tooltip
                        id="tooltip-top"
                        title="Edit"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <IconButton
                            aria-label="Edit"
                            className={classes.tableActionButton}
                            onClick={() => this.handleEdit(item)}
                        >
                            <Edit
                                className={
                                    classes.tableActionButtonIcon +
                                    " " +
                                    classes.edit
                                }
                            />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        id="tooltip-top-start"
                        title="Remove"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <IconButton
                            aria-label="Close"
                            className={classes.tableActionButton}
                            onClick={() => this.props.onDelete(item)}
                        >
                            <Close
                                className={
                                    classes.tableActionButtonIcon +
                                    " " +
                                    classes.close
                                }
                            />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            case 1:
                return <TableCell padding="none">
                    <Tooltip
                        id="tooltip-top"
                        title="View"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <IconButton
                            aria-label="View"
                            className={classes.tableActionButton}
                            onClick={() => this.handleEdit(item)}
                        >
                            <RemoveRedEye
                                className={
                                    classes.tableActionButtonIcon +
                                    " " +
                                    classes.edit
                                }
                            />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            case 3:
                return <TableCell padding="none">
                    <Tooltip
                        id="tooltip-top"
                        title="View"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <IconButton
                            aria-label="View"
                            className={classes.tableActionButton}
                            onClick={() => this.handleExtend(item)}
                        >
                            <RemoveRedEye
                                className={
                                    classes.tableActionButtonIcon +
                                    " " +
                                    classes.edit
                                }
                            />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        id="tooltip-top"
                        title="Edit"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <IconButton
                            aria-label="Edit"
                            className={classes.tableActionButton}
                            onClick={() => this.handleEdit(item)}
                        >
                            <Edit
                                className={
                                    classes.tableActionButtonIcon +
                                    " " +
                                    classes.edit
                                }
                            />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        id="tooltip-top-start"
                        title="Remove"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <IconButton
                            aria-label="Close"
                            className={classes.tableActionButton}
                            onClick={() => this.props.onDelete(item)}
                        >
                            <Close
                                className={
                                    classes.tableActionButtonIcon +
                                    " " +
                                    classes.close
                                }
                            />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            case 0:
                return "";
        }
    };


    render() {
        const {classes, head, name, data} = this.props;
        const {order, orderBy, selected, rowsPerPage, page} = this.state;
        return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar name={name || ""} numSelected={selected.length}/>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={this.handleSelectAllClick}
                            onRequestSort={this.handleRequestSort}
                            rowCount={data.length}
                            rows={head}
                        />
                        <TableBody>
                            {stableSort(data, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            {head.map((h, key) => {
                                                let cellContent = "";
                                                if (h.id === "role") {
                                                    cellContent = item["roles"][0].authority;
                                                } else if (h.id === "major" && item["major"]) {
                                                    cellContent = item["major"].name;
                                                } else {
                                                    cellContent = item[h.id];
                                                }

                                                if (h.href) {
                                                    return (
                                                        <TableCell padding="none" key={key}>
                                                            <a href={h.href}>{cellContent}</a>
                                                        </TableCell>
                                                    );
                                                } else {
                                                    return (
                                                        <TableCell padding="none" key={key}>
                                                            {cellContent}
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                            {this.loadExtendFunc(item)}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        "aria-label": "Previous Page"
                    }}
                    nextIconButtonProps={{
                        "aria-label": "Next Page"
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
