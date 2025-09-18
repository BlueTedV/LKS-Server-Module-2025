import React, { useState } from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/custom.css";

function InstallmentShow() {
  const [months, setMonths] = useState("12");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle apply logic here
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
                  Marsito Kusmawati
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <header className="jumbotron">
          <div className="container text-center">
            <div>
              <h1 className="display-4">Toyota FT 86</h1>
              <span className="text-muted">Brand : Toyota</span>
            </div>
          </div>
        </header>

        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="form-group">
                  <h3>Description</h3>
                  Toyota FT 86 car is the best
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <h3>
                    Price :{" "}
                    <span className="badge badge-primary">Rp. 900.000.000</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <div className="form-group">
                  <h3>Select Months</h3>
                  <select
                    name="months"
                    className="form-control"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                  >
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                    <option value="48">48 Months</option>
                    <option value="50">50 Months</option>
                    <option value="55">55 Months</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <h3>
                    Nominal/Month :{" "}
                    <span className="badge badge-primary">Rp. 10.000.000</span>
                  </h3>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Notes</label>
                  </div>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="6"
                    placeholder="Explain why your installment should be approved"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

export default InstallmentShow;
