import React, {Component} from "react";

// services or utilities
import {search} from "utilities/Searching";
import {UserService} from "services/UserService";

class Owner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            listRate: [1, 2, 3, 4, 5]
        };
    };

    loadDataList = () => {
        UserService.getUserByMode("OWNER").then(res => {
            if (!res.error) {
                let result = [];
                let arrChild = [];
                for (let i = 0; i < res.data.length; i++) {
                    arrChild.push(res.data[i]);
                    if (((i + 1) % 4 == 0) || (i == (res.data.length - 1))) {
                        result.push(arrChild);
                        arrChild = [];
                    }
                }
                this.setState({listData: result});
            }
        });
    };

    componentDidMount() {
        this.loadDataList();
    };

    render() {
        const {
            listData,
            listRate
        } = this.state;

        console.log("listData: " + JSON.stringify(listData));

        return (
            <section className="team py-5" id="team">
                {listData.map((listChild, index) => (
                    <div className="container py-md-3" key={index}>
                        {
                            index == 0 ?
                                <div className="w3-head-all mb-3">
                                    <h3>Người nhận tổ chức tiệc</h3>
                                </div>
                                :
                                <div>
                                </div>
                        }
                        <div className="row text-center">
                            {listChild.map((obj, index) => (
                                <div className=" col-md-3 col-sm-6 col-6 mb-md-0 mb-5 profile" key={index}>
                                    <div className="img-box">
                                        <img style={{width: 300, height: 250}} src={"/performance/images/nn/nn_" + (index + 1) + ".jpg"} alt className="img-fluid"/>
                                        <ul className="text-center">
                                            {listRate.map(rate => (
                                                rate <= obj.point
                                                    ?
                                                    <li><a href="javascript:0"><i className="fa fa-star" aria-hidden="true"/></a></li>
                                                    :
                                                    <li></li>
                                            ))}
                                        </ul>

                                    </div>
                                    <h4 className="mt-3">{obj.name}</h4>
                                    <p className="mt-2">{obj.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        );
    }
}

export default Owner;
