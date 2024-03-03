import React from "react";
import Book from "../assets/img/booking.png";
import GIT1 from "../assets/img/Capa_1.svg";
import GIT2 from "../assets/img/asssvg.svg";
import GIT3 from "../assets/img/epmsvg.svg";

const Booking = () => {
  return (
    <section className="booking-section">
      <div className="booking-cont">
        <div className="booking-img">
          <img src={Book} alt="" />
        </div>
        <div className="git-box">
          <div className="git-circle-1"></div>
          <div className="git-circle-2"></div>
          <div className="git-b-top">
            <h3 className="gradient-text">Book a Call with Us</h3>
            <p>
              Ready to transform your business with blockchain and AI? Consult
              with our masters todayand take the first step towards a future of
              innovation and success.
            </p>
          </div>
          <div className="gitsvg-box">
            <div>
              <img src={GIT1} alt="" />
              <span>
                Initial Consultation{" "}
                <h6>
                  Let's discuss how we can redefine the digital narrative
                  together
                </h6>
              </span>
            </div>
            <div>
              <img src={GIT2} alt="" />
              <span>
                Advanced Strategy Session
                <h6>
                  Deep dive into your digital needs and plot the course ahead
                </h6>
              </span>
            </div>
            <div>
              <img src={GIT3} alt="" />
              <span>
                Exclusive Partnership Meeting
                <h6>Let's collaborate and create digital excellence</h6>
              </span>
            </div>
          </div>
          <button className="gradient-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Booking;