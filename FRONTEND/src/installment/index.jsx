import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/bootstrap.css";
import "../assets/css/custom.css";

function InstallmentCars() {
    const navigate = useNavigate();
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
            <h1 className="display-4">Cars</h1>
          </div>
        </header>

        <div className="container mb-5">
          <div className="section-header mb-4">
            <h4 className="section-title text-muted font-weight-normal">
              List of Cars
            </h4>
          </div>
          <div className="section-body">
            <article className="spot">
              <div className="row">
                <div className="col-5">
                  <h5 className="text-primary">Toyota FT 86</h5>
                  <span className="text-muted">
                    Toyota FT 86 car is the best
                  </span>
                </div>
                <div className="col-4">
                  <h5>Available Month</h5>
                  <span className="text-muted">
                    12 Months, 24 Months, 48 Months
                  </span>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-danger btn-lg btn-block"
                    onClick={() => navigate("/dashboard/installment/show")}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </article>
            <article className="spot unavailable">
              <div className="row">
                <div className="col-5">
                  <h5 className="text-primary">Nissan Livina</h5>
                  <span className="text-muted">Family Cars for everyone</span>
                </div>
                <div className="col-4">
                  <h5>Available Month</h5>
                  <span className="text-muted">12 Months, 24 Months</span>
                </div>
                <div className="col-3">
                  <div className="bg-success text-white p-2">
                    Vacancies have been submitted
                  </div>
                </div>
              </div>
            </article>
            <article className="spot unavailable">
              <div className="row">
                <div className="col-5">
                  <h5 className="text-primary">Toyota FT 86</h5>
                  <span className="text-muted">
                    Toyota FT 86 car is the best
                  </span>
                </div>
                <div className="col-4">
                  <h5>Available Month</h5>
                  <span className="text-muted">
                    12 Months, 24 Months, 48 Months
                  </span>
                </div>
                <div className="col-3">
                  <button className="btn btn-danger btn-lg btn-block">
                    Detail
                  </button>
                </div>
              </div>
            </article>
          </div>
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

export default InstallmentCars;
