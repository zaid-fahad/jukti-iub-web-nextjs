"use client";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BoardCard from "../components/board_card";

const activeMembers = () => {
  const [activeMembers, setActiveMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl =
          "https://script.google.com/macros/s/AKfycbxGit2TPiyIEeehlpd5zsp6fdLO0QbKEssjO8FtzIc9IuQecCx1JSXvnNS8yim8ALgjsQ/exec?sheet=";

        const [activeMemberRes] = await Promise.all([
          
          fetch(`${baseUrl}Active%20Members`),
        ]);

        const [activeMemberData] =
          await Promise.all([
            activeMemberRes.json(),
          ]);

        console.log(activeMemberData); // Log the raw data to check image field
        setActiveMembers(activeMemberData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderImage = (url) => {
    const defaultImageUrl = "https://zaidfahad.com/img/logo.jpg";

    if (!url || url.trim() === "" || url === "null" || url === "undefined") {
      return defaultImageUrl;
    }

    // Check for Google Drive file link and convert
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      const fileId = driveMatch[1];
      return `https://lh3.googleusercontent.com/d/${fileId}=w500`;
    }

    // Return original URL if not a Drive link
    return url;
  };


  if (loading) {
    return (
      <div className="text-center py-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <section style={{backgroundColor: "#fff1e5"}} >
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-5 text-main">Active Members</h2>
          <p className="text-main text-center lead">
            Empowering Minds, Igniting Innovations - Unleashing the Potential of
            Computer Science and Engineering.
          </p>
        </div>
      </section>
      <section className="my-5">
        {/*<h1 className="text-4xl font-bold mb-4 text-center">Active Members</h1>*/}
        <Container>
          <Row>
            {activeMembers.map((member, index) => (
              <BoardCard
                key={index}
                name={member.Name}
                position={member.Position}
                // Same check for image
                image={renderImage(member.Image)}
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

export default activeMembers;
