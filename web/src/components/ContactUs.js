import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <section class="page__contact bg--white pb--150 pt--180">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-12 col-lg-4">
                <div class="address location">
                  <div class="ct__icon">
                    <i class="fa fa-home"></i>
                  </div>
                  <div class="address__inner">
                    <h2>Our Location</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporquaerat voluptatem.
                    </p>
                    <ul>
                      <li>
                        Uttara, Zamzam Tower <br /> Road # 12, Sec #13, 5th
                        Floor
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-12 col-lg-4 xs-mt-60">
                <div class="address phone">
                  <div class="ct__icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="address__inner">
                    <h2>Phone Number</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporquaerat voluptatem.
                    </p>
                    <ul>
                      <li>
                        <a href="tell:+08097-654321">+08097-654321</a>
                      </li>
                      <li>
                        <a href="tell:+08097-654321">+08097-654321</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-12 col-lg-4 md-mt-60 sm-mt-60">
                <div class="address email">
                  <div class="ct__icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="address__inner">
                    <h2>E-mail Address</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporquaerat voluptatem.
                    </p>
                    <ul>
                      <li>
                        <a href="mailto:+08097-654321">
                          juniorhomeschool.@email.com
                        </a>
                      </li>
                      <li>
                        <a href="mailto:+08097-654321">
                          Kidscareschool.@yahoo.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="contact__box section-padding--lg bg-image--27">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-sm-12 col-md-12">
                <div class="section__title text-center">
                  <h2 class="title__line">Feel Free To write Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunte magna aliquaet,
                    consectetempora incidunt
                  </p>
                </div>
              </div>
            </div>
            <div class="row mt--80">
              <div class="col-lg-12">
                <div class="contact-form-wrap">
                  <form id="contact-form" action="mail.php" method="post">
                    <div class="single-contact-form name">
                      <input type="text" name="name" placeholder="Your Nme*" />
                      <input type="email" name="email" placeholder="Mail*" />
                    </div>
                    <div class="single-contact-form subject">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject*"
                      />
                    </div>
                    <div class="single-contact-form message">
                      <textarea
                        name="message"
                        placeholder="Type your message here.."
                      ></textarea>
                    </div>
                    <div class="contact-btn">
                      <button type="submit" class="dcare__btn">
                        submit
                      </button>
                    </div>
                  </form>
                </div>
                <div class="form-output">
                  <p class="form-messege"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactUs;
