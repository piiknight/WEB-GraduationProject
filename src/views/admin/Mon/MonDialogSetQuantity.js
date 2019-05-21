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

// services or utilities
import { VatdungService } from "services/VatdungService";
import { MonVatdungService } from "../../../services/MonVatdungService";

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
        width: 200,
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
            showButtonAdd: true,
            listSelect: []
        };
    };

    loadSelectList() {
        VatdungService.getAllByIdType(1).then(res => {
            if (!res.error) {
                // console.log("hanldeAbc: " + JSON.stringify(res.data));
                this.setState({ listSelect: res.data });
            }
        });
    };

    componentDidMount() {
        this.loadSelectList();
    };

    handleButtonAdd = () => {
        const {showButtonAdd} = this.state;
        this.setState({
            showButtonAdd: !showButtonAdd
        });
    };

    handleChangeSelect = (event) => {
        let attr = event.target.name;
        this.state[attr] = event.target.value;
        this.setState({});
    };

    handleChangeText = (event) => {
        let attr = event.target.name;
        this.state[attr] = event.target.value;
        this.setState({});
    };

    handleButtonDone = (vatdung) => {
        let idMVD = vatdung.idMVD;
        vatdung.quantityNew = parseInt(this.state["text" + idMVD]) || vatdung.quantity;
        vatdung.idVDNew = this.state["select" + idMVD] || vatdung.idVD;

        if (vatdung.idVDNew != vatdung.idVD || vatdung.quantityNew != vatdung.quantity) {
            vatdung.idVD = vatdung.idVDNew;
            vatdung.quantity = vatdung.quantityNew;
            MonVatdungService.updateOne(vatdung).then(res => {
                if (!res.error) {
                    console.log("susccess: " + JSON.stringify(res.data));
                    // this.setState({ listSelect: res.data });
                }
            });
        }
    };

    render() {
        const {open, onClose, mon, listVatdung, classes} = this.props;
        const {
            showButtonAdd,
            listSelect
        } = this.state;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Cài đặt số lượng vật dụng cho {mon ? mon.name : ""}</DialogTitle>
                <DialogContent>
                    <form className={classes.root} autoComplete="off" style={{width: 650}}>
                        {listVatdung.map((vatdung, index) => (
                            <div key={index}>
                                <Select
                                    className={classes.select}
                                    value={this.state["select" + vatdung.idMVD] || vatdung.idVD}
                                    onChange={this.handleChangeSelect}
                                    inputProps={{
                                        name: "select" + vatdung.idMVD,
                                        id: vatdung.idMVD,
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {listSelect.map((select, index) => (
                                        <MenuItem key={index} value={select.idVD}>{select.name}</MenuItem>
                                    ))}
                                </Select>
                                <TextField
                                    id={"text" + vatdung.idMVD}
                                    name={"text" + vatdung.idMVD}
                                    value={this.state["text" + vatdung.idMVD] || vatdung.quantity}
                                    label="Số lượng"
                                    className={classNames(classes.textField, classes.dense)}
                                    margin="dense"
                                    type="number"
                                    onChange={this.handleChangeText}
                                />
                                <Button variant="contained" color="primary" className={classes.button2}
                                        onClick={() => this.handleButtonDone(vatdung)}
                                >
                                    <DoneIcon/>
                                </Button>
                            </div>
                        ))}
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
