import React from "react";

const SubBanner = props => {
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="footer__widget">
        <div class="ft__logo">
          <p>
            <img src="images/logo/junior.png" alt="logo images" />
          </p>
        </div>

        <div class="ftr__details">
          <p>
            Lorem ipsum dolor sit cnr adipisicing elit, sed do eiusmod teagna
            aliqua. Lorem ipsudolor sit cnr adi.
          </p>
        </div>
        <div class="ftr__address__inner">
          <div class="footer__social__icon">
            <ul class="dacre__social__link--2 d-flex justify-content-start">
              <li class="facebook">
                <a href="https://www.facebook.com/">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="twitter">
                <a href="https://twitter.com/">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="vimeo">
                <a href="https://vimeo.com/">
                  <i class="fa fa-vimeo"></i>
                </a>
              </li>
              <li class="pinterest">
                <a href="https://www.pinterest.com/">
                  <i class="fa fa-pinterest-p"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="ft__btm__title">
            <h4>About Us</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
