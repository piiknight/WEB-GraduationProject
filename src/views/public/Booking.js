import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// services or utilities
import {LocalStorageManager} from "utilities/LocalStorageManager";
import {DichvuService} from "services/DichvuService";
import {MenuService} from "services/MenuService";
import {UserService} from "services/UserService";
import {TiecService} from "services/TiecService";
import {LoaiTiecService} from "services/LoaiTiecService";
import * as EventBus from "eventing-bus";

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: 0,
            listLT: [],
            listMenu: [],
            listNN: [],
            listDV: [],
            formData: {
                address: "",
                phone: "",
                quantity: 1,
                idLoai: "",
                idMenu: "",
                idNN: "",
                idDV: "",
                start: new Date(),
                idND: ""
            },
            formError: {
                address: "",
                phone: "",
                quantity: "",
                idLoai: "",
                idMenu: "",
                idNN: "",
                idDV: "",
                start: ""
            },
        };
    };

    loadDataList = () => {
        this.setState({isLogin: LocalStorageManager.isLogin()})
        LoaiTiecService.getAll().then(res => {
            if (!res.error) {
                console.log("LoaiTiecService: " + JSON.stringify(res.data));
                this.setState({listLT: res.data});
            }
        });
        DichvuService.getAll().then(res => {
            if (!res.error) {
                console.log("DichvuService: " + JSON.stringify(res.data));
                this.setState({listDV: res.data});
            }
        });
        MenuService.getAll().then(res => {
            if (!res.error) {
                console.log("MenuService: " + JSON.stringify(res.data));
                this.setState({listMenu: res.data});
            }
        });
        UserService.getUserByMode("OWNER").then(res => {
            if (!res.error) {
                console.log("UserService: " + JSON.stringify(res.data));
                this.setState({listNN: res.data});
            }
        });
    };

    componentDidMount() {
        this.loadDataList();
    };

    handleChange = event => {
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    };

    handleSubmit = event => {
        if (this.state.isLogin) {
            this.state.formData.idND = LocalStorageManager.getCurrentIdUser();
        } else {
            this.state.formData.idND = 0;
        }
        console.log("Booking_handleSubmit: " + JSON.stringify(this.state.formData));
        TiecService.addOne(this.state.formData)
            .then(res => {
                if (res.data) {

                    this.state.formData = {
                        address: "",
                            phone: "",
                            quantity: 1,
                            idLoai: "",
                            idMenu: "",
                            idNN: "",
                            idDV: "",
                            start: new Date(),
                            idND: ""
                    };

                    this.setState({});

                    const snack = {
                        open: true,
                        place: "bc",
                        color: "success",
                        message: "Đặt tiệc thành công, có thể xem tiệc đã đặt (nếu đăng nhập) tại trang admin"
                    };
                    EventBus.publish("snack", snack);
                }
            })
            .catch(error => {
                console.log("catch error:" + error);
            });
        event.preventDefault();
    };

    handleChangeDate = date => {
        console.log("handleChangeDate: " + JSON.stringify(date));
        const {formData} = this.state;
        formData["start"] = date;
        this.setState({
            formData
        });
    }

    render() {
        const {
            isLogin,
            formData,
            listLT,
            listNN,
            listDV,
            listMenu
        } = this.state;

        return (
            <section className="appointment py-5" id="appointment">
                <div className="test_agile_info">
                    <div className="container py-md-3">
                        <div className="w3-head-all mb-3 w3-head-col">
                            <h3>Đặt tiệc </h3>
                            {
                                isLogin ?
                                    <div></div>
                                    :
                                    <h5 style={{textAlign: 'center', color: 'white'}}>Hãy đăng nhập để lưu lại thông tin
                                        lần sau!
                                        <a href={"/login"}
                                           style={{'textDecoration': 'underline', 'fontStyle': 'italic'}}> Đăng
                                            nhập</a>
                                    </h5>
                            }

                        </div>
                        <div className="contact_grid_right">
                            <form onSubmit={this.handleSubmit}>
                                <div className="contact_left_grid">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="address"
                                            placeholder="Địa chỉ (*)"
                                            value={formData.address}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="phone"
                                            placeholder="Số điện thoại (*)"
                                            value={formData.phone}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="quantity"
                                            placeholder="Số bàn (*)"
                                            value={formData.quantity}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select
                                            name="idLoai"
                                            value={formData.idLoai}
                                            onChange={this.handleChange}
                                            required
                                        >
                                            <option value="">Chọn Loại tiệc (*)</option>
                                            {listLT.map((loai, index) => (
                                                <option value={loai.idLoai} key={index}>{loai.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            name="idMenu"
                                            value={formData.idMenu}
                                            onChange={this.handleChange}
                                            required
                                        >
                                            <option value="">Chọn Menu (*)</option>
                                            {listMenu.map((menu, index) => (
                                                <option value={menu.idMenu} key={index}>{menu.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            name="idNN"
                                            value={formData.idNN}
                                            onChange={this.handleChange}
                                            required
                                        >
                                            <option value="">Chọn Người nhận (*)</option>
                                            {listNN.map((nn, index) => (
                                                <option value={nn.idU} key={index}>{nn.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            name="idDV"
                                            alue={formData.idDV}
                                            onChange={this.handleChange}
                                            required
                                        >
                                            <option value="">Chọn Dịch vụ đi kèm</option>
                                            {listDV.map((dv, index) => (
                                                <option value={dv.idDV} key={index}>{dv.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <DatePicker
                                            selected={this.state.formData.start}
                                            onChange={this.handleChangeDate}
                                        />
                                    </div>
                                    <input className="form-control" type="submit"
                                           defaultValue="Book An Appointment"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Booking;
