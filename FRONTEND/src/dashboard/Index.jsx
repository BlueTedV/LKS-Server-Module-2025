import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/bootstrap.css";
import "../assets/css/custom.css";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Installment Cars</a>
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
                <a className="nav-link" href="#">Marsito Kusmawati</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {/* Header */}
        <header className="jumbotron">
          <div className="container">
            <h1 className="display-4">Dashboard</h1>
          </div>
        </header>

        <div className="container">
          {/* Data Validation Section */}
          <section className="validation-section mb-5">
            <div className="section-header mb-3">
              <h4 className="section-title text-muted">My Data Validation</h4>
            </div>
            <div className="row">
              {/* Request Data Validation */}
              <div className="col-md-4">
                <div className="card card-default">
                  <div className="card-header">
                    <h5 className="mb-0">Data Validation</h5>
                  </div>
                  <div className="card-body">
                    <a href="#" 
                    className="btn btn-primary btn-block"
                    onClick={() => navigate("/dashboard/data-validation")}>+ Request validation</a>
                  </div>
                </div>
              </div>
              {/* Society Data Validation Box (Pending) */}
              <div className="col-md-4">
                <div className="card card-default">
                  <div className="card-header border-0">
                    <h5 className="mb-0">Data Validation</h5>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                      <tbody>
                        <tr>
                          <th>Status</th>
                          <td><span className="badge badge-info">Pending</span></td>
                        </tr>
                        <tr>
                          <th>Job</th>
                          <td className="text-muted">-</td>
                        </tr>
                        <tr>
                          <th>Income/Month</th>
                          <td className="text-muted">Rp. 300.000</td>
                        </tr>
                        <tr>
                          <th>Validator</th>
                          <td className="text-muted">-</td>
                        </tr>
                        <tr>
                          <th>Validator Notes</th>
                          <td className="text-muted">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Society Data Validation Box (Accepted) */}
              <div className="col-md-4">
                <div className="card card-default">
                  <div className="card-header border-0">
                    <h5 className="mb-0">Data Validation</h5>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                      <tbody>
                        <tr>
                          <th>Status</th>
                          <td><span className="badge badge-success">Accepted</span></td>
                        </tr>
                        <tr>
                          <th>Job</th>
                          <td className="text-muted">Programmer</td>
                        </tr>
                        <tr>
                          <th>Income/Month</th>
                          <td className="text-muted">Rp. 3.000.000</td>
                        </tr>
                        <tr>
                          <th>Validator</th>
                          <td className="text-muted">Usman M.Ti</td>
                        </tr>
                        <tr>
                          <th>Validator Notes</th>
                          <td className="text-muted">siap kerja</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* List Job Seekers Section */}
          <section className="validation-section mb-5">
            <div className="section-header mb-3">
              <div className="row">
                <div className="col-md-8">
                  <h4 className="section-title text-muted">My Installment Cars</h4>
                </div>
                <div className="col-md-4">
                  <a href="#" 
                  className="btn btn-primary btn-lg btn-block"
                  onClick={() => navigate("/dashboard/installment")}>+ Add Installment Cars</a>
                </div>
              </div>
            </div>
            <div className="section-body">
              <div className="row mb-4">
                {/* Installment Cars info */}
                <div className="col-md-12">
                  <div className="alert alert-warning">
                    Your validation must be approved by validator to Installment Cars.
                  </div>
                </div>
                {/* Installment Cars Box (Registered) */}
                <div className="col-md-6">
                  <div className="card card-default">
                    <div className="card-header border-0">
                      <h5 className="mb-0">Toyota FT 86</h5>
                    </div>
                    <div className="card-body p-0">
                      <table className="table table-striped mb-0">
                        <tbody>
                          <tr>
                            <th>Description</th>
                            <td className="text-muted">Toyota FT 86 car is the best</td>
                          </tr>
                          <tr>
                            <th>Price</th>
                            <td className="text-muted">Rp. 900.000.000</td>
                          </tr>
                          <tr>
                            <th>Installment</th>
                            <td className="text-muted">
                              12 Months <span className="badge badge-info">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th>Apply Date</th>
                            <td className="text-muted">Desember 12, 2024</td>
                          </tr>
                          <tr>
                            <th>Notes</th>
                            <td className="text-muted">I want this one, because i am rich.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Installment Cars Box (Registered) */}
                <div className="col-md-6">
                  <div className="card card-default">
                    <div className="card-header border-0">
                      <h5 className="mb-0">Nissan Livina</h5>
                    </div>
                    <div className="card-body p-0">
                      <table className="table table-striped mb-0">
                        <tbody>
                          <tr>
                            <th>Description</th>
                            <td className="text-muted">Family Cars for everyone</td>
                          </tr>
                          <tr>
                            <th>Price</th>
                            <td className="text-muted">Rp. 275.000.000</td>
                          </tr>
                          <tr>
                            <th>Installment</th>
                            <td className="text-muted">
                              24 Months <span className="badge badge-success">Accepted</span>
                            </td>
                          </tr>
                          <tr>
                            <th>Apply Date</th>
                            <td className="text-muted">Desember 12, 2024</td>
                          </tr>
                          <tr>
                            <th>Notes</th>
                            <td className="text-muted">I want this one too.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
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

export default Dashboard;