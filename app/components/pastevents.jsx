import React from "react";
import { Container, Row } from "react-bootstrap";
import EventCard from "../components/event_card"

const PastEvents = () => {
  return (
    <>
    <section className="my-5">
      <h1 className="text-4xl font-bold mb-4 text-center">Past Events</h1>
      <Container>
        <Row >
            <EventCard
              // key={index}
              name="Jukti Reunion"
              type="Seminar"
              date="28/08/2024"
              time="122Am"
              location="DMK-1009"
              // If image is null or empty, use default
              image="/img/Events/e9.PNG"
              link="3"
            />
            <EventCard
              // key={index}
              name="Jukti Reunion"
              type="Seminar"
              date="28/08/2024"
              time="122Am"
              location="DMK-1009"
              // If image is null or empty, use default
              image="/img/Events/upevent1.jpg"
              link="3"
            />
            <EventCard
              // key={index}
              name="Jukti Reunion"
              type="Seminar"
              date="28/08/2024"
              time="122Am"
              location="DMK-1009"
              // If image is null or empty, use default
              image="/img/Events/upevent2.jpg"
              link="3"
            />
            <EventCard
              // key={index}
              name="Jukti Reunion"
              type="Seminar"
              date="28/08/2024"
              time="122Am"
              location="DMK-1009"
              // If image is null or empty, use default
              image="/img/Events/e3.PNG"
              link="3"
            />
            <EventCard
              // key={index}
              name="Jukti Reunion"
              type="Seminar"
              date="28/08/2024"
              time="122Am"
              location="DMK-1009"
              // If image is null or empty, use default
              image="/img/Events/e6.PNG"
              link="3"
            />
        </Row>
      </Container>
    </section>

    
    </>
  );
};

export default PastEvents;
