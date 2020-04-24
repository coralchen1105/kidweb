import React, { Component } from "react";
import TopBanner from "../common/TopBanner";
import Pagination from "../common/Pagination";

class TravellingList extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <section class="dcare__event__area bg--white section-padding--lg">
          <div class="container">
            <div class="row event-grid-page">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="event__list">
                  <div class="event__thumb">
                    <a href="event-details.html">
                      <img src="images/event-list/1.jpg" alt="event images" />
                    </a>
                  </div>
                  <div class="event__content">
                    <div class="event__pub">
                      <div class="event__date">
                        <span class="date">14</span>
                        <span>th</span>
                      </div>
                      <ul class="event__time">
                        <li>
                          December, <i class="fa fa-clock-o"></i>5.00 am to 9.00
                          pm
                        </li>
                        <li>
                          <i class="fa fa-home"></i>Childrens Club, Uttara,
                          Dhaka
                        </li>
                      </ul>
                    </div>
                    <div class="event__inner">
                      <h2>
                        <a href="event-details.html">
                          Holiday ! Toy Making Workshop,Our every precious kidz
                          are coordially Invited.So get .Wakw Up...
                        </a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor dolore mag alien minim
                        veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commo consequat. Duis autirure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugExcepteur sint occaecat cproid in culpa qui officia
                        deserunt mollit anim id est laborum. Sed ut
                        perspiciatis.
                      </p>
                    </div>
                    <ul class="event__btn">
                      <li>
                        <a href="#">Book Now</a>
                      </li>
                      <li>
                        <a href="event-details.html">Learn More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </section>
      </div>
    );
  }
}

export default TravellingList;
