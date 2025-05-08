"use client";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BoardCard from "../components/board_card";

const About = () => {
  const [advisors, setAdvisors] = useState([]);
  const [executives, setExecutives] = useState([]);
  const [activeMembers, setActiveMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl =
          "https://script.google.com/macros/s/AKfycbxGit2TPiyIEeehlpd5zsp6fdLO0QbKEssjO8FtzIc9IuQecCx1JSXvnNS8yim8ALgjsQ/exec?sheet=";

        const [advisorRes, executiveRes, activeMemberRes] = await Promise.all([
          fetch(`${baseUrl}Advisor`),
          fetch(`${baseUrl}EB`),
          fetch(`${baseUrl}Active%20Members`),
        ]);

        const [advisorData, executiveData, activeMemberData] =
          await Promise.all([
            advisorRes.json(),
            executiveRes.json(),
            activeMemberRes.json(),
          ]);

        console.log(advisorData); // Log the raw data to check image field
        setAdvisors(advisorData);
        setExecutives(executiveData);
        setActiveMembers(activeMemberData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const defaultImageUrl = "https://zaidfahad.com/img/logo.jpg";

  if (loading) {
    return (
      <div className="text-center py-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <section className="bg-dark-navy">
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-1 text-light">ABOUT US</h2>
          <p className="text-light text-center lead">
            Empowering Minds, Igniting Innovations - Unleashing the Potential of
            Computer Science and Engineering.
          </p>
        </div>
      </section>

      <section className="my-5">
        <h1 className="text-4xl font-bold mb-4 text-center">Advisory Board</h1>
        <Container>
          <Row>
            {advisors.map((advisor, index) => (
              <BoardCard
                key={index}
                name={advisor.Name}
                position={advisor.Position}
                // If image is null or empty, use default
                image={advisor.Image && advisor.Image.trim() !== "" ? advisor.Image : defaultImageUrl}
                socialLinks={{
                  facebook: advisor.Facebook,
                  linkedin: advisor.LinkedIn,
                  instagram: advisor.Instagram,
                }}
              />
            ))}
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <h1 className="text-4xl font-bold mb-4 text-center">Executive Board</h1>
        <Container>
          <Row>
            {executives.map((executive, index) => (
              <BoardCard
                key={index}
                name={executive.Name}
                position={executive.Position}
                // Same check for image
                image={executive.Image && executive.Image.trim() !== "" ? executive.Image : defaultImageUrl}
                socialLinks={{
                  facebook: executive.Facebook,
                  linkedin: executive.LinkedIn,
                  instagram: executive.Instagram,
                }}
              />
            ))}
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <h1 className="text-4xl font-bold mb-4 text-center">Active Members</h1>
        <Container>
          <Row>
            {activeMembers.map((member, index) => (
              <BoardCard
                key={index}
                name={member.Name}
                position={member.Position}
                // Same check for image
                image={member.Image && member.Image.trim() !== "" ? member.Image : defaultImageUrl}
                socialLinks={{
                  facebook: member.Facebook,
                  linkedin: member.LinkedIn,
                  instagram: member.Instagram,
                }}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
