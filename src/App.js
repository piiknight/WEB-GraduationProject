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
			<Route path="/home" component={() => <DashBoard />} />
	      	<Route path="/user" component={() => <DashBoard content="user" />} />
	      	<Route path="/congviec" component={() => <DashBoard content="congviec" />} />
	      	<Route path="/dichvu" component={() => <DashBoard content="dichvu" />} />
	      	<Route path="/mon" component={() => <DashBoard content="mon" />} />
	      	<Route path="/menu" component={() => <DashBoard content="menu" />} />
	      	<Route path="/vatdung" component={() => <DashBoard content="vatdung" />} />
	      	<Route path="/nn-vd" component={() => <DashBoard content="nn-vd" />} />
	      	<Route path="/tiec-nn" component={() => <DashBoard content="tiec-nn" />} />
	      	<Route path="/profile" component={() => <DashBoard content="profile" />} />
	      	<Route path="/login" component={Login} />
	      	<Route path="/logout" component={Logout} />
	      	<Route path="/register" component={Register} />
	      	<Route path="/public" component={() => <DashBoardPublic content="public" />} />
	      	<Route path="/food" component={() => <DashBoardPublic content="food" />} />
	      	<Route path="/service" component={() => <DashBoardPublic content="service" />} />
      	</div>
    </Router>
  );
}

export default App;
