import React from "react";

function AdminHeader() {
    return (
        <div className="header-area">
            <div className="row align-items-center">
                {/* nav and search button */}
                <div className="col-md-6 col-sm-8 clearfix">
                    <div className="nav-btn pull-left">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <div className="search-box pull-left">
                        <form action="#">
                            <input type="text" name="search" placeholder="Search..." required/>
                            <i className="ti-search"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;
