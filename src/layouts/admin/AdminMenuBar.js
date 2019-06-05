import React, {Component} from "react";

// services or utilities
import { AuthenticationService } from "services/AuthenticationService";
import { LocalStorageManager } from "utilities/LocalStorageManager";

class AdminMenuBar extends Component {
    constructor(props) {
        super(props);
    };

    loadPermissionMenu = () => {
        let permission = [];
        switch (LocalStorageManager.getMode()) {
            case "OWNER":
                permission = [
                    {
                        url: "profile",
                        isHide: true
                    },
                    {
                        url: "nn-vd",
                        name: "Vật dụng",
                        icon: "shield"
                    },
                    {
                        url: "tiec-nn",
                        name: "Quản lý Tiệc",
                        icon: "check-box"
                    },
                ];
                break;
            case "ADMIN":
                permission = [
                    {
                        url: "profile",
                        isHide: true
                    },
                    {
                        url: "user",
                        name: "Người dùng",
                        icon: "user"
                    },
                    {
                        url: "congviec",
                        name: "Công việc",
                        icon: "notepad"
                    },
                    {
                        url: "dichvu",
                        name: "Dịch vụ",
                        icon: "rss"
                    },
                    {
                        url: "menu",
                        name: "Menu",
                        icon: "book"
                    },
                    {
                        url: "mon",
                        name: "Món ăn",
                        icon: "na"
                    },
                    {
                        url: "vatdung",
                        name: "Vật dụng",
                        icon: "shield"
                    },
                ];
                break;
            case "EMPLOYEE":
                permission = [
                    {
                        url: "profile",
                        isHide: true
                    },
                    {
                        url: "tiec-nl",
                        name: "Quản lý Tiệc",
                        icon: "check-box"
                    },
                ]
                break;
            case "ORDERER":
                permission = [
                    {
                        url: "profile",
                        isHide: true
                    },
                    {
                        url: "tiec-nd",
                        name: "Quản lý Tiệc",
                        icon: "check-box"
                    },
                ];
                break;
            default:
                return <div>Not mode</div>

        }

        console.log("adfsaf: " + window.location.href);
        let split = window.location.href.split("/");
        let curUrl = split[split.length - 1];
        let isPass = false;
        for (let i = 0; i < permission.length; i++) {
            if (permission[i].url == curUrl) {
                isPass = true;
                break;
            }
        }

        if (!isPass) {
            window.location.replace("/error?msg=404");
        }

        return (
            <ul className="metismenu" id="menu">
                {permission.map((child, index) => (
                    (child.name)
                        ?
                        <li className="active" key={index}>
                            <a href={"/admin/" + child.url} aria-expanded="true"><i className={"ti-" + child.icon}/><span>{child.name}</span></a>
                        </li>
                        :
                        <div></div>
                ))}
            </ul>
        )
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
                                this.loadPermissionMenu()
                            }
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMenuBar;
