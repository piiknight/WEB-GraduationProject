import React from "react";

function AdminMenuBar() {
  return (
    <div className="sidebar-menu">
	  	<div className="sidebar-header">
	    	<div className="logo">
	    		<a href="index.html"><img src="assets/images/icon/logo.png" alt="logo" /></a>
	   	 	</div>
	  	</div>
		<div className="main-menu">
	    	<div className="menu-inner">
	    	  	<nav>
	        		<ul className="metismenu" id="menu">
	          			<li className="active">
	            			<a href="/home" aria-expanded="true"><i className="ti-dashboard" /><span>dashboard</span></a>
	          			</li>
	          			<li className="active">
	            			<a href="/congviec" aria-expanded="true"><span>Công việc</span></a>
	          			</li>
	          			<li className="active">
	            			<a href="/dichvu" aria-expanded="true"><span>Dịch vụ</span></a>
	          			</li>
	          			<li className="active">
	            			<a href="/menu" aria-expanded="true"><span>Menu</span></a>
	          			</li>
	          			<li className="active">
	            			<a href="/mon" aria-expanded="true"><span>Món ăn</span></a>
	          			</li>
                        <li className="active">
                            <a href="/vatdung" aria-expanded="true"><span>Vật dụng</span></a>
                        </li>
                        <li className="active">
                            <a href="/nn-vd" aria-expanded="true"><span>Vật dụng (Người nhận)</span></a>
                        </li>
                        <li className="active">
                            <a href="/tiec-nn" aria-expanded="true"><span>Quản lý Tiệc (Người nhận)</span></a>
                        </li>
	        		</ul>
	      		</nav>
	    	</div>
	  	</div>
	</div>
  );
}

export default AdminMenuBar;
