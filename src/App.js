import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Logout from "./views/Auth/Logout";
import DashBoard from "./views/admin/DashBoard";

function App() {
  return (
    <Router>
      	<div>
			<Route path="/home" component={() => <DashBoard />} />
	      	<Route path="/congviec" component={() => <DashBoard content="congviec" />} />
	      	<Route path="/dichvu" component={() => <DashBoard content="dichvu" />} />
	      	<Route path="/mon" component={() => <DashBoard content="mon" />} />
	      	<Route path="/menu" component={() => <DashBoard content="menu" />} />
	      	<Route path="/vatdung" component={() => <DashBoard content="vatdung" />} />
	      	<Route path="/nn-vd" component={() => <DashBoard content="nn-vd" />} />
	      	<Route path="/tiec-nn" component={() => <DashBoard content="tiec-nn" />} />
	      	<Route path="/login" component={Login} />
	      	<Route path="/logout" component={Logout} />
	      	<Route path="/register" component={Register} />
      	</div>
    </Router>
  );
}

export default App;
