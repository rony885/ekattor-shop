// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SearchModal = () => {
//   const navigate = useNavigate();

//   // Close modal
//   const closeModal = (modalId) => {
//     const modalEl = document.getElementById(modalId);

//     if (modalEl && window.bootstrap) {
//       let modalInstance = window.bootstrap.Modal.getInstance(modalEl);
//       if (!modalInstance) {
//         modalInstance = new window.bootstrap.Modal(modalEl, {
//           backdrop: true,
//           keyboard: true,
//         });
//       }

//       // Hide modal
//       modalInstance.hide();

//       // Cleanup after hidden
//       modalEl.addEventListener(
//         "hidden.bs.modal",
//         () => {
//           // Remove leftover backdrop
//           const backdrop = document.querySelector(".modal-backdrop.fade.show");
//           if (backdrop) backdrop.remove();

//           // Restore body scroll
//           document.body.classList.remove("modal-open");
//           document.body.removeAttribute("data-bs-overflow");
//           document.body.removeAttribute("data-bs-padding-right");
//           document.body.style.overflow = "";
//           document.body.style.paddingRight = "";

//           // 🟢 Reset modal DOM state for next time
//           modalEl.classList.remove("show");
//           modalEl.style.display = "none";
//           modalEl.setAttribute("aria-hidden", "true");
//           modalEl.removeAttribute("aria-modal");
//           modalEl.removeAttribute("role");
//         },
//         { once: true }
//       );
//     }
//   };

//   return (
//     <div className="modal fade" id="searchmodal">
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-body">
//             <div className="container">
//               <div className="row">
//                 <div className="col">
//                   <div className="crap-search">
//                     <button
//                       type="button"
//                       className="pop-close"
//                       // data-bs-dismiss="modal"
//                       // aria-label="Close"
//                       onClick={() => closeModal("searchmodal")}
//                     >
//                       <i className="feather-x"></i>
//                     </button>
//                     <form className="search-bar" role="search">
//                       <div className="form-search">
//                         <input
//                           name="q"
//                           placeholder="Find our search"
//                           className="input-text"
//                           required
//                         />
//                         <button
//                           className="search-btn"
//                           type="submit"
//                           onClick={() => navigate("/search")}
//                         >
//                           <i className="feather-search"></i>
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchModal;

import React from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = () => {
  const navigate = useNavigate();

  // Function to close modal safely
  const closeModal = (modalId, callback) => {
    const modalEl = document.getElementById(modalId);

    if (modalEl && window.bootstrap) {
      let modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      if (!modalInstance) {
        modalInstance = new window.bootstrap.Modal(modalEl, {
          backdrop: true,
          keyboard: true,
        });
      }

      // Listen for when modal is completely hidden, then call callback
      modalEl.addEventListener(
        "hidden.bs.modal",
        () => {
          // Clean up leftover backdrop (sometimes Bootstrap leaves it)
          const backdrop = document.querySelector(".modal-backdrop.fade.show");
          if (backdrop) backdrop.remove();

          // Restore scroll
          document.body.classList.remove("modal-open");
          document.body.removeAttribute("data-bs-overflow");
          document.body.removeAttribute("data-bs-padding-right");
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";

          // Reset modal DOM state
          modalEl.classList.remove("show");
          modalEl.style.display = "none";
          modalEl.setAttribute("aria-hidden", "true");
          modalEl.removeAttribute("aria-modal");
          modalEl.removeAttribute("role");

          // Call callback AFTER modal fully closed
          if (callback) callback();
        },
        { once: true }
      );

      modalInstance.hide();
    } else if (callback) {
      // Fallback if modal not found
      callback();
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // prevent full page reload

    // Close modal first, then navigate
    closeModal("searchmodal", () => {
      navigate("/search");
    });
  };

  return (
    <div className="modal fade" id="searchmodal" tabIndex="-1">
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
                      onClick={() => closeModal("searchmodal")}
                    >
                      <i className="feather-x"></i>
                    </button>

                    {/* Use onSubmit so we capture Enter key & button click */}
                    <form
                      className="search-bar"
                      role="search"
                      onSubmit={handleSearch}
                    >
                      <div className="form-search">
                        <input
                          name="q"
                          placeholder="Find our search"
                          className="input-text"
                          required
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
