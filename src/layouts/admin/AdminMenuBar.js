import React, {Component} from "react";

// services or utilities
import { AuthenticationService } from "services/AuthenticationService";
import { LocalStorageManager } from "utilities/LocalStorageManager";
import GridContainer from "../../components/Grid/GridContainer";

class AdminMenuBar extends Component {
    constructor(props) {
        super(props);
    };

    loadPermissionMenu = () => {
        switch (LocalStorageManager.getMode()) {
            case "OWNER":
                console.log("loadPermissionMenu");
                return (
                    <GridContainer>

                    </GridContainer>
                )
            case "ADMIN":
                break;
            case "EMPLOYEE":
                break;
            case "ORDERER":
                break;
            default:
                return <div>Not mode</div>
        }
    };

    render() {
        return (
            <div className="sidebar-menu">
                <div className="sidebar-header">
                    <div className="logo">
                        <a href="/public" style={{fontSize:'15px'}}><i className="ti-dashboard"/><span>Trang chủ</span></a>
                    </div>
                </div>
                <div className="main-menu">
                    <div className="menu-inner">
                        <nav>
                            {
                                LocalStorageManager.getMode() == "OWNER" ?
                                    <ul className="metismenu" id="menu">
                                        <li className="active">
                                            <a href="/admin/nn-vd" aria-expanded="true"><i className="ti-shield"/><span>Vật dụng</span></a>
                                        </li>
                                        <li className="active">
                                            <a href="/admin/tiec-nn" aria-expanded="true"><i className="ti-check-box"/><span>Quản lý Tiệc</span></a>
                                        </li>
                                    </ul>
                                    :
                                    ""
                            }
                            {
                                LocalStorageManager.getMode() == "ADMIN" ?
                                    <ul className="metismenu" id="menu">
                                        <li className="active">
                                            <a href="/admin/user" aria-expanded="true"><i className="ti-notepad"/><span>Người dùng</span></a>
                                        </li>
                                        <li className="active">
                                            <a href="/admin/congviec" aria-expanded="true"><i className="ti-notepad"/><span>Công việc</span></a>
                                        </li>
                                        <li className="active">
                                            <a href="/admin/dichvu" aria-expanded="true"><i className="ti-rss"/><span>Dịch vụ</span></a>
                                        </li>
                                        <li className="active">
                                            <a href="/admin/menu" aria-expanded="true"><i className="ti-book"/><span>Menu</span></a>
                                        </li>
                                        <li className="active">
                                            <a href="/admin/mon" aria-expanded="true"><i className="ti-na"/><span>Món ăn</span></a>
                                        </li>
                                        <li className="active">
                                            <a href="/admin/vatdung" aria-expanded="true"><i className="ti-shield"/><span>Vật dụng</span></a>
                                        </li>
                                    </ul>
                                    :
                                    ""
                            }
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMenuBar;
