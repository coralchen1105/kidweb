import React, { Component } from "react";
import { Link } from "react-router-dom";

class Narbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.location.pathname);
    var headerclassName = "jnr__header header--one clearfix";
    var NavBgclassName =
      "mainmenu__wrapper bg__cat--1 poss-relative header_top_line sticky__header";

    if (this.props.location.pathname !== "/") {
      headerclassName = "jnr__header header--2 clearfix";
      NavBgclassName = "mainmenu__wrapper bg--white sticky__header";
    }
    return (
      <header id="header" className={headerclassName}>
        <div className="junior__header__top bg-image--5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-6 col-sm-9 col-12">
                <div className="jun__header__top__left">
                  <ul className="top__address d-flex justify-content-start align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap">
                    <li>
                      <span>E-mail Address : </span>
                      <a href="#">jhome@mail.com</a>
                    </li>
                    <li>
                      <span>Contact Now : </span>
                      <a href="#">+003457289</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-lg-6 col-sm-3 col-12">
                <div className="jun__header__top__right">
                  <ul className="accounting d-flex justify-content-lg-end justify-content-md-end justify-content-start align-items-center">
                    <li>
                      <a className="login-trigger" href="#">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="accountbox-trigger" href="#">
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={NavBgclassName}>
          <div className="container">
            <div className="row d-none d-lg-flex">
              <div className="col-sm-4 col-md-6 col-lg-2 order-1 order-lg-1">
                <div className="logo"></div>
              </div>
              <div className="col-sm-4 col-md-2 col-lg-9 order-3 order-lg-2">
                <div className="mainmenu__wrap">
                  <nav className="mainmenu__nav">
                    <ul className="mainmenu">
                      <li className="drop">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="drop">
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li className="drop">
                        <Link to="/learning">Learning</Link>
                      </li>
                      <li className="drop">
                        <Link to="/travelling">Travelling</Link>
                      </li>
                      <li className="drop">
                        <Link to="/dailylife">Daily Life</Link>
                      </li>
                      <li className="drop">
                        <Link to="/contactus">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                <div className="shopbox d-flex justify-content-end align-items-center">
                  <a className="minicart-trigger" href="#">
                    <i className="fa fa-shopping-basket"></i>
                  </a>
                  <span>03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Narbar;
