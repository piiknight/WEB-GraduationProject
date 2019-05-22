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
import CloseIcon from '@material-ui/icons/Close';
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
        width: 180,
    },
    dense: {
        marginTop: 0,
        marginRight: 50,
    },
    select: {
        width: 180,
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
            listSelect: [],
            textAdd: "",
            selectAdd: ""
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

        if (vatdung.quantityNew < 1) {
            alert("Hãy nhập số dương");
            return;
        }

        if (vatdung.idVDNew != vatdung.idVD || vatdung.quantityNew != vatdung.quantity) {
            vatdung.idVD = vatdung.idVDNew;
            vatdung.quantity = vatdung.quantityNew;
            MonVatdungService.updateOne(vatdung).then(res => {
                if (!res.error) {
                    alert("Lưu thông tin thành công");
                    console.log("susccess: " + JSON.stringify(res.data));
                    // this.setState({ listSelect: res.data });
                }
            });
        } else {
            alert("Giá trị không thay đổi, không thể lưu");
        }
    };

    handleAddDone = () => {
        const { listVatdung } = this.props;
        const { textAdd, selectAdd } = this.state;
        const { mon } = this.props;
        let object = {
            idMon: mon.idMon,
            quantity: parseInt(textAdd) || "",
            idVD: selectAdd
        }

        if (object.quantity == "" || object.quantity < 1 || object.idVD == "") {
            alert("Hãy nhập nhập đúng giá trị");
            return;
        }

        for(let i = 0; i < listVatdung.length; i++){
            if ( listVatdung[i].idVD === object.idVD) {
                alert("Vật dụng đã tồn tại");
                return;
            }
        }

        MonVatdungService.addOne(object).then(res => {
            if (!res.error) {
                alert("Thêm thành công");
                this.cleanUpBtnAdd();
                listVatdung.push(object);
                this.setState({});
            }
        });
    };

    handleButtonClose = (id) => {
        const { listVatdung } = this.props;
        MonVatdungService.deleteOne(id).then(res => {
            if (!res.error) {
                alert("Xóa thành công thành công");

                for(let i = 0; i < listVatdung.length; i++){
                    if ( listVatdung[i].idMVD === id) {
                        listVatdung.splice(i, 1);
                        break;
                    }
                }
                this.setState({});
            }
        });
    };

    cleanUpBtnAdd = () => {
        this.setState({
            showButtonAdd: true,
            textAdd: "",
            selectAdd: ""
        })
    };

    handleClose = () => {
        const { onClose } = this.props;
        onClose();
        this.cleanUpBtnAdd();
    };

    render() {
        const { open, onClose, mon, listVatdung, classes } = this.props;
        const { textAdd, selectAdd } = this.state;
        const {
            showButtonAdd,
            listSelect
        } = this.state;
        return (
            <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
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
                                <Button variant="contained" color="inherit" className={classes.button2}
                                        onClick={() => this.handleButtonDone(vatdung)}
                                >
                                    <DoneIcon/>
                                </Button>
                                <Button variant="contained" color="secondary" className={classes.button2}
                                        onClick={() => this.handleButtonClose(vatdung.idMVD)}
                                >
                                    <CloseIcon/>
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
                                        value={selectAdd}
                                        onChange={this.handleChangeSelect}
                                        inputProps={{
                                            name: 'selectAdd'
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
                                        id="textAdd"
                                        name={"textAdd"}
                                        value={textAdd}
                                        onChange={this.handleChangeText}
                                        label="Số lượng"
                                        className={classNames(classes.textField, classes.dense)}
                                        margin="dense"
                                        type="number"
                                    />
                                    <Button variant="contained" color="primary" className={classes.button2}
                                            onClick={this.handleAddDone}
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
