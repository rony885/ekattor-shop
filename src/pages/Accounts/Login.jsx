import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-index">
                <ul className="breadcrumb-ul">
                  <li className="breadcrumb-li">
                    <Link className="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-li">
                    <span className="breadcrumb-text">Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer-page section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="log-acc" id="CustomerLoginForm">
                <div className="section-capture">
                  <div className="section-title">
                    <h2>
                      <span>Login account</span>
                    </h2>
                  </div>
                </div>

                <div className="log-acc-page">
                  <div className="contact-form-list">
                    <form method="post">
                      <ul className="form-fill">
                        <li className="form-fill-li Email">
                          <label>Email address</label>
                          <input
                            type="email"
                            name="q"
                            autoComplete="email"
                            placeholder="Email address"
                          />
                        </li>
                        <li className="form-fill-li Password">
                          <label>Password</label>
                          <input type="tel" name="q" placeholder="Password" />
                        </li>
                      </ul>
                      <div className="form-action-button">
                        <div className="button-forget">
                          <button type="submit" className="btn btn-style2">
                            Sign in
                          </button>
                          {/* <Link to="#" onClick="myFunction()"> */}
                          <Link to="#">Forgot your password?</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="acc-wrapper">
                    <h6>Already have account?</h6>
                    <div className="account-optional">
                      <Link to="/create-account">Create a account</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="log-acc"
                id="RecoverPasswordForm"
                style={{ display: "none" }}
              >
                <div className="content-main-title">
                  <div className="section-capture">
                    <div className="section-title">
                      <h2>
                        <span>Login account</span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="log-acc-page">
                  <div className="contact-form-list">
                    <form method="post">
                      <ul className="form-fill">
                        <li className="form-fill-li Email">
                          <label>Email address</label>
                          <input
                            type="email"
                            name="q"
                            autoComplete="email"
                            placeholder="Email address"
                          />
                        </li>
                      </ul>
                      <div className="form-action-button">
                        <div className="button-forget">
                          <button type="submit" className="btn btn-style2">
                            Cancel
                          </button>
                          {/* <Link to="#" onclick="myFunction()"> */}
                          <Link to="#">Cancel</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
