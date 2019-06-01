import React, {Component} from "react";

// services or utilities
import {LocalStorageManager} from "utilities/LocalStorageManager";

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: 0
        };
    };

    loadDataList = () => {
        this.setState({ isLogin: LocalStorageManager.isLogin() })
    };

    componentDidMount() {
        this.loadDataList();
    };

    render() {
        const {
            isLogin
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
                                    <h5 style={{textAlign: 'center', color: 'white'}}>Hãy đăng nhập để lưu lại thông tin lần sau!
                                        <a href={"/login"}  style={{'text-decoration': 'underline', 'font-style': 'italic'}}> Đăng nhập</a>
                                    </h5>
                            }

                        </div>
                        <div className="contact_grid_right">
                            <form action="#" method="post">
                                <div className="contact_left_grid">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="Name"
                                               placeholder="Your Name" required/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="Email"
                                               placeholder="Your Email" required/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="phone"
                                               placeholder="Phone Number" required/>
                                    </div>
                                    <div className="form-group">
                                        <select name="from">
                                            <option value="Dover">Select Type</option>
                                            <option value="Felixstowe">Students</option>
                                            <option value="Grimsby">Family</option>
                                            <option value="Newcastle">Office</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input id="datepicker" name="Text" type="text"
                                               placeholder="Date Of Appointment" defaultValue
                                               onFocus="this.value = '';"
                                               onBlur="if (this.value == '') {this.value = 'mm/dd/yyyy';}"
                                               required/>
                                    </div>
                                    <div className="form-group">
                                        <textarea id="textarea" placeholder="Your Message Here" defaultValue={""}/>
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
