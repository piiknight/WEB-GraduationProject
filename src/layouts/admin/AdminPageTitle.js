import React from "react";
import { LocalStorageManager } from "utilities/LocalStorageManager";

class AdminPageTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getUserName() {
        return LocalStorageManager.getCurrentUserName() +
            "[" + LocalStorageManager.getMode() + "]";
    }

  	render () {
        return (
            <div className="page-title-area">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="breadcrumbs-area clearfix">
                            <h4 className="page-title pull-left">Hệ thống quản lý</h4>
                            <ul className="breadcrumbs pull-left">
                                <li><a href="/admin/home">Trang chính</a></li>
                                <li><span>Dashboard</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 clearfix">
                        <div className="user-profile pull-right">
                            <img className="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar" />
                            <h4 className="user-name dropdown-toggle" data-toggle="dropdown">{this.getUserName()}<i className="fa fa-angle-down" /></h4>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href={"/admin/profile"}>Thông tin</a>
                                <a className="dropdown-item" href={"/logout"}>Đăng xuất</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
	}
}

export default AdminPageTitle;
