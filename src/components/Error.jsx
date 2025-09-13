import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="col">
            <div className="row">
              <div className="breadcrumb-index">
                <ul className="breadcrumb-ul">
                  <li className="breadcrumb-li">
                    <Link className="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-li">
                    <span className="breadcrumb-text">404</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-not-found section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="search-error-wrapper">
                <h2>404</h2>
                <p>
                  Sorry but the page you are looking for does not exist, have
                  been removed, name changed or is temporarity unavailable.
                </p>
                <Link to="/" className="btn btn-style2">
                  Go to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
