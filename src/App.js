import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Logout from "./views/Auth/Logout";
import DashBoard from "./views/admin/DashBoard";
import DashBoardPublic from "./views/public/DashBoardPublic";

function App() {
  return (
    <Router>
      	<div>
			<Route path="/admin/home" component={() => <DashBoard />} />
	      	<Route path="/admin/user" component={() => <DashBoard content="user" />} />
	      	<Route path="/admin/congviec" component={() => <DashBoard content="congviec" />} />
	      	<Route path="/admin/dichvu" component={() => <DashBoard content="dichvu" />} />
	      	<Route path="/admin/mon" component={() => <DashBoard content="mon" />} />
	      	<Route path="/admin/menu" component={() => <DashBoard content="menu" />} />
	      	<Route path="/admin/vatdung" component={() => <DashBoard content="vatdung" />} />
	      	<Route path="/admin/nn-vd" component={() => <DashBoard content="nn-vd" />} />
	      	<Route path="/admin/tiec-nn" component={() => <DashBoard content="tiec-nn" />} />
	      	<Route path="/admin/profile" component={() => <DashBoard content="profile" />} />
	      	<Route path="/admin/login" component={Login} />
	      	<Route path="/logout" component={Logout} />
	      	<Route path="/register" component={Register} />
	      	<Route path="/public" component={() => <DashBoardPublic content="public" />} />
	      	<Route path="/food" component={() => <DashBoardPublic content="food" />} />
	      	<Route path="/service" component={() => <DashBoardPublic content="service" />} />
	      	<Route path="/menu" component={() => <DashBoardPublic content="menu" />} />
      	</div>
    </Router>
  );
}

export default App;
