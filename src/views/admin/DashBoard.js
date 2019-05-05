import React, {Component} from "react";
import AdminHeader from "../../../src/layouts/admin/AdminHeader";
import AdminMenuBar from "../../../src/layouts/admin/AdminMenuBar";
import AdminPageTitle from "../../../src/layouts/admin/AdminPageTitle";

import AdminDichvu from "./AdminDichvu";

class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.content = null;
		if (this.props.content == "dichvu") {
			this.content = <AdminDichvu />;
		} else {
			this.content = <div>abc</div>;
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
