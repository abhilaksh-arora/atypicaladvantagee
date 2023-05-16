import React from "react";

const Count = () => {
  return (
    <div>
      <section id="counts" className="counts">
        <div className="container">
          <div className="text-center title">
            <h3>Generating Livelihood Opportunities</h3>
            <h4>Join us in a revolution for a change</h4>
          </div>

          <div className="row counters position-relative">
            <div className="col-lg-3 col-6 text-center">
            <div className="card" style={{width: "15rem", height: "8rem"}}>
                <img className="card-img-top" src="assets/img/hiring.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5>Hiring</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6 text-center">
            <div className="card" style={{width: "15rem", height: "8rem"}}>
                <img className="card-img-top" src="assets/img/events.jpg" alt="Card image cap" />
                <div className="card-body">
                <h5>Events</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6 text-center">
            <div className="card" style={{width: "15rem", height: "8rem"}}>
                <img className="card-img-top" src="assets/img/art.jpg" alt="Card image cap" />
                <div className="card-body">
                <h5>Art</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <div className="card" style={{width: "15rem", height: "8rem"}}>
                <img className="card-img-top" src="assets/img/gifting.jpg" alt="Card image cap" />
                <div className="card-body">
                <h5>Gifting</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Count;
