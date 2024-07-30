import React from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark text-white-50 footer pt-2 mt-5 wow fadeIn "
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-6 col-md-6 d-flex justify-content-around">
              <div>
                <h5 className="text-white mb-4">Quick Links</h5>
                <a className="btn btn-link text-white-50" href="about.html">
                  About Us
                </a>
                <a className="btn btn-link text-white-50" href="contact.html">
                  Contact Us
                </a>
                <a className="btn btn-link text-white-50" href="index.html">
                  Home
                </a>
              </div>
              <div>
                <h5 className="text-white mb-4">Contact</h5>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  Chennai, Tamil Nadu, India
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  +91 8737848822
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  aaseaman01@gmail.com
                </p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href>
                    <i className="fab fa-youtube" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="copyright">
            <div className="row ">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Job Entry
                </a>
                , All Right Reserved. Made with ❤ by Aman Agrawal
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
