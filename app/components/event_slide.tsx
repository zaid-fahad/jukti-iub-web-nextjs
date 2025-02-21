import React from 'react';

const EventSlide = ({ imgSrc, title, details, link }) => {
  // Function to get the first 10 words from the details array
  const getFirstTenWords = () => {
    const allWords = details.join(" ").split(" ");
    return allWords.slice(0, 10).join(" ") + (allWords.length > 10 ? "..." : "");
  };

  return (
    <div
      className="w-100"
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden", // Ensure content stays within bounds
        transition: "transform 0.2s ease-in-out",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={imgSrc}
        alt={title}
        className="img-fluid"
        style={{ 
          width: "100%", 
          objectFit: "cover" 
        }} 
      />
      <div className="down-content p-3">
        <h4 className="h6 mb-1" style={{ fontSize: "1rem", lineHeight: "1.2em" }}>
          {title}
        </h4>
        <p className="text-muted" style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          {getFirstTenWords()}
        </p>
        <a
          href={link}
          className="btn btn-orange text-white w-100"
          style={{
            backgroundColor: "#ff5722",
            borderColor: "#ff5722",
            padding: "8px",
            fontSize: "0.9rem",
            borderRadius: "4px",
            textAlign: "center",
            display: "block",
          }}
        >
          View More <i className="fa fa-angle-double-right"></i>
        </a>
      </div>
    </div>
  );
};

export default EventSlide;
