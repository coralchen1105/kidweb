import React, { Component } from "react";

class RecentBlog extends Component {
  render() {
    return (
      <section class="jnr__blog_area section-padding--lg bg-image--3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="section__title text-center white--title">
                <h2 class="title__line">Recent Blog</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row blog__wrapper mt--40">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2017</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img src="images/blog/md-img/1.jpg" alt="blog images" />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Ariana</span>
                  <h4>
                    <a href="blog-details.html">
                      Basic Knowledge About Drawing
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="#">Comments : 05</a>
                    </li>
                    <li>
                      <a href="#">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2017</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img src="images/blog/md-img/2.jpg" alt="blog images" />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Jonson</span>
                  <h4>
                    <a href="blog-details.html">Study Tour</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="#">Comments : 05</a>
                    </li>
                    <li>
                      <a href="#">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2017</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img src="images/blog/md-img/3.jpg" alt="blog images" />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Michel Jack</span>
                  <h4>
                    <a href="blog-details.html">Childrens Day</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="#">Comments : 05</a>
                    </li>
                    <li>
                      <a href="#">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RecentBlog;
