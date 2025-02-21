import React from 'react';

// Define the types for the props
interface EventSlideProps {
  imgSrc: string;
  title: string;
  details: string[];
  link: string;
}

const EventSlide: React.FC<EventSlideProps> = ({ imgSrc, title, details, link }) => {
  // Function to get the first 10 words from the details array
  const getFirstTenWords = () => {
    const allWords = details.join(" ").split(" ");
    return allWords.slice(0, 10).join(" ") + (allWords.length > 10 ? "..." : "");
  };

  return (
    <div
      className="p-3 w-100"
      style={{
        backgroundColor: "white",
        borderRadius: "15px",  // Rounded corners
        overflow: "hidden",   // Prevent content from overflowing
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for professional look
        transition: "transform 0.2s ease-in-out", // Smooth hover effect
      }}
    >
      <img
        src={imgSrc}
        alt={title}
        className="img-fluid"
        style={{ 
          width: "100%", 
          height: "auto", 
          objectFit: "cover", 
          borderTopLeftRadius: "15px", 
          borderTopRightRadius: "15px" 
        }} 
      />
      <div className="down-content px-3 pt-3 pb-2">
        <h4 className="h5 mb-2" style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>{title}</h4>
        <p className="text-muted" style={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)", marginBottom: "0.5rem" }}>
          {getFirstTenWords()}
        </p>
        <div className="text-button-pay">
          <a
            href={link}
            className="btn btn-orange text-white mt-2 w-100"
            style={{
              backgroundColor: "#ff5722",
              borderColor: "#ff5722",
              padding: "10px",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", // Fluid typography for button text
              borderRadius: "5px",
              textAlign: "center",
              display: "block",
            }}
          >
            View More <i className="fa fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventSlide;
