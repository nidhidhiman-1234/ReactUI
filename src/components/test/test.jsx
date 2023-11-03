import React, { useState } from "react";
import Header from "../Header/header";
import "./index.css";
import CloseIcon from '@mui/icons-material/Close';
import { useStore } from "../constant";
export default function Test() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [flag, setFlag] = useState({ er1: false, er2: false });
  const {handleFormModal}=useStore(state=>state)

  const txtRegx = /^[A-Za-z]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleOnChange = (e) => {
    let txt = e.target.value;
    if (txtRegx.test(txt)) {
      setUser({ ...user, name: txt });
    }
  };
  const handleOnSubmit = () => {
    if (!user.email || !user.name) {
      setFlag({ er1: true, er2: true });
      setTimeout(() => {
        setFlag({ er1: false, er2: false });
      }, 4000);
      return;
    }
    if (!emailRegex.test(user.email)) {
      setFlag({ er1: false, er2: true });
      setTimeout(() => {
        setFlag({ er1: false, er2: false });
      }, 4000)
      return;
    }
  };
  return (
    <>
      <div className="parent-form-test">
        <div className="sub-parent-form">
        <div className="form-close-icon" onClick={()=>handleFormModal(false)}>
                   <CloseIcon style={{fontSize:20,color:"#fff"}}/> 
                </div>
          <div className="form-item-container">
            <div className="heading-container">
              <span className="heading-test-form">
                Like what you see & meet us in the physical world?
              </span>
              <span className="heading-test-form2">
                Join our community list for first access to more new drops &
                events
              </span>
            </div>
            <div className="form-input-container">
              <div className="form-input-container-inside">
               
                <input
                  className="input-fields-form"
                  style={{ borderColor: flag.er1 ? "red" : "black" }}
                  value={user.name}
                  onChange={handleOnChange}
                  placeholder="Name"
                />
                {flag.er1 && (
                  <span className="form-error-msg">Please enter your name</span>
                )}
              </div>
              <div className="form-input-container-inside">
                <input
                  className="input-fields-form"
                  style={{ borderColor: flag.er2 ? "red" : "black" }}
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Email"
                />
                {flag.er2 && (
                  <span className="form-error-msg">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>
            <button
              className="form-submit-button"
              onClick={() => handleOnSubmit()}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
