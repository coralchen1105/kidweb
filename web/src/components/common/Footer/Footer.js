import React, { Component } from "react";
import SubBanner from "../Footer/SubBanner";
import RecentPost from "../RecentPost";
import Categories from "../Categories";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" class="footer-area footer--2">
        <div class="footer__wrapper bg-image--10 section-padding--lg">
          <div class="container">
            <div class="row">
              <SubBanner />
              <RecentPost />
              <Categories />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
