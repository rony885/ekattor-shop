import React from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = () => {
  const navigate = useNavigate();

  return (
    <div className="modal fade" id="searchmodal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="crap-search">
                    <button
                      type="button"
                      className="pop-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="feather-x"></i>
                    </button>
                    <form className="search-bar" role="search">
                      <div className="form-search">
                        <input
                          name="q"
                          placeholder="Find our search"
                          className="input-text"
                          required
                          onClick={() => navigate("/search")}
                        />
                        <button className="search-btn" type="submit">
                          <i className="feather-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
