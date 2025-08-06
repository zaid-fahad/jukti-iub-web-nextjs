"use client";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BoardCard from "../components/board_card";

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl =
          "https://script.google.com/macros/s/AKfycbxGit2TPiyIEeehlpd5zsp6fdLO0QbKEssjO8FtzIc9IuQecCx1JSXvnNS8yim8ALgjsQ/exec?sheet=";

        const [alumniRes,] = await Promise.all([
          fetch(`${baseUrl}Advisor`),
        ]);

        const [alumniData,] =
          await Promise.all([
            alumniRes.json(),
          ]);

        console.log(alumniData); // Log the raw data to check image field
        setAlumni(alumniData);
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
      <section style={{backgroundColor: "#fff1e5",}}>
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-5 text-main">Jukti Alumni</h2>
          <p className="text-main text-center lead">
            lorem ipsum
          </p>
        </div>
      </section>

      <section className="my-5">
        {/*<h1 className="text-4xl font-bold mb-4 text-center">Advisory Board</h1>*/}
        <Container>
          <Row className="justify-content-center">
            {alumni.map((advisor, index) => (
              <BoardCard
                key={index}
                name={advisor.Name}
                position={advisor.Position}
                // If image is null or empty, use default
                image={renderImage(advisor.Image)}
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
    </>
  );
};

export default Alumni;
