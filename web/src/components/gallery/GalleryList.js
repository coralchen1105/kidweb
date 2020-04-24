import React, { Component } from "react";
import TopBanner from "../common/TopBanner";

class GalleryList extends Component {
  render() {
    return (
      <div>
        <TopBanner />

        <div class="junior__gallery__area gallery-page-one gallery__masonry__activation gallery--3 bg-image--25 section-padding--lg">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="gallery__menu">
                  <button data-filter="*" class="is-checked">
                    All
                  </button>
                  <button data-filter=".cat--1">Learning</button>
                  <button data-filter=".cat--2">Games</button>
                  <button data-filter=".cat--3">Event</button>
                </div>
              </div>
            </div>
            <div class="row galler__wrap masonry__wrap mt--80">
              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item cat--2">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/1.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item cat--1">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/2.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item cat--2">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/3.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item cat--3">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/4.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-4 col-sm-6 col-12 gallery__item cat--1">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/5.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item cat--1">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/6.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item cat--2">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/7.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item cat--3">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/8.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/9.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item cat--3">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/10.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-12 gallery__item">
                <div class="gallery">
                  <div class="gallery__thumb">
                    <a href="#">
                      <img
                        src="images/gallery/gl-page-one/11.jpg"
                        alt="gallery images"
                      />
                    </a>
                  </div>
                  <div class="gallery__hover__inner">
                    <div class="gallery__hover__action">
                      <ul class="gallery__zoom">
                        <li>
                          <a
                            href="images/gallery/big-img/1.jpg"
                            data-lightbox="grportimg"
                            data-title="My caption"
                          >
                            <i class="fa fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-details.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryList;
