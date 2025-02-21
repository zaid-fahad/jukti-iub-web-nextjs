import React from "react";

const EventsCTA = () => {
  return (
    <section className="bg-white container position-relative elevate py-4" style={{ top: "-4.5rem", borderRadius: "0.5rem" }}>
      <div>
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 text-center p-3">
            <h2 className="display-6 fw-bold">
              Join us on our <span className="text-orange">Next Event</span>
            </h2>
            <p className="lead px-5 mt-3">
              Stay tuned for exciting 
              <span>
                <a
                  href="/eventPage"
                  className="text-orange fw-bold"
                  style={{ textDecoration: "none" }}
                >
                  upcoming events
                </a>
              </span> 
              and activities that will keep you engaged and inspired!
            </p>
          </div>

          {/* Right Column (Button Section) */}
          <div className="col-md-6 text-center p-3">
            <a
              href="/eventPage"
              className="btn btn-lg btn-orange text-white mt-4"
              style={{
                backgroundColor: "#ff5722",
                borderColor: "#ff5722",
                padding: "10px 20px", // Added padding for the button
                fontSize: "1.2rem", // Increased font size for better readability
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCTA;
