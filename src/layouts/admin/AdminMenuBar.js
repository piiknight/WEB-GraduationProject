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
	            			<a href="/dichvu" aria-expanded="true"><span>Dich Vu</span></a>
	          			</li>
	        		</ul>
	      		</nav>
	    	</div>
	  	</div>
	</div>
  );
}

export default AdminMenuBar;
