import React from "react";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>For generating livelihood for people with disabilities</h1>
              <h2>
              At Atypical Advantage, we believe that everyone deserves equal opportunities in the workforce, regardless of their abilities. We are dedicated to bridging the gap between job seekers with disabilities and inclusive employers who recognize the unique talents and skills they bring to the table.
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img
                src="assets/img/hero-img.png"
                className="img-fluid"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
