import React, { useRef } from "react";
import Slider from "react-slick";
import HeroEvent from "../components/hero_event";
import { Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample event data
const events = [
  {
    name: "Jukti Reunion",
    type: "Seminar",
    date: "28/08/2024",
    time: "12:00 AM",
    location: "DMK-1009",
    image: "/img/Events/upevent1.jpg",
    link: "/event/3",
  },
  {
    name: "Hackathon 2024",
    type: "Competition",
    date: "30/09/2024",
    time: "10:00 AM",
    location: "SECS Lobby",
    image: "/img/Events/image3.PNG",
    link: "/event/4",
  },
  {
    name: "Tech Talk",
    type: "Talk",
    date: "15/10/2024",
    time: "3:00 PM",
    location: "AUD-1002",
    image: "/img/Events/upevent2.jpg",
    link: "/event/5",
  },
];

// Slider settings (no default arrows)
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  adaptiveHeight: true,
};

const UpcomingEvent = () => {
  const sliderRef = useRef(null);

  return (
    <section className="my-5 position-relative">
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-center">Upcoming Events</h1>
        <div style={{ position: "relative" }}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {events.map((event, index) => (
              <HeroEvent key={index} {...event} />
            ))}
          </Slider>

          {/* Custom navigation arrows */}
          <div
            style={{
              position: "absolute",
              bottom: "18px",
              right: "18px",
              display: "flex",
              gap: "10px",
              zIndex: 2,
            }}
          >
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              style={{
                background: "#000",
                color: "#fff",
                border: "2px solid #ff5722",
                // borderRadius: "5px",
                padding: "10px 10px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              aria-label="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              style={{
                background: "#000",
                color: "#fff",
                border: "2px solid #ff5722",
                // borderRadius: "5px",
                padding: "10px 10px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              aria-label="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UpcomingEvent;
