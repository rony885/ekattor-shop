import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BillingInfo = () => {
  const navigate = useNavigate();

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
                    <span className="breadcrumb-text">billing-info</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-ptb">
        <div className="container">
          <div className="col">
            <div className="row">
              <div className="billing-area">
                <div className="billing-title">
                  <h6>Billing address</h6>
                  <div className="billing-address-1">
                    <ul className="add-name">
                      <li className="billing-name">
                        <label>First name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="First name"
                        />
                      </li>
                      <li className="billing-name">
                        <label>Last name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Last name"
                        />
                      </li>
                      <li className="billing-name">
                        <label>Address 1</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address line 1"
                        />
                      </li>
                      <li className="billing-name">
                        <label>Address 2</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address line 2"
                        />
                      </li>
                      <li className="billing-name billing-info">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          placeholder="Enter your city"
                        />
                      </li>
                      <li className="billing-name billing-info">
                        <label>State</label>
                        <input
                          type="text"
                          name="State"
                          placeholder="Enter your state"
                        />
                      </li>
                      <li className="billing-name billing-info">
                        <label>Pincode</label>
                        <input
                          type="text"
                          name="pin"
                          placeholder="Enter your pincode"
                        />
                      </li>
                      <li className="billing-name billing-country">
                        <label>Country</label>
                        <select>
                          <option>Afghanistan</option>
                          <option>Austria</option>
                          <option>Belgium</option>
                          <option>Bhutan</option>
                          <option>Canada</option>
                          <option>France</option>
                          <option>Germany</option>
                          <option selected>India</option>
                          <option>Maldives</option>
                          <option>Nepal</option>
                        </select>
                      </li>
                      <li className="billing-name billing-country">
                        <label>Phone number</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter your phone number"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="billing-title">
                  <h6>Shipping address</h6>
                  <div className="billing-address-1">
                    <ul className="add-name">
                      <li className="billing-name">
                        <label>First name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="First name"
                        />
                      </li>
                      <li className="billing-name">
                        <label>Last name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Last name"
                        />
                      </li>
                      <li className="billing-name">
                        <label>Address 1</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address line 1"
                        />
                      </li>
                      <li className="billing-name">
                        <label>Address 2</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address line 2"
                        />
                      </li>
                      <li className="billing-name billing-info">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          placeholder="Enter your city"
                        />
                      </li>
                      <li className="billing-name billing-info">
                        <label>State</label>
                        <input
                          type="text"
                          name="State"
                          placeholder="Enter your state"
                        />
                      </li>
                      <li className="billing-name billing-info">
                        <label>Pincode</label>
                        <input
                          type="text"
                          name="pin"
                          placeholder="Enter your pincode"
                        />
                      </li>
                      <li className="billing-name billing-country">
                        <label>Country</label>
                        <select>
                          <option>Afghanistan</option>
                          <option>Austria</option>
                          <option>Belgium</option>
                          <option>Bhutan</option>
                          <option>Canada</option>
                          <option>France</option>
                          <option>Germany</option>
                          <option selected>India</option>
                          <option>Maldives</option>
                          <option>Nepal</option>
                        </select>
                      </li>
                      <li className="billing-name billing-country">
                        <label>Phone number</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter your phone number"
                        />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="billing-button">
                  <button
                    type="button"
                    onClick={() => navigate("/checkout")}
                    className="btn btn-style2"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="btn btn-style2"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BillingInfo;
