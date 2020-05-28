import React from "react";

const TopBanner = (props) => {
  return (
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
                    <img src="images/icons/brad.png" alt="separator images" />
                  </span>
                  <span class="breadcrumb-item active">class list view</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
