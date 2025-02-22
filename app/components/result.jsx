"use client";

import React, { useState } from "react";
import axios from "axios";
import "./result.css";
import AdminEasterEgg from "./AdminEasterEgg"; // Import the AdminEasterEgg component

const Result = () => {
  const [studentId, setStudentId] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState(""); // Added state for name
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(""); // Added state for image URL

  const checkStatus = async () => {
    if (studentId.length !== 7 || isNaN(Number(studentId))) {
      setStatus("Please enter a valid student ID.");
      return;
    }
    setLoading(true);
    setStatus("");
    setName(""); // Reset name when checking status
    setImageUrl(""); // Reset image when checking status

    try {
      // Google Sheets CSV URL
      const response = await axios.get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vTp4SiQjVtjtoCsoaUdbe5J1Bb5OCTFNyoZjdY_9qd62Xh4mUAXPVIRW6ys6PDppMwSi9SX1pZ-Bu9X/pub?output=csv`
      );

      const data = response.data;

      // Log the fetched data for debugging
      console.log("CSV Data:", data);

      // Parse CSV data into an array of objects
      const rows = data
        .split("\n")
        .slice(1) // Remove header row
        .map((row) => {
          const [id, name, status, imageUrl] = row.split(",");
          return { id: id.trim(), name: name.trim(), status: status.trim(), imageUrl: imageUrl.trim() };
        });

      // Log the parsed rows for debugging
      console.log("Parsed Rows:", rows);

      // Find the status for the entered student ID
      const student = rows.find((row) => row.id === studentId);

      if (student) {
        setName(student.name); // Set the student's name
        setStatus(student.status);
        if (student.status === "admin") {
          setImageUrl(student.imageUrl); // Set the image URL if status is "admin"
        }
      } else {
        setStatus("ID not found");
      }
    } catch (error) {
      setStatus("Error retrieving status. Please try again later.");
      console.error("Error fetching data:", error);
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
            <div className="card p-4 shadow border-0 m-4">
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
                  {status === "ID not found" ? (
                    status
                  ) : (
                    <>
                      <strong>{name}</strong> - {status}
                    </>
                  )}
                </div>
              )}

              {/* Conditionally render the AdminEasterEgg */}
              {status === "admin" && imageUrl && (
                <AdminEasterEgg name={name} imageUrl={imageUrl} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
