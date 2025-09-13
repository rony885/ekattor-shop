import React from "react";

const Deal = () => {
  return (
    <section className="deal-day section-pt">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="deal-day-wrap">
              <div className="deal-day-block deal-wrap">
                <div
                  className="deal-block"
                  style={{ backgroundImage: "url('/img/deal/deal-bg.jpg')" }}
                >
                  <div className="section-capture">
                    <div className="section-title">
                      <span className="sub-title">Every day shopping</span>
                      <h2>
                        <span>Deal of the days</span>
                      </h2>
                    </div>
                  </div>
                  <div className="timer-section1" id="the-24h-countdown">
                    <ul className="clock"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
