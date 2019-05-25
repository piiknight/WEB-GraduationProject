import React, {Component} from "react";
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

class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.content = null;
		switch (this.props.content) {
			case "congviec":
                this.content = <AdminCongviec />;
                break;
			case "dichvu":
                this.content = <AdminDichvu />;
                break;
            case "mon":
                this.content = <AdminMon />;
                break;
            case "menu":
                this.content = <AdminMenu />;
                break;
            case "vatdung":
                this.content = <AdminVatdung />;
                break;
            case "nn-vd":
                this.content = <AdminNNVDung />;
                break;
            case "tiec-nn":
                this.content = <AdminTiecNN />;
                break;
			default:
                this.content = <div>Default</div>;
				break;
        }
	};

	render() {
		return (
		    <div>
				<div className="page-container">
				    {/* sidebar menu area start */}
				    <AdminMenuBar />
				    {/* sidebar menu area end */}
				    {/* main content area start */}
				    <div className="main-content">
				    {/* header area start */}
				    <AdminHeader />
				    {/* header area end */}
				    {/* page title area start */}
				    <AdminPageTitle />
				    {/* page title area end */}
				    <div className="main-content-inner">
				      	{this.content}
				    </div>
				    </div>
				    {/* main content area end */}
				    {/* footer area start*/}
				    <footer>
				      	<div className="footer-area">
				        	<p>© Copyright 2018. All right reserved. Template by <a href="https://colorlib.com/wp/">Colorlib</a>.</p>
				      	</div>
				    </footer>
				    {/* footer area end*/}
			  	</div>
			  	{/* page container area end */}
			</div>
	  	);
	}
}

export default DashBoard;
