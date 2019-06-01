import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div>
                {/* Navigation */}
                <header>
                    <div className="top-nav">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand text-uppercase" href="index.html">Hotel zone</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse justify-content-center pr-md-4"
                                     id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Home <span
                                                className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#services">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#gallery">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#testimonials">Testimonial</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* //Navigation */}
                {/*Slider*/}
                <div className="slider">
                    <div className="callbacks_container">
                        <ul className="rslides callbacks callbacks1" id="slider4">
                            <li>
                                <div className="slider-img1">
                                    <div className="dot">
                                        <div className="container">
                                            <div className="slider_banner_info_w3ls">
                                                <h1 className="text-uppercase mb-3">Enjoy the greatest pleasure in our
                                                    hotel </h1>
                                                <p>Etiam vitae augue odio. Ut laoreet ipsum vel ultrices viverra. Donec
                                                    nisl dolor, mollis vel libero id,
                                                    tempor cursus lectus. Vestibulum eu ligula et pharetra efficitur.
                                                    Maecenas eleifend.</p>
                                                <a href="single.html" className="read" data-toggle="modal"
                                                   data-target="#exampleModalCenter" role="button">Read more </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slider-img2">
                                    <div className="dot">
                                        <div className="container">
                                            <div className="slider_banner_info_w3ls">
                                                <h4 className="text-uppercase mb-3">Enjoy the food and rooms in our
                                                    hotel</h4>
                                                <p>Etiam vitae augue odio. Ut laoreet ipsum vel ultrices viverra. Donec
                                                    nisl dolor, mollis vel libero id,
                                                    tempor cursus lectus. Vestibulum eu ligula et pharetra efficitur.
                                                    Maecenas eleifend.</p>
                                                <a href="#" className="read" data-toggle="modal"
                                                   data-target="#exampleModalCenter" role="button">Read more </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slider-img3">
                                    <div className="dot">
                                        <div className="container">
                                            <div className="slider_banner_info_w3ls">
                                                <h4 className="text-uppercase mb-3">Enjoy the best services in our
                                                    hotel</h4>
                                                <p>Etiam vitae augue odio. Ut laoreet ipsum vel ultrices viverra. Donec
                                                    nisl dolor, mollis vel libero id,
                                                    tempor cursus lectus. Vestibulum eu ligula et pharetra efficitur.
                                                    Maecenas eleifend.</p>
                                                <a href="#" className="read" data-toggle="modal"
                                                   data-target="#exampleModalCenter" role="button">Read more </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="slider-img4">
                                    <div className="dot">
                                        <div className="container">
                                            <div className="slider_banner_info_w3ls">
                                                <h4 className="text-uppercase mb-3">Enjoy the food and rooms in our
                                                    hotel</h4>
                                                <p>Etiam vitae augue odio. Ut laoreet ipsum vel ultrices viverra. Donec
                                                    nisl dolor, mollis vel libero id,
                                                    tempor cursus lectus. Vestibulum eu ligula et pharetra efficitur.
                                                    Maecenas eleifend.</p>
                                                <a href="#" className="read" data-toggle="modal"
                                                   data-target="#exampleModalCenter" role="button">Read more </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"/>
                </div>
                {/*//Slider*/}
                {/* //banner */}
                {/* welcome */}
                <div className="welcome py-5" id="about">
                    <div className="container py-md-3">
                        <div className="row">
                            <div className="col-lg-6 welcome-w3lright">
                                <div className="video-grid-single-page-agileits">
                                    <img src="images/w1.png" alt className="img-responsive img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-6 welcome_left">
                                <h3 className="agileits-title">Welcome To Our Hotel</h3>
                                <h4>Donec in nisi non ipsum luctus interdi est. Cras ipsum augue, facilisis non estut,
                                    bibendum finibus.</h4>
                                <p>Phasellus sed semper dolor, sed sodales erat. Donec at mi nunc. Suspendisse dictum
                                    lorem nec velit scelerisque, ac egestas sem tempor. Integer at facilisis enim.
                                    Vestibulum tristique consequat finibus. Donec ut elementum lorem, id dignissim
                                    neque. Curabitur commodo, odio sit amet vestibulum pretium, urna quam tincidunt
                                    elit, a tempus ex urna sit amet tortor.</p>
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
                                    <h4 className="my-sm-3 my-2">Largest Hotel</h4>
                                    <p>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie,
                                        ipsum velit mattis nibh, id congue
                                        lacus lorem a elit. </p>
                                </div>
                            </div>
                            <div className="col-md-4 w3l-services-grid mt-sm-5 mt-3">
                                <div className="w3ls-services-img">
                                    <i className="fas fa-globe"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">Larges Destinations</h4>
                                    <p>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie,
                                        ipsum velit mattis nibh, id congue
                                        lacus lorem a elit. </p>
                                </div>
                            </div>
                            <div className="col-md-4 w3l-services-grid mt-sm-5 mt-3">
                                <div className="w3ls-services-img mt-md-5 ">
                                    <i className="fas fa-utensils"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">Tasty Food</h4>
                                    <p>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie,
                                        ipsum velit mattis nibh, id congue
                                        lacus lorem a elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row w3-services-grids">
                            <div className="col-md-4 w3l-services-grid mt-md-0 mt-sm-5 mt-3">
                                <div className="w3ls-services-img">
                                    <i className="fas fa-bed"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">Modern rooms</h4>
                                    <p>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie,
                                        ipsum velit mattis nibh, id congue
                                        lacus lorem a elit. </p>
                                </div>
                            </div>
                            <div className="col-md-4 w3l-services-grid mt-sm-5 mt-3">
                                <div className="w3ls-services-img">
                                    <i className="fas fa-users"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">100% satisfied customers</h4>
                                    <p>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie,
                                        ipsum velit mattis nibh, id congue
                                        lacus lorem a elit. </p>
                                </div>
                            </div>
                            <div className="col-md-4 w3l-services-grid mt-sm-5 mt-3">
                                <div className="w3ls-services-img mt-md-5">
                                    <i className="fas fa-phone"/>
                                </div>
                                <div className="agileits-services-info">
                                    <h4 className="my-sm-3 my-2">24x7 Customer Support</h4>
                                    <p>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie,
                                        ipsum velit mattis nibh, id congue
                                        lacus lorem a elit. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //services */}
                {/* team */}
                <section className="team py-5" id="team">
                    <div className="container py-md-3">
                        <div className="w3-head-all mb-3">
                            <h3>Our Team</h3>
                        </div>
                        <div className="row text-center">
                            <div className=" col-md-3 col-sm-6 col-6 mb-md-0 mb-5 profile">
                                <div className="img-box">
                                    <img src="images/tm1.jpg" alt className="img-fluid"/>
                                    <ul className="text-center">
                                        <li><a href="#"><span className="fab fa-facebook-f"/></a></li>
                                        <li><a href="#"><span className="fab fa-twitter"/></a></li>
                                        <li><a href="#"><span className="fa fa-rss"/></a></li>
                                    </ul>
                                </div>
                                <h4 className="mt-3">Eliza</h4>
                                <p className="mt-2">General manager</p>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 mb-md-0 mb-5  profile">
                                <div className="img-box">
                                    <img src="images/tm2.jpg" alt className="img-fluid"/>
                                    <ul className="text-center">
                                        <li><a href="#"><span className="fab fa-facebook-f"/></a></li>
                                        <li><a href="#"><span className="fab fa-twitter"/></a></li>
                                        <li><a href="#"><span className="fa fa-rss"/></a></li>
                                    </ul>
                                </div>
                                <h4 className="mt-3">Charles</h4>
                                <p className="mt-2">General Incharge</p>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 profile">
                                <div className="img-box">
                                    <img src="images/tm3.jpg" alt className="img-fluid"/>
                                    <ul className="text-center">
                                        <li><a href="#"><span className="fab fa-facebook-f"/></a></li>
                                        <li><a href="#"><span className="fab fa-twitter"/></a></li>
                                        <li><a href="#"><span className="fa fa-rss"/></a></li>
                                    </ul>
                                </div>
                                <h4 className="mt-3">Johnson</h4>
                                <p className="mt-2">General manager</p>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 profile">
                                <div className="img-box">
                                    <img src="images/tm4.jpg" alt className="img-fluid"/>
                                    <ul className="text-center">
                                        <li><a href="#"><span className="fab fa-facebook-f"/></a></li>
                                        <li><a href="#"><span className="fab fa-twitter"/></a></li>
                                        <li><a href="#"><span className="fa fa-rss"/></a></li>
                                    </ul>
                                </div>
                                <h4 className="mt-3">Michael</h4>
                                <p className="mt-2">General Incharge</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*//team */}
                {/*/Gallry*/}
                <div className="banner-bottom py-5" id="gallery">
                    <div className="container py-md-3">
                        <div className="w3-head-all mb-3">
                            <h3>Our Gallery</h3>
                        </div>
                        <div className="row inner-sec">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 proj_gallery_grid" data-aos="zoom-in">
                                <div className="section_1_gallery_grid">
                                    <a title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                                       href="images/g1.jpg" className="img-fluid">
                                        <div className="section_1_gallery_grid1">
                                            <img src="images/g1.jpg" alt=" " className="img-fluid"/>
                                            <div className="proj_gallery_grid1_pos">
                                                <h3>Hotel zone</h3>
                                                <p>Add some text</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="section_1_gallery_grid" data-aos="zoom-in">
                                    <a title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                                       href="images/g2.jpg" className="img-fluid">
                                        <div className="section_1_gallery_grid1">
                                            <img src="images/g2.jpg" alt=" " className="img-fluid"/>
                                            <div className="proj_gallery_grid1_pos">
                                                <h3>Hotel zone</h3>
                                                <p>Add some text</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 proj_gallery_grid" data-aos="zoom-in">
                                <div className="section_1_gallery_grid">
                                    <a title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                                       href="images/g3.jpg" className="img-fluid">
                                        <div className="section_1_gallery_grid1">
                                            <img src="images/g3.jpg" alt=" " className="img-fluid"/>
                                            <div className="proj_gallery_grid1_pos">
                                                <h3>Hotel zone</h3>
                                                <p>Add some text</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="section_1_gallery_grid" data-aos="zoom-in">
                                    <a title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                                       href="images/g4.jpg" className="img-fluid">
                                        <div className="section_1_gallery_grid1">
                                            <img src="images/g4.jpg" alt=" " className="img-fluid"/>
                                            <div className="proj_gallery_grid1_pos">
                                                <h3>Hotel zone</h3>
                                                <p>Add some text</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 proj_gallery_grid"
                                 data-aos="zoom-in">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 col-sm-6 pr-lg-3 pr-2 section_1_gallery_grid">
                                        <a title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                                           href="images/g5.jpg" className="img-fluid">
                                            <div className="section_1_gallery_grid1">
                                                <img src="images/g5.jpg" alt=" " className="img-fluid"/>
                                                <div className="proj_gallery_grid1_pos">
                                                    <h3>Hotel zone</h3>
                                                    <p>Add some text</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-6 pl-lg-3 pl-2 section_1_gallery_grid"
                                         data-aos="zoom-in">
                                        <a title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                                           href="images/g6.jpg" className="img-fluid">
                                            <div className="section_1_gallery_grid1">
                                                <img src="images/g6.jpg" alt=" " className="img-fluid"/>
                                                <div className="proj_gallery_grid1_pos">
                                                    <h3>Hotel zone</h3>
                                                    <p>Add some text</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*//gallery*/}
                {/* odometer stats*/}
                <section className="odometer1">
                    <div className="layer py-5">
                        <div className="container py-md-3">
                            <div className="w3-head-all mb-3 w3-head-col">
                                <h3>Company Stats</h3>
                            </div>
                            <div className="row w3layouts_statistics_grid_right">
                                <div className="col-sm-3 col-6 text-center w3_stats_grid">
                                    <h3 id="w3l_stats1" className="odometer">0</h3>
                                    <p className="mt-2">Branches</p>
                                </div>
                                <div className="col-sm-3 col-6 text-center w3_stats_grid">
                                    <h3 id="w3l_stats2" className="odometer">0</h3>
                                    <p className="mt-2">Clients</p>
                                </div>
                                <div className="col-sm-3 col-6 mt-sm-0 mt-4 text-center w3_stats_grid">
                                    <h3 id="w3l_stats3" className="odometer">0</h3>
                                    <p className="mt-2">Team</p>
                                </div>
                                <div className="col-sm-3 col-6 mt-sm-0 mt-4 text-center w3_stats_grid">
                                    <h3 id="w3l_stats4" className="odometer">0</h3>
                                    <p className="mt-2">Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //odometer stats */}
                {/* rooms & rates */}
                <div className="plans-section py-5" id="rooms">
                    <div className="container py-md-3">
                        <div className="w3-head-all mb-3">
                            <h3>Rooms And Rates</h3>
                        </div>
                        <div className="priceing-table-main">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 price-grid">
                                    <div className="price-block agile">
                                        <div className="price-gd-top">
                                            <img src="images/r1.jpg" alt=" " className="img-responsive img-fluid"/>
                                            <h4>Deluxe Room</h4>
                                        </div>
                                        <div className="price-gd-bottom">
                                            <div className="price-list">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star-o" aria-hidden="true"/></li>
                                                </ul>
                                            </div>
                                            <div className="price-selet">
                                                <h3><span>$</span>320</h3>
                                                <a href="#appointment" className="scroll">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 price-grid ">
                                    <div className="price-block agile">
                                        <div className="price-gd-top">
                                            <img src="images/r2.jpg" alt=" " className="img-responsive img-fluid"/>
                                            <h4>Luxury Room</h4>
                                        </div>
                                        <div className="price-gd-bottom">
                                            <div className="price-list">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star-o" aria-hidden="true"/></li>
                                                </ul>
                                            </div>
                                            <div className="price-selet">
                                                <h3><span>$</span>220</h3>
                                                <a href="#appointment" className="scroll">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 price-grid lost">
                                    <div className="price-block agile">
                                        <div className="price-gd-top">
                                            <img src="images/r3.jpg" alt=" " className="img-responsive img-fluid"/>
                                            <h4>Guest House</h4>
                                        </div>
                                        <div className="price-gd-bottom">
                                            <div className="price-list">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star-o" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star-o" aria-hidden="true"/></li>
                                                </ul>
                                            </div>
                                            <div className="price-selet">
                                                <h3><span>$</span>180</h3>
                                                <a href="#appointment" className="scroll">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 price-grid wthree lost">
                                    <div className="price-block agile">
                                        <div className="price-gd-top ">
                                            <img src="images/r4.jpg" alt=" " className="img-responsive img-fluid"/>
                                            <h4>Single Room</h4>
                                        </div>
                                        <div className="price-gd-bottom">
                                            <div className="price-list">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star-o" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star-o" aria-hidden="true"/></li>
                                                    <li><i className="fa fa-star-o" aria-hidden="true"/></li>
                                                </ul>
                                            </div>
                                            <div className="price-selet">
                                                <h3><span>$</span> 150</h3>
                                                <a href="#appointment" className="scroll">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                {/*// rooms & rates */}
                {/* Appointment */}
                <section className="appointment py-5" id="appointment">
                    <div className="test_agile_info">
                        <div className="container py-md-3">
                            <div className="w3-head-all mb-3 w3-head-col">
                                <h3>Book an Appointment</h3>
                            </div>
                            <div className="contact_grid_right">
                                <form action="#" method="post">
                                    <div className="contact_left_grid">
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="Name"
                                                   placeholder="Your Name" required/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="email" name="Email"
                                                   placeholder="Your Email" required/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="phone"
                                                   placeholder="Phone Number" required/>
                                        </div>
                                        <div className="form-group">
                                            <select name="from">
                                                <option value="Dover">Select Type</option>
                                                <option value="Felixstowe">Students</option>
                                                <option value="Grimsby">Family</option>
                                                <option value="Newcastle">Office</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input id="datepicker" name="Text" type="text"
                                                   placeholder="Date Of Appointment" defaultValue
                                                   onfocus="this.value = '';"
                                                   onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}"
                                                   required/>
                                        </div>
                                        <div className="form-group">
                                            <textarea id="textarea" placeholder="Your Message Here" defaultValue={""}/>
                                        </div>
                                        <input className="form-control" type="submit"
                                               defaultValue="Book An Appointment"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //Appointment */}
                {/*reviews_sec*/}
                <section className="banner-bottom reviews_sec py-5" id="testimonials">
                    <div className="container py-md-3">
                        <div className="w3-head-all mb-3 w3-head-col">
                            <h3>Testimonial</h3>
                        </div>
                        <div className="inner-sec">
                            <div className="flexslider mx-auto">
                                <ul className="slides">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-3 testimonials_grid-inn">
                                                <img src="images/test1.jpg" alt=" " className="img-fluid"/>
                                            </div>
                                            <div className="col-md-9 testimonials_grid text-left">
                                                <h3>Gretchen
                                                </h3>
                                                <i>United States</i>
                                                <p><span>"</span>Maecenas interdum, metus vitae tincidunt
                                                    porttitor,Proin eget gravida odio. Donec ullamcorper est eu magna
                                                    quam
                                                    egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida
                                                    odio. Donec ullamcorper est eu accumsan cursus<span>"</span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-md-3 testimonials_grid-inn">
                                                <img src="images/test2.jpg" alt=" " className="img-fluid"/>
                                            </div>
                                            <div className="col-md-9 testimonials_grid text-left">
                                                <h3>Josephine Lee
                                                </h3>
                                                <i>United States</i>
                                                <p><span>"</span>Maecenas interdum, metus vitae tincidunt
                                                    porttitor,Proin eget gravida odio. Donec ullamcorper est eu magna
                                                    quam
                                                    egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida
                                                    odio. Donec ullamcorper est eu accumsan cursus<span>"</span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-md-3 testimonials_grid-inn">
                                                <img src="images/test3.jpg" alt=" " className="img-fluid"/>
                                            </div>
                                            <div className="col-md-9 testimonials_grid text-left">
                                                <h3>Mark Olson
                                                </h3>
                                                <i>United States</i>
                                                <p><span>"</span>Maecenas interdum, metus vitae tincidunt
                                                    porttitor,Proin eget gravida odio. Donec ullamcorper est eu magna
                                                    quam
                                                    egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida
                                                    odio. Donec ullamcorper est eu accumsan cursus<span>"</span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/**/}
                {/*//main*/}
                {/* Contact-form */}
                <div className="contact py-5" id="contact">
                    <div className="container  py-md-3">
                        <div className="w3-head-all mb-3 w3-head-col">
                            <h3>Contact us</h3>
                        </div>
                        <div className="address-below">
                            <div className="contact-icons text-center row">
                                <div className="col-md-4 col-sm-4 col-xs-4 footer_grid_left">
                                    <div className="icon_grid_left">
                                        <span className="fas fa-map-marker" aria-hidden="true"/>
                                    </div>
                                    <div className="address-gried">
                                        <p>333 Broome St<span>New York,Ny 10002,</span></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4 footer_grid_left">
                                    <div className="icon_grid_left">
                                        <span className="fas fa-phone" aria-hidden="true"/>
                                    </div>
                                    <div className="address-gried">
                                        <p>+(000) 123 4565 32 <span>+(010) 123 4565 35</span></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4 footer_grid_left">
                                    <div className="icon_grid_left">
                                        <span className="fas fa-envelope-open" aria-hidden="true"/>
                                    </div>
                                    <div className="address-gried">
                                        <p><a href="mailto:info@example.com">info@example1.com</a>
                                            <span><a href="mailto:info@example.com">info@example2.com</a></span>
                                        </p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="w3layouts_mail_grid_right">
                            <form action="#" method="post">
                                <div className="row contact-grids">
                                    <div className="col-md-6 col-xs-6 wthree_contact_left_grid">
                                        <input type="text" name="Name" placeholder="Name" required/>
                                    </div>
                                    <div className="col-md-6 col-xs-6 wthree_contact_left_grid">
                                        <input type="email" name="Email" placeholder="Email" required/>
                                    </div>
                                    <div className="col-md-6 col-xs-6 wthree_contact_left_grid">
                                        <input type="text" name="Telephone" placeholder="Telephone" required/>
                                    </div>
                                    <div className="col-md-6 col-xs-6 wthree_contact_left_grid">
                                        <input type="text" name="Subject" placeholder="Subject" required/>
                                    </div>
                                    <div className="clearfix"></div>
                                    <textarea name="Message" placeholder="Message..." required defaultValue={""}/>
                                    <input type="submit" defaultValue="Submit"/>
                                    <input type="reset" defaultValue="Clear"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/*map*/}
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.9940307!3d40.719109700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1441710758555"/>
                </div>
                {/* //map*/}
                {/* //Contact-form */}
                {/* footer section */}
                <section className="newsletter text-center py-5">
                    <div className="container py-lg-3">
                        <div className="subscribe_inner">
                            <h4 className="mb-4">Subscribe Us</h4>
                            <p className="mb-4">Subscribe to our Newsletter to get latest offers from our Barber. </p>
                            <form action="#" method="post" className="subscribe_form">
                                <input className="form-control" type="email" placeholder="Enter Your Email..."
                                       required/>
                                <button type="submit" className="btn1 btn-primary submit"><i
                                    className="fas fa-paper-plane" aria-hidden="true"/></button>
                            </form>
                            <div className="social mt-5">
                                <ul className="d-flex mt-4 justify-content-center">
                                    <li className="mx-2"><a href="#"><span className="fab fa-facebook-f"/></a></li>
                                    <li className="mx-2"><a href="#"><span className="fab fa-twitter"/></a></li>
                                    <li className="mx-2"><a href="#"><span className="fas fa-rss"/></a></li>
                                    <li className="mx-2"><a href="#"><span className="fab fa-linkedin-in"/></a></li>
                                    <li className="mx-2"><a href="#"><span className="fab fa-google-plus"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyright mt-5">
                            <p>© 2018 Hotel zone. All Rights Reserved | Design by <a
                                href="http://w3layouts.com/">W3layouts</a></p>
                        </div>
                    </div>
                </section>
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
