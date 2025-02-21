import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section
      className="footer text-main-background py-5 ps-3 ps-sm-0"
      style={{
        position: "relative",
        backgroundColor: "#081420",
        minHeight: "200 px", // Adjusted for footer height
      }}
    >
      <div className="container py-3 py-sm-1 py-sm-3">
        <div className="row align-items-center py-3">
          {/* Left Column (Text) */}
          <div className="col-lg-6 p-0 order-2 order-md-1">
            <div className="footer-text pb-3">
              <h1>
                <span className="text-orange"> JUKTI </span>
              </h1>
              <h4 className="fw-bold mb-3" style={{ fontSize: "1.5rem" }}>
                The Official Club of the Department of CSE
              </h4>
              <p className="lead" style={{ fontSize: "1rem" }}>
                <span className="text-orange"> JUKTI </span> is the Faculty-Student Club of the Department of Computer Science and Engineering, Independent University, Bangladesh.
              </p>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Email:{" "}
                <a
                  href="mailto:jukti.iub@gmail.com"
                  className="text-white"
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  jukti.iub@gmail.com
                </a>
              </p>
              <div className="social-icons mt-3">
                <a
                  href="https://www.facebook.com"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="col-lg-6 p-0 ps-4 order-1 order-md-2">
            <div className="footer-image text-center">
              <img
                src="/img/jukti_logo.webp"
                alt="Footer Image"
                className="img-fluid mb-5"
                style={{ width: "20%" }} // Adjust the width as needed
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
