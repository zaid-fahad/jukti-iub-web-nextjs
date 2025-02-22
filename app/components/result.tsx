"use client";

import React, { useState } from "react";
import axios from "axios";
import "./result.css";

const Result = () => {
  const [studentId, setStudentId] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const checkStatus = async () => {
    if (studentId.length !== 7 || isNaN(Number(studentId))) {
      setStatus("Please enter a valid student ID.");
      return;
    }
    setLoading(true);
    setStatus("");

    try {
      // const response = await axios.get(`/api/status?id=${studentId}`);
      // const result = response.data.status;
      const result = "Rejected";
      if (result === "Approved" || result === "Rejected") {
        setStatus(result);
      } else {
        setStatus("ID not found");
      }
    } catch (error) {
      setStatus("Error retrieving status. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-dark-navy ">
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-1 text-light text-center">Recruitment Result</h2>
          <p className="text-light text-center lead">
            Applied to become a member?
          </p>
        </div>
      </section>
      <div className="container my-5 custom-mg">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card p-4 shadow border-0 m-4"> {/* Added m-4 for spacing */}
              <h3 className="fw-bold text-center text-orange">
                Application Status
              </h3>
              <p className="text-center">
                Enter your student ID to check application status:
              </p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                style={{ borderColor: "#ff6600" }}
              />
              <button
                className="btn btn-orange w-100"
                onClick={checkStatus}
                disabled={loading}
              >
                {loading ? "Checking..." : "Check Status"}
              </button>
              {status && (
                <div
                  className={`mt-3 alert ${
                    status === "Approved"
                      ? "alert-success-dark"
                      : status === "Rejected"
                      ? "alert-fail-dark"
                      : "alert-warning"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
