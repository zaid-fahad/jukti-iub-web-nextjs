import React from "react";
import "./gformreg.css"

const GFormReg = () => {
  return (
    <>
      <section className="bg-dark-navy">
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-1 text-light text-center">Become a member</h2>
          <p className="text-light text-center lead">
            Ready to become a member? Register now to join our community and
            gain access to exclusive benefits and exciting opportunities!
          </p>
        </div>
      </section>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="registration-form">
              <h3 className="fw-bold text-center">Recruitment Form</h3>
              <p className="lead text-center">
                Fill out the form below to register:
              </p>
              <div className="iframe-container">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd961kDowT1FEfJSFDhh1l38F01tAdmZ1OBY_9giStdeo9Wjg/viewform?embedded=true"
                  frameBorder="0"
                  marginHeight="10"
                  marginWidth="0"
                  title="Recruitment Form"
                  allowFullScreen
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GFormReg;
