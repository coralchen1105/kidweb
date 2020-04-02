import React, { Component } from "react";

class LearningList extends Component {
  render() {
    return (
      <div>
        <div class="ht__bradcaump__area">
          <div class="ht__bradcaump__container">
            <img src="images/bg-png/6.png" alt="bradcaump images" />
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="bradcaump__inner text-center">
                    <h2 class="bradcaump-title">class list</h2>
                    <nav class="bradcaump-inner">
                      <a class="breadcrumb-item" href="index.html">
                        Home
                      </a>
                      <span class="brd-separetor">
                        <img
                          src="images/icons/brad.png"
                          alt="separator images"
                        />
                      </span>
                      <span class="breadcrumb-item active">
                        class list view
                      </span>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="dcare__courses__area section-padding--lg bg--white">
          <div class="container">
            <div class="row class__list__page">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="class__list">
                  <div class="courses__thumb">
                    <a href="#">
                      <img src="images/class-list/1.jpg" alt="class images" />
                    </a>
                  </div>
                  <div class="courses__inner">
                    <div class="courses__wrap">
                      <div class="courses__type">
                        Course Type : <span>Basic</span>
                      </div>
                      <div class="courses__content">
                        <div class="class__title">
                          <h4>
                            <a href="#">Color Matching</a>
                          </h4>
                          <p>
                            Class Duration : <span>4 Month</span>
                          </p>
                        </div>
                        <p>
                          Lor error sit volupta aclaud antium, toe ape sriam, ab
                          illnv ritatis et quasi jhaie zanfin archite tbeatae
                          viliq.Lorem ipsum dolor sit ameveritatis evoluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consemagnam aliquam quaerat
                          voluptatem.
                        </p>
                        <ul class="rating d-flex">
                          <li>
                            <span class="ti-star"></span>
                          </li>
                          <li>
                            <span class="ti-star"></span>
                          </li>
                          <li>
                            <span class="ti-star"></span>
                          </li>
                          <li>
                            <span class="ti-star"></span>
                          </li>
                          <li>
                            <span class="ti-star"></span>
                          </li>
                        </ul>
                        <div class="class__available">
                          <p>Age : 2-3 Years</p>
                          <p>Available Seats : 09</p>
                        </div>
                      </div>
                    </div>
                    <ul class="courses__meta d-flex">
                      <li class="prize">$50</li>
                      <li class="comment">
                        <i class="fa fa-comment"></i>53
                      </li>
                      <li class="user">
                        <i class="fa fa-user"></i>40
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="dcare__pagination mt--80">
                  <ul class="dcare__page__list d-flex justify-content-center">
                    <li>
                      <a href="#">
                        <span class="ti-angle-double-left"></span>
                      </a>
                    </li>
                    <li>
                      <a class="page" href="#">
                        Prev
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-ellipsis-h"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">28</a>
                    </li>
                    <li>
                      <a class="page" href="#">
                        Next
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="ti-angle-double-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LearningList;
