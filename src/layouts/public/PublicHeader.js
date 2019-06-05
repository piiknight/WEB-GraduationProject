import React from "react";
import { LocalStorageManager } from "utilities/LocalStorageManager";

class PublicHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getUserName() {
        return LocalStorageManager.getCurrentUserName() +
            "[" + LocalStorageManager.getMode() + "]";
    }

    isLogin() {
        return LocalStorageManager.isLogin();
    }

    render () {
        let splitURL = window.location.href.split('/');
        let url = splitURL[splitURL.length - 1];
        return (
            <div>
                {/* Navigation */}
                <header>
                    <div className="top-nav">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand text-uppercase" href="/public">Trang chủ</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse justify-content-center pr-md-4"
                                     id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className={url == "food" ? "nav-item active" : "nav-item"}>
                                            <a className="nav-link" href="/food">Món ăn
                                                <span className="sr-only">current</span>
                                            </a>
                                        </li>
                                        <li className={url == "menu" ? "nav-item active" : "nav-item"}>
                                            <a className="nav-link" href="/menu">Menu
                                                <span className="sr-only">current</span>
                                            </a>
                                        </li>
                                        <li className={url == "owner" ? "nav-item active" : "nav-item"}>
                                            <a className="nav-link" href="/owner">Người nhận
                                                <span className="sr-only">current</span>
                                            </a>
                                        </li>
                                        <li className={url == "service" ? "nav-item active" : "nav-item"}>
                                            <a className="nav-link" href="/service">Dịch vụ đi kèm
                                                <span className="sr-only">current</span>
                                            </a>
                                        </li>
                                        <li className={url == "booking" ? "nav-item active" : "nav-item"}>
                                            <a className="nav-link" href="/booking">Đặt tiệc
                                                <span className="sr-only">current</span>
                                            </a>
                                        </li>

                                        {
                                            this.isLogin() ?
                                                <div className="clearfix" style={{marginTop: "-15px"}}>
                                                    <div className="user-profile pull-right">
                                                        <img className="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar" />
                                                        <h4 className="user-name dropdown-toggle" data-toggle="dropdown">{this.getUserName()}<i className="fa fa-angle-down" /></h4>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href={"/admin/profile"}>Thông tin</a>
                                                            <a className="dropdown-item" href={"/logout"}>Đăng xuất</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="clearfix" style={{marginTop: "-5px"}}>
                                                    <div className="user-profile pull-right">
                                                        <h4 className="user-name dropdown-toggle">
                                                            <a style={{color: 'white'}} href="/login">Login</a>
                                                        </h4>
                                                    </div>
                                                </div>
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* //Navigation */}
                {/*Slider*/}
                <div className="slider">
                    <div className="callbacks_container">
                        <ul className="rslides callbacks callbacks1" id="slider4">
                            <li>
                                <div className="slider-img1">
                                    <div className="dot">
                                        <div className="container">
                                            <div className="slider_banner_info_w3ls">
                                                <h1 className="text-uppercase mb-3">Không gian hiện đại</h1>
                                                <p>Một hình ảnh được chụp trong buổi tiệc cưới cách đây không lâu.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slider-img2">
                                    <div className="dot">
                                        <div className="container">
                                            <div className="slider_banner_info_w3ls">
                                                <h1 className="text-uppercase mb-3">Những món ăn ngon từ những đầu bếp giỏi</h1>
                                                <p>Thực đơn, thức ăn luôn luôn cập nhật liên tục, đổi mới, luôn có rất nhiều sự lựa chọn cho khách hàng.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slider-img3">
                                    <div className="dot">
                                        <div className="container">
                                            <div className="slider_banner_info_w3ls">
                                                <h4 className="text-uppercase mb-3">Tổng quan một buổi tiệc</h4>
                                                <p>Không chỉ cung cấp vật dụng cơ bản, hệ thống còn hỗ trợ các vật dụng đi kèm theo yêu cầu:
                                                   tivi, âm thanh, ánh sáng, ghế bọc,..
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slider-img4">
                                    <div className="dot">
                                        <div className="container">
                                            <div className="slider_banner_info_w3ls">
                                                <h4 className="text-uppercase mb-3">Cách trang trí phối màu</h4>
                                                <p>Hiện đại, phù hợp, luôn hỗ trợ cho khách hàng lựa chọn không gian, vật liệu phù hợp nhất</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        );
    }
}

export default PublicHeader;