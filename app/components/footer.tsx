import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section
      className="footer text-main-background py-5"
      style={{
        position: "relative",
        backgroundColor: "#081420",
        minHeight: "200px",
        overflowX: "hidden", // Prevent horizontal overflow
      }}
    >
      <div className="container-fluid p-5">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Column (Text) */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1>
              <span className="text-orange"> JUKTI </span>
            </h1>
            <h4 className="fw-bold mb-3" style={{ fontSize: "1.5rem" }}>
              Club of the Department of CSE
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
                href="https://www.facebook.com/jukti.cse.iub"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.5rem" }}
              >
                <FaFacebook size={30} />
              </a>
              {/*<a
                href="https://www.twitter.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.5rem" }}
              >
                <FaTwitter size={30} />
              </a>*/}
              <a
                href="https://www.instagram.com/jukti.official/"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.5rem" }}
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/jukti-iub/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.5rem" }}
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="col-md-6 text-center">
            <img
              src="/img/jukti_logo.webp"
              alt="Footer Image"
              className="img-fluid"
              style={{ width: "20%", maxWidth: "150px" }} // Responsive image size
            />
          </div>
        </div>
      </div>
      
      {/* Credit Line */}
      <div className="text-center py-5" style={{ color: "#ffffff", fontSize: "0.9rem" }}>
        Crafted to inspire by{" "}
        <a 
          href="https://zaidfahad.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#ff6600" }}
        >
          Zaid Fahad
        </a> &{" "}
        <a 
          href="https://www.linkedin.com/in/rashedur-rahman-arafat-5b6357310/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#ff6600" }}
        >
          Rashedur Rahman
        </a>{" "} Forked from
        <a 
          href="https://github.com/r-Shabab/JUKTI" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#ff6600" }}
        >
          r-Shabab/JUKTI
        </a>

      </div>
    </section>
  );
};

export default Footer;
