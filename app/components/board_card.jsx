import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const BoardCard = ({ name, position, image, socialLinks }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card border-0 shadow-lg rounded-lg overflow-hidden">
        <div className="card-body p-4">
          <div className="text-center">
            <div className="mb-3">
              <div className="d-inline-block rounded-circle border border-5 border-orange">
                <img
                  src={image}
                  height={150}
                  width={150}
                  alt={name}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <h2 className="fs-4 font-weight-bold text-dark">{name}</h2>
            <h5 className="fs-6 text-muted mb-3">{position}</h5>
          </div>
          <div className="text-center">
            <div className="icons d-flex justify-content-center gap-3">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} className="m-1" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} style={{ color: "#f97924" }} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} className="m-1" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} style={{ color: "#f97924" }} />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} className="m-1" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} style={{ color: "#f97924" }} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
