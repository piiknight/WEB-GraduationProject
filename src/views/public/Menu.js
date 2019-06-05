import React, {Component} from "react";

// services or utilities
import {search} from "utilities/Searching";
import {MenuService} from "services/MenuService";
import {MenuMonService} from "services/MenuMonService";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            listRate: [1, 2, 3, 4, 5],
            listName: []
        };
    };

    loadDataList = () => {
        MenuService.getAll().then(res => {
            if (!res.error) {
                let resultAll = [];
                for (let i = 0; i < res.data.length; i++) {
                    MenuMonService.getAllByIdMenu(res.data[i].idMenu).then(response => {
                        if (!response.error) {
                            let name = res.data[i].name;
                            let price = 0;

                            let result = [];
                            let arrChild = [];
                            for (let i = 0; i < response.data.length; i++) {
                                arrChild.push(response.data[i]);
                                price += response.data[i].price;
                                if (((i + 1) % 4 == 0) || (i == (response.data.length - 1))) {
                                    result.push(arrChild);
                                    arrChild = [];
                                }
                            }

                            this.state.listName.push({name: name, price: price});
                            resultAll.push(result);
                            // if (i == res.data.length - 1) {
                            //     this.setState({listData: resultAll});
                            // }
                            this.setState({listData: resultAll});
                        }
                    });
                }
            }
        });
    };

    componentDidMount() {
        this.loadDataList();
    };

    render() {
        const {
            listData,
            listRate,
            listName
        } = this.state;

        console.log("listData: " + JSON.stringify(listData));
        console.log("listName: " + JSON.stringify(listName));

        return (
            <div>
                {listData.map((listMenu, indexMenu) => (
                    <div className="plans-section py-5" id="rooms" key={indexMenu}>
                        {listMenu.map((listChild, index) => (
                            <div className="container py-md-3" key={index}>
                                {
                                    index == 0 ?
                                        <div className="w3-head-all mb-3">
                                            <h3>{listName[indexMenu].name}</h3>
                                            <h3>giá: {listName[indexMenu].price}</h3>
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
                                                                        <li><i className="fa fa-star"
                                                                               aria-hidden="true"/></li>
                                                                        :
                                                                        <li><i className="fa fa-star-0"
                                                                               aria-hidden="true"/></li>
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
                ))}
            </div>
        );
    }
}

export default Menu;
