import React, {Component} from "react";

// services or utilities
import {search} from "utilities/Searching";
import {DichvuService} from "services/DichvuService";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        };
    };

    loadDataList = () => {
        DichvuService.getAll().then(res => {
            if (!res.error) {
                let result = [];
                let arrChild = [];
                for (let i = 0; i < res.data.length; i++) {
                    arrChild.push(res.data[i]);
                    if (((i + 1) % 3 == 0) || (i == (res.data.length - 1))) {
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
            <div className="banner-bottom py-5" id="gallery">

                {listData.map((listChild, index) => (
                    <div className="container py-md-3">
                        {
                            index == 0 ?
                                <div className="w3-head-all mb-3">
                                    <h3>Dịch vu đi kèm</h3>
                                </div>
                                :
                                <div>
                                </div>
                        }
                        <div className="row inner-sec">
                            {listChild.map((obj, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 proj_gallery_grid" data-aos="zoom-in" key={index}>
                                    <div className="section_1_gallery_grid">
                                        <div className="section_1_gallery_grid1">
                                            <img src="/performance/images/g1.jpg" alt=" " className="img-fluid"/>
                                            <div className="proj_gallery_grid1_pos">
                                                <h3>{obj.name}</h3>
                                                <p>Add some text</p>
                                            </div>
                                        </div>
                                        {/*<a title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."*/}
                                           {/*href="/performance/images/g1.jpg" className="img-fluid">*/}
                                            {/*<div className="section_1_gallery_grid1">*/}
                                                {/*<img src="/performance/images/g1.jpg" alt=" " className="img-fluid"/>*/}
                                                {/*<div className="proj_gallery_grid1_pos">*/}
                                                    {/*<h3>{obj.name}</h3>*/}
                                                    {/*<p>Add some text</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</a>*/}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default Service;
