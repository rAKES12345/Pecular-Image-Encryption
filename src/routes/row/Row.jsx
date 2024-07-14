"use client";
import React, { useState } from 'react';
import './Row.css'; // Assuming styles for the row are defined here
import ValidationMsg from '../validationMsg/ValidationMsg'; // Assuming ValidationMsg component is correctly imported

const Row = ({ label, type, value, onChange, id, inputRef, password ,cPassword}) => {
  const [flagForEmail, setFlagForEmail] = useState(true);
  const [flagForMobile, setFlagForMobile] = useState(true);
  const [flagForPassword, setFlagForPassword] = useState(true);
  const [flagForCPassword, setFlagForCPassword] = useState(true);

  const takeInput = (eve) => {
    const { value, id } = eve.target;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobilePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate the input
    if (id === "email" && emailPattern.test(value)) {
      setFlagForEmail(false);
    } else if (id === "email") {
      setFlagForEmail(true);
    }
    if (id === "mobileNo" && mobilePattern.test(value)) {
      setFlagForMobile(false);
    } else if (id === "mobileNo") {
      setFlagForMobile(true);
    }
    if (id === "password" && passwordPattern.test(value)) {
      setFlagForPassword(false);
    } else if (id === "password") {
      setFlagForPassword(true);
    }
    if (id === "cPassword") {
      if (value === password) {
        setFlagForCPassword(false);
      } else {
        setFlagForCPassword(true);
      }
    }
    
    onChange(eve); // Pass the event to the parent component
  };

  return (
    <div className="row my-4">
      <div className="col-md-6 sm-text-start text-end pt-2">
        <b className="mx-4 fs-6 sm-mb-3">{label}</b>
      </div>
      <div className="col-md-4">
        <div className="w-100">
          <div>
            <input
              className="form-control"
              type={type}
              value={value}
              onChange={takeInput}
              ref={inputRef}
              id={id}
              required
            />
          </div>
        </div>
      </div>
      <div className="col-md-2">
        {id === "email" && <ValidationMsg msg="Invalid Email" flag={flagForEmail} />}
        {id === "mobileNo" && <ValidationMsg msg="Invalid Mobile Number" flag={flagForMobile} />}
        {id === "password" && <ValidationMsg msg="Invalid Password" flag={flagForPassword} />}
        {id === "cPassword" && <ValidationMsg msg="Password Miss Match" flag={flagForCPassword} />}
      </div>
    </div>
  );
};

export default Row;
