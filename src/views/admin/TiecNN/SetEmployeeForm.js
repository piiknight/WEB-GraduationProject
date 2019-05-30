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
import {VatdungService} from "services/VatdungService";
import {TiecNLService} from "../../../services/TiecNLService";
import {CongviecService} from "services/CongviecService";
import {UserService} from "services/UserService";

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

class SetEmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButtonAdd: true,
            selectNL: "",
            selectCV: "",
            listNguoilam: [],
            listCongviec: [],
        };
    };

    loadSelectList() {
        CongviecService.getAll().then(res => {
            if (!res.error) {
                console.log("CongviecService: " + JSON.stringify(res.data));
                this.setState({listCongviec: res.data});
            }
        });

        UserService.getUserByMode("ADMIN").then(res => {
            if (!res.error) {
                console.log("UserService: " + JSON.stringify(res.data));
                this.setState({listNguoilam: res.data});
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


    handleButtonDone = (obj) => {
        let idTNL = obj.idMVD;
        obj.idNLNew = this.state["selectNL" + idTNL] || obj.idNL;
        obj.idCVNew = this.state["selectCV" + idTNL] || obj.idCV;


        if (obj.idNLNew != obj.idNL || obj.idCVNew != obj.idCV) {
            obj.idNL = obj.idNLNew;
            obj.idCV = obj.idCVNew;
            TiecNLService.updateOne(obj).then(res => {
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
        const { currentList } = this.props;
        const { selectNL, selectCV } = this.state;
        const { tiec } = this.props;
        let object = {
            idTiec: tiec.idTiec,
            idNL: selectNL,
            idCV: selectCV
        }

        if (object.idNL == "" || object.idCV == "") {
            alert("Hãy nhập nhập đúng giá trị");
            return;
        }

        for(let i = 0; i < currentList.length; i++){
            if ( currentList[i].idTNL === object.idTNL) {
                alert("Người làm đã tồn tại");
                return;
            }
        }

        TiecNLService.addOne(object).then(res => {
            if (!res.error) {
                alert("Thêm thành công");
                this.cleanUpBtnAdd();
                currentList.push(object);
                this.setState({});
            }
        });
    };

    handleButtonClose = (id) => {
        const { currentList } = this.props;
        TiecNLService.deleteOne(id).then(res => {
            if (!res.error) {
                alert("Xóa người làm thành công");

                for(let i = 0; i < currentList.length; i++){
                    if ( currentList[i].idTNL === id) {
                        currentList.splice(i, 1);
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
            selectNL: "",
            selectCV: ""
        })
    };

    handleClose = () => {
        const { onClose } = this.props;
        onClose();
        this.cleanUpBtnAdd();
    };

    render() {
        const {open, onClose, tiec, classes, currentList} = this.props;
        const {selectNL, selectCV} = this.state;
        const {
            showButtonAdd,
            listNguoilam,
            listCongviec
        } = this.state;
        return (
            <form className={classes.root} autoComplete="off" style={{width: 650}}>
                {currentList.map((obj, index) => (
                    <div key={index}>
                        <Select
                            className={classes.select}
                            value={this.state["selectNL" + obj.idTNL] || obj.idNL}
                            onChange={this.handleChangeSelect}
                            inputProps={{
                                name: "selectNL" + obj.idTNL,
                                id: obj.idTNL,
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {listNguoilam.map((select, index) => (
                                <MenuItem key={index} value={select.idNL}>{select.name}</MenuItem>
                            ))}
                        </Select>

                        <Select
                            className={classes.select}
                            value={this.state["selectCV" + obj.idTNL] || obj.idCV}
                            onChange={this.handleChangeSelect}
                            inputProps={{
                                name: "selectCV" + obj.idTNL,
                                id: obj.idTNL,
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {listCongviec.map((select, index) => (
                                <MenuItem key={index} value={select.idCV}>{select.name}</MenuItem>
                            ))}
                        </Select>

                        <Button variant="contained" color="inherit" className={classes.button2}
                                onClick={() => this.handleButtonDone(obj)}
                        >
                            <DoneIcon/>
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.button2}
                                onClick={() => this.handleButtonClose(obj.idTNL)}
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
                                value={selectNL}
                                onChange={this.handleChangeSelect}
                                inputProps={{
                                    name: 'selectNL'
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {listNguoilam.map((select, index) => (
                                    <MenuItem key={index} value={select.idNL}>{select.name}</MenuItem>
                                ))}
                            </Select>

                            <Select
                                className={classes.select}
                                value={selectNL}
                                onChange={this.handleChangeSelect}
                                inputProps={{
                                    name: 'selectCV'
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {listCongviec.map((select, index) => (
                                    <MenuItem key={index} value={select.idCV}>{select.name}</MenuItem>
                                ))}
                            </Select>

                            <Button variant="contained" color="primary" className={classes.button2}
                                    onClick={this.handleAddDone}
                            >
                                <DoneIcon/>
                            </Button>
                        </div>
                    )
                }
            </form>
        );
    }
}

SetEmployeeForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SetEmployeeForm);
