import React, {Component} from "react";

// services or utilities
import {search} from "utilities/Searching";
import {MonService} from "services/MonService";

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            listRate: [1, 2, 3, 4, 5]
        };
    };

    loadDataList = () => {
        MonService.getAll().then(res => {
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
        console.log("listRate: " + JSON.stringify(listRate));

        return (
            <div className="plans-section py-5" id="rooms">
                {listData.map((listChild, index) => (
                    <div className="container py-md-3" key={index}>
                        {
                            index == 0 ?
                                <div className="w3-head-all mb-3">
                                    <h3>Danh sách món ăn hiện tại</h3>
                                </div>
                                :
                                <div>
                                </div>
                        }

                        <div className="priceing-table-main">
                            <div className="row">
                                {listChild.map((obj, index) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6 price-grid " key={index}>
                                        <div className="price-block agile">
                                            <div className="price-gd-top">
                                                <img src={"/performance/images/mon/mon_" + (index + 1) + ".jpg"} alt=" "
                                                     className="img-responsive img-fluid"/>
                                                <h4>{obj.name}</h4>
                                            </div>
                                            <div className="price-gd-bottom">
                                                <div className="price-list">
                                                    <ul>
                                                        {listRate.map(rate => (
                                                            rate <= obj.point
                                                                ?
                                                            <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                                :
                                                            <li><i className="fa fa-star-0" aria-hidden="true"/></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="price-selet">
                                                    <h3><span>$</span>{obj.price}</h3>
                                                    {/*<a href="#appointment" className="scroll">Book Now</a>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Food;
