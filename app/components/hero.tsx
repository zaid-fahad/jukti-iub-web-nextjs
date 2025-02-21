const HeroSection = () => {
  return (
    <section
      className="hero text-main-background py-5 ps-3 ps-sm-0"
      style={{
        position: "relative",
        backgroundColor: "#081420",
        minHeight: "60vh",
      }}
    >
      <div className="custom-shape-divider-bottom-1686588743">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container py-4 py-sm-1 py-sm-5">
        <div className="row align-items-center py-5">
          {/* Text section */}
          <div className="col-lg-6 col-12 p-0 ps-4 order-2 order-lg-1">
            <div className="hero-text pb-5">
              <h1 className="display-3 fw-bold mb-3">
                JUKTI{" "}<br></br>
                <span className="display-6 d-block d-md-inline">
                The Official Club of CSE
                </span>
              </h1>
              <p className="lead">
                <span className="text-orange"> JUKTI </span> is the
                Faculty-Student Club of the Department of Computer Science and
                Engineering of Independent University, Bangladesh
                
              </p>

              <a
                href="#"
                className="btn btn-dark-navy btn-lg btn-outline-orange me-4 mt-1 mt-sm-0"
              >
                Register now!
              </a>
            </div>
          </div>

          {/* Logo section */}
          <div className="col-lg-6 col-12 p-0 text-center order-1 order-lg-2">
            <div className="hero-image mb-4">
              <img
                src="/img/jukti_logo.webp"
                alt="Hero Image"
                className="img-fluid"
                style={{ maxWidth: "30%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
