import React, { Component } from "react";

class Categories extends Component {
  render() {
    return (
      <div class="col-lg-4 col-md-6 col-sm-12 md-mt-40 sm-mt-40">
        <div class="footer__widget">
          <h4>Categories</h4>
          <div class="footer__innner">
            <div class="ftr__latest__post">
              <ul class="ftr__catrgory">
                <li>
                  <a href="#">Painting</a>
                </li>
                <li>
                  <a href="#">Alphabet Matching</a>
                </li>
                <li>
                  <a href="#">Drawing</a>
                </li>
                <li>
                  <a href="#">Swimming</a>
                </li>
                <li>
                  <a href="#">Sports & Games</a>
                </li>
                <li>
                  <a href="#">Painting</a>
                </li>
                <li>
                  <a href="#">Alphabet Matching</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
