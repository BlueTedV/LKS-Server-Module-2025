import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/css/bootstrap.css";
import "./assets/css/custom.css";

function App() {
  const [idCard, setIdCard] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idCard || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    // Simulate login success
    navigate("/dashboard");
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
        {/* Header */}
        <header className="jumbotron">
          <div className="container text-center">
            <h1 className="display-4">Installment Cars</h1>
          </div>
        </header>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="card card-default" onSubmit={handleSubmit}>
                <div className="card-header">
                  <h4 className="mb-0">Login</h4>
                </div>
                <div className="card-body">
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="form-group row align-items-center">
                    <div className="col-4 text-right">ID Card Number</div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        value={idCard}
                        onChange={(e) => setIdCard(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row align-items-center">
                    <div className="col-4 text-right">Password</div>
                    <div className="col-8">
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row align-items-center mt-4">
                    <div className="col-4"></div>
                    <div className="col-8">
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
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

export default App;
