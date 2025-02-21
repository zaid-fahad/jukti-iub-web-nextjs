import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import EventSlide from './event_slide'; // Assuming EventSlide component is properly created

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const SwiperSection = () => {
  return (
    <>
      <section
        className="section events bg-dark-navy"
        data-section="section4"
        style={{
          position: "relative",
          backgroundColor: "#081420",
          minHeight: "70vh",
        }}
      >
        <div className="custom-shape-divider-top-1686612771">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="container-fluid pt-5">
          <h2 className="display-6 fw-bold text-white text-center pt-2">
            Activities
          </h2>
          <div className="border-bot1 d-flex justify-content-center">
            <div className="border-line"></div>
          </div>
          <div className="row pt-0">
            <div className="col-md-12">
              <div className="section-heading">
                <a href="/pastevent.html" className="btn btn-outline-orange">
                  Jukti's Journey
                </a>
              </div>
            </div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"} // Allow auto sizing based on slide content
              spaceBetween={30} // Optional, for some spacing between slides
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={false}
              modules={[EffectCoverflow, Pagination, Autoplay]}
            >
              {/* Add multiple SwiperSlide components with fixed size */}
              <SwiperSlide style={{ width: "300px", height: "500px" }}>
                <EventSlide
                  imgSrc="img/Events/e1.PNG"
                  title="Android App Dev Training"
                  details={[
                    "Program details: Room: Gallery - 5002 (Level - 4)",
                    "• 1st Day (May 28, 2015 - Thursday)",
                    "• 2nd Day (May 29, 2015 - Friday)",
                    "• 3rd Day (May 30, 2015 - Saturday)"
                  ]}
                  link="/eventPage"
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "300px", height: "500px" }}>
                <EventSlide
                  imgSrc="img/Events/e2.PNG"
                  title="Web Development Workshop"
                  details={[
                    "Learn modern web technologies.",
                    "• Date: June 10, 2015",
                    "• Time: 10:00 AM - 3:00 PM"
                  ]}
                  link="/eventPage2"
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "300px", height: "500px" }}>
                <EventSlide
                  imgSrc="img/Events/e3.PNG"
                  title="Tech Talk: AI in 2025"
                  details={[
                    "Insights from industry leaders.",
                    "• Date: July 20, 2015",
                    "• Venue: Main Auditorium"
                  ]}
                  link="/eventPage3"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default SwiperSection;
