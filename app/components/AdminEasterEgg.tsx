import React from "react";

const AdminEasterEgg = ({ name, imageUrl }) => {
  return (
    <div className="text-center mt-4" style={{ backgroundColor: "red", padding: "20px", borderRadius: "10px" }}>
      <img
        src={imageUrl}
        alt={name}
        className="img-fluid rounded-circle"
        style={{ width: "150px", height: "150px" }}
      />
      <h4 className="text-orange mt-3">{name}</h4>
      <p
        className="text-light mt-2"
        style={{
          fontSize: "50px",  // Big font size
          fontWeight: "bold", // Bold text
          color: "#ff0000",  // Red color for maximum eye-catching effect
          textShadow: "2px 2px 10px rgba(255, 255, 0, 0.7)", // Glowing effect
          animation: "shake 0.5s infinite", // Make it shake
        }}
      >
        Juktir Abba
      </p>
    </div>
  );
};

export default AdminEasterEgg;
