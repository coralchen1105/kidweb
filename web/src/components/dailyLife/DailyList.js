import React, { Component } from "react";
import TopBanner from "../common/TopBanner";

class DailyList extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <section class="dcare__blog__area section-padding--lg bg--white">
          <div class="container">
            <div class="row blog-page">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="blog__2">
                  <div class="blog__thumb">
                    <a href="blog-details.html">
                      <img src="images/blog/bl-2/1.jpg" alt="blog images" />
                    </a>
                  </div>
                  <div class="blog__inner">
                    <div class="blog__hover__inner">
                      <h2>
                        <a href="blog-details.html">
                          Don’t have basic knowledge..! So, stay learning with
                          us
                        </a>
                      </h2>
                      <div class="bl__meta">
                        <p>
                          Children Blog : Post By Ariana / 10th November, 2017
                        </p>
                      </div>
                      <div class="bl__details">
                        <p>
                          Lorem ipsum dolor sit amet, consect adsicinge elit,
                          sed do eiusmod tempor incidi.
                        </p>
                      </div>
                      <div class="blog__btn">
                        <a class="bl__btn" href="blog-details.html">
                          Read More
                        </a>
                        <a class="bl__share__btn" href="#">
                          <i class="fa fa-share-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DailyList;
