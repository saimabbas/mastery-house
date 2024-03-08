import React, { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Case1 from "./assets/img/case1.png";
import CaseLogo1 from "./assets/img/ikea.png";

import gsap from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Header from "./components/Header";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const Maincasestudy = () => {
  gsap.registerPlugin(
    Draggable,
    SplitText,
    InertiaPlugin,
    ScrollSmoother,
    ScrollTrigger,
    DrawSVGPlugin
  );

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1.15,
      effects: true,
      smoothTouch: 0,
    });
  });

  return (
    <div className="masteryhouse">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="homepage" id="home_page">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="774"
              height="774"
              fill="none"
              viewBox="0 0 774 774"
              className="circle-3"
            >
              <circle
                cx="387"
                cy="387"
                r="386.5"
                stroke="rgba(255,255,255,0.25)"
              ></circle>
            </svg>
            <Header isActive="casestudy" />
            <section
              className="casestudy-section casestudy-main-page"
              id="casestudy"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="774"
                height="774"
                fill="none"
                viewBox="0 0 774 774"
                className="case-circle1"
              >
                <circle
                  cx="387"
                  cy="387"
                  r="386.5"
                  stroke="rgba(255,255,255,0.25)"
                ></circle>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="774"
                height="774"
                fill="none"
                viewBox="0 0 774 774"
                className="case-circle2"
              >
                <circle
                  cx="387"
                  cy="387"
                  r="386.5"
                  stroke="rgba(255,255,255,0.25)"
                ></circle>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="774"
                height="774"
                fill="none"
                viewBox="0 0 774 774"
                className="case-circle3"
              >
                <circle
                  cx="387"
                  cy="387"
                  r="386.5"
                  stroke="rgba(255,255,255,0.25)"
                ></circle>
              </svg>
              <div className="box">
                <div className="casestudy-cont">
                  <div className="casestudy-head">
                    <h3 className="gradient-text">Case Study</h3>
                  </div>
                  <div className="casestudy-main">
                    <div className="cs-main-grid">
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <div className="inner-service-btn">
                              <Link to="/casestudy1">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h5>
                            Visit Website <BsArrowUpRight />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="cs-main-grid middle-main-grid">
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <div className="inner-service-btn">
                              <Link to="/casestudy1">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h5>
                            Visit Website <BsArrowUpRight />
                          </h5>
                        </div>
                      </div>
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                    </div>
                    <div className="cs-main-grid">
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <div className="inner-service-btn">
                              <Link to="/casestudy1">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h5>
                            Visit Website <BsArrowUpRight />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="cs-main-grid middle-main-grid">
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <div className="inner-service-btn">
                              <Link to="/casestudy1">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h5>
                            Visit Website <BsArrowUpRight />
                          </h5>
                        </div>
                      </div>
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                    </div>
                    <div className="cs-main-grid">
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <div className="inner-service-btn">
                              <Link to="/casestudy1">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h5>
                            Visit Website <BsArrowUpRight />
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Booking />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Maincasestudy;
