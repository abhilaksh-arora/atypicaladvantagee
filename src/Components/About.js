import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
              <img className="about-img" src="assets/img/about-ap.jpg" />
            </div>

            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>Why we do, What we do</h3>
              <p>
                Atypical Advantage is India’s largest Inclusive platform that
                generates economic livelihood for Persons with Disabilities.
                Whether it is a singer looking for a show, a visual artist
                looking to sell their paintings, or freelancers/full-time job
                seekers with a disability looking for a career opportunity,
                Atypical Advantage bridges the supply &amp; demand side
                inefficiencies and creates a level playing field, so that
                Persons with Disabilities can earn a dignified income. The
                platform has a large pool of 15,000+ talents with disabilities
                &amp; has worked with 150+ corporates within a short span of 2
                years.
              </p>
              <p>
                At Atypical Advantage, we go beyond traditional job portals. We
                are committed to providing a platform that focuses specifically
                on the strengths and abilities of our job seekers. We believe
                that every individual has unique talents, and we aim to showcase
                these abilities to potential employers.
              </p>
              <p>
                Atypical Advantage serves as a bridge between employers and
                exceptional talent. We partner with inclusive companies that
                value diversity and understand the benefits of a diverse
                workforce. By collaborating with us, employers gain access to a
                pool of qualified candidates who bring a fresh perspective,
                creativity, and resilience to their teams.
              </p>

              {/* <div className="icon-box">
            <div className="icon"><i className="bx bx-fingerprint"></i></div>
            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>

          <div className="icon-box">
            <div className="icon"><i className="bx bx-gift"></i></div>
            <h4 className="title"><a href="">Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>

          <div className="icon-box">
            <div className="icon"><i className="bx bx-atom"></i></div>
            <h4 className="title"><a href="">Dine Pad</a></h4>
            <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
          </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
