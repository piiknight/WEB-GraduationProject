import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div>

                {/* welcome */}
                <div className="welcome py-5" id="about">
                    <div className="container py-md-3">
                        <div className="row">
                            <div className="col-lg-6 welcome-w3lright">
                                <div className="video-grid-single-page-agileits">
                                    <img src="/performance/images/w1.png" alt className="img-responsive img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-6 welcome_left">
                                <h3 className="agileits-title">Chào mừng bạn đến với hệ thống</h3>
                                <h4>
                                    Luôn cập nhật, bắt kịp nhu cầu khách hàng, phục vụ tận tình, đầy đủ, luôn làm hài hòng những thực khách khó tính nhất
                                </h4>
                                <p>
                                    Có rất nhiều món ăn, dịch vụ, thực đơn hấp dẫn, hứa hẹn sẽ tạo nên một bữa tiệc tốt nhất
                                    cho bạn và người thân. Bạn cũng có thể lựa chọn đầu bếp hàng đầu của chúng tối (người trực tiếp chỉ đạo) buổi tiệc.
                                    Chắc chắn sẽ không bao giờ làm bạn thất vọng.
                                </p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                {/* //welcome */}
                {/* services */}
                <div className="services py-5" id="services">
                    <div className="container py-md-3">
                        <div className="w3-head-all mb-3 w3-head-col">
                            <h3>Our Services</h3>
                        </div>
                        <div className="row w3-services-grids mt-md-5 mt-3">
                            <div className="col-md-4 w3l-services-grid">
                                <div className="w3ls-services-img">
                                    <i className="fas fa-home"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">Tùy chọn quy mô</h4>
                                    <p>Dù tiệc to hay nhỏ, chúng tôi luôn sẵn lòng phục vụ</p>
                                </div>
                            </div>
                            <div className="col-md-4 w3l-services-grid mt-sm-5 mt-3">
                                <div className="w3ls-services-img">
                                    <i className="fas fa-globe"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">Không ngại địa lí</h4>
                                    <p>Hiện nay các dịch vụ của chúng tôi đã phát triển, hoạt động trong và ngoại tỉnh</p>
                                </div>
                            </div>
                            <div className="col-md-4 w3l-services-grid mt-sm-5 mt-3">
                                <div className="w3ls-services-img mt-md-5 ">
                                    <i className="fas fa-utensils"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">Thức ăn ngon và vệ sinh</h4>
                                    <p>Các đầu bếp được trang bị đầy đủ kiến thức, kỹ năng</p>
                                </div>
                            </div>
                        </div>
                        <div className="row w3-services-grids">
                            <div className="col-md-4 w3l-services-grid mt-md-0 mt-sm-5 mt-3">
                                <div className="w3ls-services-img">
                                    <i className="fas fa-book"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">Giá cả phải chăng</h4>
                                    <p>Có rất nhiều mức giá cho khách hàng lựa chọn, vẫn đảm bảo được chất lượng thực đơn và khẩu phần</p>
                                </div>
                            </div>
                            <div className="col-md-4 w3l-services-grid mt-sm-5 mt-3">
                                <div className="w3ls-services-img">
                                    <i className="fas fa-users"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">100% nhận phản hồi tốt từ khách hàng</h4>
                                    <p>
                                        Các vị khách đều quay trở lại và tiếp tục tin tưởng bếp trưởng nói riêng và hệ thống của chúng tôi nói chung</p>
                                </div>
                            </div>
                            <div className="col-md-4 w3l-services-grid mt-sm-5 mt-3">
                                <div className="w3ls-services-img mt-md-5">
                                    <i className="fas fa-phone"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">Luôn trong tâm thế sẵn sàng giải đáp</h4>
                                    <p>Nhân viên luôn hài lòng, tận tình lấng nghe và giải đáp những thắc mắc của khách hàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //footer section */}
                {/* Vertically centered Modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-uppercase text-center" id="exampleModalLongTitle"> Hotel
                                    zone</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src="images/ban5.jpg" className="img-fluid mb-3" alt="Modal Image"/>
                                Vivamus eget est in odio tempor interdum. Mauris maximus fermentum arcu, ac finibus
                                ante. Sed mattis risus at ipsum elementum, ut auctor turpis cursus. Sed sed odio
                                pharetra, aliquet velit cursus, vehicula enim. Mauris porta aliquet magna, eget laoreet
                                ligula.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
