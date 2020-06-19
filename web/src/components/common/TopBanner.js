import React from "react";

const TopBanner = (props) => {
  console.log(props.pathVariable);
  return (
    <div className="ht__bradcaump__area">
      <div className="ht__bradcaump__container">
        <img src="images/bg-png/6.png" alt="bradcaump images" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcaump__inner text-center">
                <h2 className="bradcaump-title"> {props.pathVariable} list</h2>
                <nav className="bradcaump-inner">
                  <a className="breadcrumb-item" href="index.html">
                    Home
                  </a>

                  <span className="breadcrumb-item active">
                    {props.pathVariable} list view
                  </span>
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
