import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const capitalizeWords = (str) =>
  str
    ? str
        .toLowerCase()
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

const InfoRow = ({ icon: Icon, text }) => (
  <div style={{ display: "flex", alignItems: "center", marginBottom: "6px", color: "#555" }}>
    <Icon style={{ color: "#212528", marginRight: "8px" }} />
    <span>{capitalizeWords(text)}</span>
  </div>
);

const EventCard = ({ name, type, date, time, location, image, link }) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          objectFit: "cover",
          aspectRatio: "3 / 2",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />

      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
          <h4 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#333", margin: 0 }}>
            {capitalizeWords(name)}
          </h4>
          {type && (
            <span
              style={{
                backgroundColor: "#ff5722",
                color: "#fff",
                fontSize: "0.75rem",
                padding: "4px 8px",
                borderRadius: "4px",
                whiteSpace: "nowrap",
                alignSelf: "center",
              }}
            >
              {capitalizeWords(type)}
            </span>
          )}
        </div>

        <div style={{ fontSize: "0.95rem", marginBottom: "16px" }}>
          {date && <InfoRow icon={FaCalendarAlt} text={date} />}
          {time && <InfoRow icon={FaClock} text={time} />}
          {location && <InfoRow icon={FaMapMarkerAlt} text={location} />}
        </div>

        <a
          href={link}
          style={{
            backgroundColor: "#ff5722",
            color: "#fff",
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            textAlign: "center",
            display: "block",
            width: "100%",
            textDecoration: "none",
          }}
        >
          View More <i className="fa fa-angle-double-right" style={{ marginLeft: "6px" }}></i>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
