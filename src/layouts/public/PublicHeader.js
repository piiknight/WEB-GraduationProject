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
                                <a className="navbar-brand text-uppercase" href="index.html">Hotel zone</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse justify-content-center pr-md-4"
                                     id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className={url == "public" ? "nav-item active" : "nav-item"}>
                                            <a className="nav-link" href="/public">Trang chủ
                                                <span className="sr-only">current</span>
                                            </a>
                                        </li>
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
                                                <div className="clearfix">
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
                                                <div className="clearfix">
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
                                                <h1 className="text-uppercase mb-3">Enjoy the greatest pleasure in our
                                                    hotel </h1>
                                                <p>Etiam vitae augue odio. Ut laoreet ipsum vel ultrices viverra. Donec
                                                    nisl dolor, mollis vel libero id,
                                                    tempor cursus lectus. Vestibulum eu ligula et pharetra efficitur.
                                                    Maecenas eleifend.</p>
                                                <a href="single.html" className="read" data-toggle="modal"
                                                   data-target="#exampleModalCenter" role="button">Read more </a>
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
                                                <h4 className="text-uppercase mb-3">Enjoy the food and rooms in our
                                                    hotel</h4>
                                                <p>Etiam vitae augue odio. Ut laoreet ipsum vel ultrices viverra. Donec
                                                    nisl dolor, mollis vel libero id,
                                                    tempor cursus lectus. Vestibulum eu ligula et pharetra efficitur.
                                                    Maecenas eleifend.</p>
                                                <a href="#" className="read" data-toggle="modal"
                                                   data-target="#exampleModalCenter" role="button">Read more </a>
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
                                                <h4 className="text-uppercase mb-3">Enjoy the best services in our
                                                    hotel</h4>
                                                <p>Etiam vitae augue odio. Ut laoreet ipsum vel ultrices viverra. Donec
                                                    nisl dolor, mollis vel libero id,
                                                    tempor cursus lectus. Vestibulum eu ligula et pharetra efficitur.
                                                    Maecenas eleifend.</p>
                                                <a href="#" className="read" data-toggle="modal"
                                                   data-target="#exampleModalCenter" role="button">Read more </a>
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
                                                <h4 className="text-uppercase mb-3">Enjoy the food and rooms in our
                                                    hotel</h4>
                                                <p>Etiam vitae augue odio. Ut laoreet ipsum vel ultrices viverra. Donec
                                                    nisl dolor, mollis vel libero id,
                                                    tempor cursus lectus. Vestibulum eu ligula et pharetra efficitur.
                                                    Maecenas eleifend.</p>
                                                <a href="#" className="read" data-toggle="modal"
                                                   data-target="#exampleModalCenter" role="button">Read more </a>
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