import React from "react";
import {withRouter} from "react-router-dom";

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let url = new URL(window.location.href);
        let msg = url.searchParams.get("msg");
        console.log(msg);
        return (
            <div className="error-area ptb--100 text-center">
                <div className="container">
                    <div className="error-content">
                        <h2>{msg}</h2>
                        <p>Access to this resource on the server is denied</p>
                        <a href="/admin/profile">Back to Dashboard</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Error);
