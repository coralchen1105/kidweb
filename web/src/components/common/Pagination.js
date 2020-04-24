import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  return (
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
  );
};

Pagination.propTypes = {};

export default Pagination;
