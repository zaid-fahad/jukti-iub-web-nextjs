import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const capitalizeWords = (str) =>
  str
    ? str
        .toLowerCase()
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

const InfoRow = ({ icon: Icon, text }) => (
  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", color: "#fff" }}>
    <Icon style={{ marginRight: "8px", color: "#fff" }} />
    <span style={{ fontSize: "1.1rem" }}>{capitalizeWords(text)}</span>
  </div>
);

const HeroEvent = ({ name, type, date, time, location, image, link }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "60vh",
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        padding: "40px 40px",
        borderRadius: "20px",
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "left" }}>
        <div style={{ marginBottom: "16px" }}>
          {type && (
            <span
              style={{
                backgroundColor: "#ff5722",
                color: "#fff",
                padding: "6px 12px",
                fontSize: "0.9rem",
                borderRadius: "5px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {type}
            </span>
          )}
        </div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
          {capitalizeWords(name)}
        </h1>

        <div style={{ marginBottom: "30px" }}>
          {date && <InfoRow icon={FaCalendarAlt} text={date} />}
          {time && <InfoRow icon={FaClock} text={time} />}
          {location && <InfoRow icon={FaMapMarkerAlt} text={location} />}
        </div>

        <a
          href={link}
          style={{
            backgroundColor: "#ff5722",
            color: "#fff",
            padding: "12px 24px",
            fontSize: "1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View More <i className="fa fa-angle-double-right" style={{ marginLeft: "6px" }}></i>
        </a>
      </div>
    </div>

    
  );
};

export default HeroEvent;









