import React, {Component} from "react";
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
// core components

const styles = theme => ({
    root: {
        flexWrap: 'wrap',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 0,
        marginRight: 50,
    },
    select: {
        width: 200,
        marginTop: 12
    },
    button1: {
        fontFamily: "arial",
        width: 280,
        textAlign: "center"
    },
    button2: {
        display: "inline",
        fontFamily: "arial",
        width: 10,
        textAlign: "center"
    },
});

class MonDialogSetQuantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: "",
            showButtonAdd: true
        };
    };

    handleButtonAdd = () => {
        const {showButtonAdd} = this.state;
        this.setState({
            showButtonAdd: !showButtonAdd
        });
    };

    handleButtonDone = () => {
        const {showButtonAdd} = this.state;
        this.setState({
            showButtonAdd: true
        });
    };

    render() {
        const {open, onClose, mon, classes} = this.props;
        const {showButtonAdd} = this.state;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Cài đặt số lượng vật dụng cho món ăn</DialogTitle>
                <DialogContent>
                    <form className={classes.root} autoComplete="off" style={{width: 500}}>
                        {showButtonAdd ?
                            (
                                <div>
                                    <Button variant="contained" color="primary" className={classes.button1}
                                            onClick={this.handleButtonAdd}
                                    >
                                        <AddIcon/>
                                    </Button>
                                </div>
                            ) :
                            (
                                <div>
                                    <Select
                                        className={classes.select}
                                        value={this.state.age}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'age',
                                            id: 'age-simple',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <TextField
                                        id="standard-dense"
                                        label="Số lượng"
                                        className={classNames(classes.textField, classes.dense)}
                                        margin="dense"
                                        type="number"
                                    />
                                    <Button variant="contained" color="primary" className={classes.button2}
                                            onClick={this.handleButtonDone}
                                    >
                                        <DoneIcon/>
                                    </Button>
                                </div>
                            )
                        }
                    </form>
                </DialogContent>
            </Dialog>
        );
    }
}

MonDialogSetQuantity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonDialogSetQuantity);
