import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import HeroEvent from "../components/hero_event"


const UpcomingEvent = () => {
  return (
    <section className="my-5">
      <Container>
      <h1 className="text-4xl font-bold mb-4 text-center">Upcoming Events</h1>
        <Row className="justify-content-start">
            <HeroEvent
              name="Jukti Reunion"
              type="Seminar"
              date="28/08/2024"
              time="12:00 AM"
              location="DMK-1009"
              image="https://zaidfahad.com/img/logo.jpg"
              link="/event/3"
            />
        </Row>
      </Container>
    </section>


    
  );
};

export default UpcomingEvent;
