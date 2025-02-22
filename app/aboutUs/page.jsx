"use client";
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BoardCard from '../components/board_card'; // Import the new component

const About = () => {
  // Hardcoded data for Advisor and Executive board members
  const advisors = [
    {
      Name: "Rasheeq Ishmum",
      Position: "Advisor",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
    {
      Name: "Rasheeq Ishmum",
      Position: "Advisor",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
    {
      Name: "Rasheeq Ishmum",
      Position: "Advisor",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
  ];

  const executives = [
    {
      Name: "Rasheeq Ishmum",
      Position: "President",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
    {
      Name: "Rasheeq Ishmum",
      Position: "President",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
    {
      Name: "Rasheeq Ishmum",
      Position: "President",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
    {
      Name: "Rasheeq Ishmum",
      Position: "President",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
    {
      Name: "Rasheeq Ishmum",
      Position: "President",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
    {
      Name: "Rasheeq Ishmum",
      Position: "President",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
    {
      Name: "Rasheeq Ishmum",
      Position: "Vice President",
      Image: "/img/board/Rasheeq Ishmum - President.jpeg",
      SocialLinks: {
        facebook: "https://www.facebook.com/rasheeq.ishmum",
        linkedin: "https://www.linkedin.com/in/rasheeq-ishmum",
        instagram: "https://www.instagram.com/rasheeq.ishmum"
      }
    },
  ];

  return (
    <>
      <section className="bg-dark-navy">
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-1 text-light">ABOUT US</h2>
          <p className="text-light text-center lead">
            Empowering Minds, Igniting Innovations - Unleashing the Potential of Computer Science and Engineering.
          </p>
        </div>
      </section>

      <h1 className="text-4xl font-bold mt-5 mb-6 text-center">Advisory Board</h1>
      <Container>
        <Row>
          {advisors.map((advisor, index) => (
            <BoardCard
              key={index}
              name={advisor.Name}
              position={advisor.Position}
              image={advisor.Image}
              socialLinks={advisor.SocialLinks}
            />
          ))}
        </Row>
      </Container>

      <h1 className="text-4xl font-bold mt-5 mb-6 text-center">Executive Board</h1>
      <Container>
        <Row>
          {executives.map((executive, index) => (
            <BoardCard
              key={index}
              name={executive.Name}
              position={executive.Position}
              image={executive.Image}
              socialLinks={executive.SocialLinks}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default About;
