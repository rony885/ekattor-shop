import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
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
                    <span className="breadcrumb-text">Contact us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-info-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="about-content">
                <div className="section-capture">
                  <div className="section-title">
                    <h2>
                      <span>Get in touch</span>
                    </h2>
                  </div>
                </div>

                <div className="get-info contact-detail">
                  <ul className="get-info-ul">
                    <li className="get-info-li">
                      <span className="get-icon">
                        <i className="bi bi-geo"></i>
                      </span>
                      <span className="get-add contact-block">
                        <span>401 Broadway, 24th floor,</span>
                        <span>orchard view, london, UK</span>
                      </span>
                    </li>
                    <li className="get-info-li">
                      <span className="get-icon">
                        <i className="bi bi-telephone"></i>
                      </span>
                      <div className="contact-block">
                        <Link to="tel:(+91)123456789" className="get-add">
                          (+00) 1 23 45 67 89
                        </Link>
                        <Link to="tel:(+91)123456789" className="get-add">
                          (+1) 1 23 45 67 89
                        </Link>
                      </div>
                    </li>
                    <li className="get-info-li">
                      <span className="get-icon">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <div className="contact-block">
                        <Link to="mailto:demo@support.com" className="get-add">
                          demo@support.com
                        </Link>
                        <Link
                          to="mailto:support@spacingtech.com"
                          className="get-add get-sup"
                        >
                          support@spacingtech.com
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="google-map section-pb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="map-wrap">
                <div className="map-wrapper">
                  <div className="map-info" id="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.943120902953!2d-7.963813984699448!3d37.177822679872456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab161c81fb0ff%3A0x867380c80c46b1d!2sAmendoeira%20Organics!5e0!3m2!1sen!2spt!4v1631184615272!5m2!1sen!2spt"
                      allowFullScreen
                      loading="lazy"
                      style={{ border: 0, width: "100%", height: "450px" }}
                      title="Google Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="drop-detail section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-capture">
                <div className="section-title">
                  <h2>
                    <span>Drop us message</span>
                  </h2>
                </div>
              </div>

              <div className="form-warp contact-detail">
                <div className="contact-form-list">
                  <form method="post">
                    <ul className="form-fill">
                      <li className="form-fill-li Name">
                        <label>Name</label>
                        <input
                          type="text"
                          name="q"
                          autocomplete="name"
                          placeholder="Name"
                        />
                      </li>
                      <li className="form-fill-li Email">
                        <label>Email address</label>
                        <input
                          type="email"
                          name="q"
                          autocomplete="email"
                          placeholder="Email address"
                        />
                      </li>
                      <li className="form-fill-li Phone number">
                        <label>Phone number</label>
                        <input type="tel" name="q" placeholder="Phone number" />
                      </li>
                      <li className="form-fill-li Message">
                        <label>Message</label>
                        <textarea
                          rows="10"
                          placeholder="Message"
                          className="custom-textarea"
                        ></textarea>
                      </li>
                    </ul>
                    <div className="contact-submit">
                      <button type="submit" className="btn btn-style2">
                        <span>Send</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
