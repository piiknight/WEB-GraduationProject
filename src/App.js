import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./layouts/auth/Login";
import Register from "./layouts/auth/Register";
import DashBoard from "./views/admin/DashBoard";

function App() {
  return (
    <Router>
      	<div>
			<Route path="/home" component={() => <DashBoard />} />
	      	<Route path="/congviec" component={() => <DashBoard content="congviec" />} />
	      	<Route path="/dichvu" component={() => <DashBoard content="dichvu" />} />
	      	<Route path="/login" component={Login} />
	      	<Route path="/register" component={Register} />
      	</div>
    </Router>
  );
}

export default App;
