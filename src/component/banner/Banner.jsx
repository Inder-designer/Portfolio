import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Tilt from "react-vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from "typewriter-effect";
// import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const ref = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        // Check if the user has scrolled past the element's offset top
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Add a scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove the scroll event listener on component unmount
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="main">
      <section className="banner" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 order-2 order-lg-1 mt-3 mt-lg-0">
              <p
                className="welcome"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Welcome to my Portfolio
              </p>
              <h1
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <span className="d-flex">
                HI, I'm a {" "} &nbsp;
                  <Typewriter
                    options={{
                      strings: ["Web Designer", "Web Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>{" "} Bhupinder Singh
              </h1>

              <p
                className="text"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="700"
              >
                My portfolio as a front-end developer showcases my expertise in
                designing and building visually appealing, responsive and
                interactive web applications using front-end technologies such
                as HTML, CSS, JavaScript, and frameworks like Bootstrap, and
                Tailwind.
              </p>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
              <img
                src="assets/3657405.png"
                alt=""
                className="img-fluid img1"
                width="400px"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Tilt options={{ glare: true }} className="tilt">
                <img src="assets/hero.png" alt="" className="img-fluid" />
              </Tilt>
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0">
              <p
                className="text"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                I am a dedicated and passionate web designer with a strong
                commitment to creating visually stunning and user-friendly
                websites. With 2.5 Years of experience in designing and
                developing , I have had the privilege of working with diverse
                clients and honing my skills in various aspects of web design.
              </p>
              <p
                className="text"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                I am constantly learning and exploring new technologies and
                design trends. I am proficient in HTML5, CSS3, JavaScript, and
                have experience working with frameworks like Bootstrap and
                Taiwind. Besides, I have basic knowledge of React js and Next
                js. I also leverage my expertise in Adobe Creative Suite and
                prototyping tools to bring ideas to life and deliver exceptional
                results.
              </p>
              <p
                className="detail mt-3 mt-md-4"
                data-aos="fade-up-left"
                data-aos-duration="800"
                data-aos-delay="700"
              >
                <span>Email</span> : bhupinder7814@gmail.com
              </p>
              <p
                className="detail mb-3 mb-md-4"
                data-aos="fade-up-left"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <span>Place</span> : Ropar, Punjab, India - 140001
              </p>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="1100"
                style={{ width: "fit-content" }}
              >
                <a
                  href="assets/Bhupinder Singh.pdf"
                  className="d-inline-block cstmBtn"
                  target="_blank"
                >
                  Resume <i class="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg=8">
              <h2
                className="mb-3"
                data-aos="zoom-in-down"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Skills
              </h2>
              <p
                className="text"
                data-aos="zoom-in-down"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                I create successful responsive websites that are fast, easy to
                use, and built with best practices. The main area of my
                expertise is front-end development, HTML, CSS, JS, building
                small and medium web apps, custom plugins, features, animations,
                and coding interactive layouts.
              </p>
            </div>
          </div>
          <div className="row justify-content-around mt-4 gy-4">
            <div
              className="col-sm-6 col-md-5"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="html lang">
                <p className="d-flex justify-content-between ">
                  HTML / CSS <span>90%</span>
                </p>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-5"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <div className="css lang">
                <p className="d-flex justify-content-between ">
                  Bootstrap / Tailwind <span>90%</span>
                </p>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-5"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <div className="jquery lang">
                <p className="d-flex justify-content-between ">
                  Jquery <span>70%</span>
                </p>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-5"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="1100"
            >
              <div className="javascript lang">
                <p className="d-flex justify-content-between ">
                  Javascript <span>50%</span>
                </p>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-5"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="1300"
            >
              <div className="sass lang">
                <p className="d-flex justify-content-between ">
                  Sass <span>75%</span>
                </p>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-5"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="1500"
            >
              <div className="react lang">
                <p className="d-flex justify-content-between ">
                  React JS <span>50%</span>
                </p>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <Slider {...settings} className="skillSlider  mt-5">
            <div className=" slider_item text-center">
              <img
                src="assets/html.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>HTML</p>
            </div>
            <div className=" slider_item text-center">
              <img
                src="assets/css.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>CSS</p>
            </div>
            <div className=" slider_item text-center">
              <img
                src="assets/react.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>React JS</p>
            </div>
            <div className=" slider_item text-center">
              <img
                src="assets/js.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>Javascript</p>
            </div>
            <div className=" slider_item text-center">
              <img
                src="assets/tailwind.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>Tailwind</p>
            </div>
            <div className=" slider_item text-center">
              <img
                src="assets/bootstrap.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>Bootstrap</p>
            </div>
            <div className=" slider_item text-center">
              <img
                src="assets/github.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>Github</p>
            </div>
            <div className=" slider_item text-center">
              <img
                src="assets/wordpress.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>Wordpress</p>
            </div>
            <div className=" slider_item text-center">
              <img
                src="assets/material.png"
                alt=""
                className="img-fluid mx-auto"
                width="100px"
              />
              <p>Material</p>
            </div>
          </Slider>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <div className="row gy-4">
            <div
              class="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="box position-relative">
                <div class="pagethumb position-relative">
                  <img src="assets/bigtech.png" alt="" class="img-fluid" />
                </div>
                <div class="page_content position-absolute">
                  <div class="page_links">
                    <a
                      href="https://bhupinder-projects.onrender.com/BigTechNew/"
                      target="_blank"
                      className=""
                    >
                      <span>
                        Live <br /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="box position-relative">
                <div class="pagethumb">
                  <img src="assets/Aurres.png" alt="" class="img-fluid" />
                </div>
                <div class="page_content position-absolute">
                  <div class="page_links">
                    <a
                      href="https://bhupinder-projects.onrender.com/Aurres/"
                      target="_blank"
                      className=""
                    >
                      <span>
                        Live <br /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="box position-relative">
                <div class="pagethumb">
                  <img src="assets/passivo.png" alt="" class="img-fluid" />
                </div>
                <div class="page_content position-absolute">
                  <div class="page_links">
                    <a href="https://passivo.io" target="_blank" className="">
                      <span>
                        Live <br /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <div className="box position-relative">
                <div class="pagethumb">
                  <img src="assets/3Deals1.png" alt="" class="img-fluid" />
                </div>
                <div class="page_content position-absolute">
                  <div class="page_links">
                    <a href="https://3deals.ae" target="_blank" className="">
                      <span>
                        Live <br /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <div className="box position-relative">
                <div class="pagethumb">
                  <img
                    src="assets/crypto eTrade.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="page_content position-absolute">
                  <div class="page_links">
                    <a
                      href="https://bhupinder-projects.onrender.com/Crypto%20eTrade%20Landing%20Page/"
                      target="_blank"
                      className=""
                    >
                      <span>
                        Live <br /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1200"
            >
              <div className="box position-relative">
                <div class="pagethumb">
                  <img src="assets/Gaming.png" alt="" class="img-fluid" />
                </div>
                <div class="page_content position-absolute">
                  <div class="page_links">
                    <a
                      href="https://bhupinder-projects.onrender.com/Max%20%20Garza/"
                      target="_blank"
                      className=""
                    >
                      <span>
                        Live <br /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-5 text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            <a href="/projects" className="d-inline-block cstmBtn">
              View All <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="container">
          <h2
            className="mb-3"
            data-aos="zoom-in-down"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Experience
          </h2>
          <div className="row mt-5 justify-content-center">
            <div className="col-md-10">
              <div>
                <p
                  className="designation"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  Web Designer
                </p>
                <h4
                  className="companyName"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  Code Brew Labs <span>October 2022 - May 2023</span>
                </h4>
                <p
                  className="city"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  Chandigarh
                </p>
                <ul className="list-unstyled ps-4">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    Collaborated with a diverse team of designers, developers,
                    and project managers to create visually stunning and highly
                    functional websites for various clients.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    Developed responsive layouts using HTML, CSS, JavaScript,
                    and frameworks like Bootstrap, and Tailwind. ensuring
                    optimal performance across different devices and browsers.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    Convert PSD, Figma to HTML, CSS.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  >
                    Utilized Git and Bitbucket for version control, facilitating
                    efficient collaboration and code management.
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="800"
                  >
                    Created a landing page and dashboard in React js and Next js
                    using Material UI and Flowbite Frameworks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="row contact-info justify-content-center">
            <div
              className="col-8 col-sm-6 col-lg-4 "
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div class="info-item">
                <i class="fas fa-phone mb-3"></i>
                <h3>phone</h3>
                <a href="tel:+91796340328">+91 79863-40328</a>
              </div>
            </div>
            <div
              className="col-8 col-sm-6 col-lg-4 "
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div class="info-item">
                <i class="fas fa-envelope mb-3"></i>
                <h3>Email</h3>
                <a href="mailto:bhupinder7814@gmail.com">
                  bhupinder7814@gmail.com
                </a>
              </div>
            </div>
            <div
              className="col-8 col-sm-6 col-lg-4 "
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div class="info-item">
                <i class="fa-brands fa-linkedin-in mb-3"></i>
                <h3>Linkedin</h3>
                <a
                  href="https://www.linkedin.com/in/bhupinder-singh-840456136"
                  target="_blank"
                >
                  Bhupinder Singh
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        href="#home"
        className={`topbutton ${isScrolled ? "scrolled" : ""}`}
        ref={ref}
      >
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default Banner;
