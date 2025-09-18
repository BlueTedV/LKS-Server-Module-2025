import React, { useState } from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/custom.css";

function DataValidation() {
  const [working, setWorking] = useState("yes");
  const [job, setJob] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [income, setIncome] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Installment Cars
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <header className="jumbotron">
          <div className="container">
            <h1 className="display-4">Request Data Validation</h1>
          </div>
        </header>

        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Are you working?</label>
                    <select
                      className="form-control-sm"
                      value={working}
                      onChange={(e) => setWorking(e.target.value)}
                    >
                      <option value="yes">Yes, I have</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Your Job"
                    className="form-control mt-2 mb-2"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="5"
                    placeholder="describe what you do in your job"
                    value={jobDesc}
                    onChange={(e) => setJobDesc(e.target.value)}
                  ></textarea>
                  <input
                    type="number"
                    placeholder="Income (Rp)"
                    className="form-control mt-2"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Reason Accepted</label>
                  </div>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="6"
                    placeholder="Explain why you should be accepted"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Send Request</button>
          </form>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="text-center py-4 text-muted">
            Copyright &copy; 2024 - Web Tech ID
          </div>
        </div>
      </footer>
    </>
  );
}

export default DataValidation;
