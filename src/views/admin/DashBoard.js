import React, {Component} from "react";

// @material-ui/core components
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import Snackbar from "../../components/Snackbar/Snackbar";

import AdminHeader from "../../../src/layouts/admin/AdminHeader";
import AdminMenuBar from "../../../src/layouts/admin/AdminMenuBar";
import AdminPageTitle from "../../../src/layouts/admin/AdminPageTitle";

import AdminCongviec from "./Congviec/AdminCongviec";
import AdminDichvu from "./Dichvu/AdminDichvu";
import AdminMon from "./Mon/AdminMon";
import AdminMenu from "./Menu/AdminMenu";
import AdminVatdung from "./Vatdung/AdminVatdung";
import AdminTiecNN from "./TiecNN/AdminTiecNN";
import AdminNNVDung from "./NNVDung/AdminNNVDung";
import AdminUser from "./User/AdminUser";
import AdminProfile from "./Profile/AdminProfile";
import AdminTiecND from "./TiecND/AdminTiecND";
import AdminTiecNL from "./TiecNL/AdminTiecNL";


import * as EventBus from "eventing-bus";

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.content = null;
        this.state = {
            snack: {
                open: false,
                place: "bc",
                color: "info",
                message: ""
            }
        }
        this.subscription = EventBus.on("snack", this.changeSnackStatus);

        switch (this.props.content) {
            case "congviec":
                this.content = <AdminCongviec/>;
                break;
            case "dichvu":
                this.content = <AdminDichvu/>;
                break;
            case "mon":
                this.content = <AdminMon/>;
                break;
            case "menu":
                this.content = <AdminMenu/>;
                break;
            case "vatdung":
                this.content = <AdminVatdung/>;
                break;
            case "nn-vd":
                this.content = <AdminNNVDung/>;
                break;
            case "tiec-nn":
                this.content = <AdminTiecNN/>;
                break;
            case "user":
                this.content = <AdminUser/>;
                break;
            case "profile":
                this.content = <AdminProfile/>;
                break;
            case "tiec-nd":
                this.content = <AdminTiecND/>;
                break;
            case "tiec-nl":
                this.content = <AdminTiecNL/>;
                break;
            default:
                this.content = <div>Default</div>;
                break;
        }
    };

    changeSnackStatus = snack => {
        this.setState({snack: snack});
    };

    componentWillUnmount() {
        this.subscription();
    }

    closeSnack = () => {
        const {snack} = this.state;
        snack.open = false;
        this.setState({snack});
    };

    render() {
        const {snack} = this.state;
        return (
            <div>
                <div className="page-container">
                    {/* sidebar menu area start */}
                    <AdminMenuBar/>
                    {/* sidebar menu area end */}
                    {/* main content area start */}
                    <div className="main-content">
                        {/* header area start */}
                        <AdminHeader/>
                        {/* header area end */}
                        {/* page title area start */}
                        <AdminPageTitle/>
                        {/* page title area end */}
                        <div className="main-content-inner">
                            {this.content}
                        </div>
                    </div>
                    {/* main content area end */}
                    {/* footer area start*/}
                    <footer>
                        <div className="footer-area">
                            <p>© Copyright 2019. Quản lý dịch vụ nấu ăn lễ tiệc.</p>
                        </div>
                    </footer>
                    {/* footer area end*/}
                </div>
                <Snackbar
                    place={snack.place}
                    color={snack.color}
                    icon={AddAlert}
                    message={snack.message}
                    open={snack.open}
                    closeNotification={this.closeSnack}
                    close
                />
                {/* page container area end */}
            </div>
        );
    }
}

export default DashBoard;
