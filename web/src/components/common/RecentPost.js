import React, { Component } from "react";

class RecentPost extends Component {
  render() {
    return (
      <div class="col-lg-4 col-md-6 col-sm-12 sm-mt-40">
        <div class="footer__widget">
          <h4>Latest Blog</h4>
          <div class="footer__innner">
            <div class="ftr__latest__post">
              <div class="single__ftr__post d-flex">
                <div class="ftr__post__thumb">
                  <a href="blog-details.html">
                    <img src="images/blog/post-img/2.jpg" alt="post images" />
                  </a>
                </div>
                <div class="ftr__post__details">
                  <h6>
                    <a href="blog-details.html">
                      Sports Day is near! so lets get ready soon
                    </a>
                  </h6>
                  <span>
                    <i class="fa fa-calendar"></i>30th Dec, 2017
                  </span>
                </div>
              </div>

              <div class="single__ftr__post d-flex">
                <div class="ftr__post__thumb">
                  <a href="blog-details.html">
                    <img src="images/blog/post-img/3.jpg" alt="post images" />
                  </a>
                </div>
                <div class="ftr__post__details">
                  <h6>
                    <a href="blog-details.html">Sports Day Celebration</a>
                  </h6>
                  <span>
                    <i class="fa fa-calendar"></i>21th Dec, 2017
                  </span>
                </div>
              </div>

              <div class="single__ftr__post d-flex">
                <div class="ftr__post__thumb">
                  <a href="blog-details.html">
                    <img src="images/blog/post-img/4.jpg" alt="post images" />
                  </a>
                </div>
                <div class="ftr__post__details">
                  <h6>
                    <a href="blog-details.html">Sports Day Celebration</a>
                  </h6>
                  <span>
                    <i class="fa fa-calendar"></i>10th Dec, 2017
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentPost;
