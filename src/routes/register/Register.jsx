"use client";
import React, { useState, useRef, useEffect } from 'react';
import Loader from '../loader/Loader'; // Assuming Loader component is imported correctly
import Modal from '../modal/Modal'; // Assuming Modal component is imported correctly
import Row from '../row/Row'; // Assuming Row component is imported correctly
import Menu from '../menu/Menu';

const Register = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true); // Use descriptive variable name
  const [isModalOpen, setIsModalOpen] = useState(false); // Use descriptive variable name
  const [formData, setFormData] = useState({}); // Use a more generic name for data
  const [registrationError, setRegistrationError] = useState(false); // Handle registration errors
  const emailRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const cPasswordRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== cPasswordRef.current.value) {
      alert('Password Mismatch!');
      return;
    }

    const userName = `${emailRef.current.value.substr(0, 3)}${mobileRef.current.value.substr(0, 3)}`;
    const newUser = {
      userName,
      email: emailRef.current.value,
      mobileNo: mobileRef.current.value,
      password: passwordRef.current.value
    };

    // Retrieve existing users from session storage
    const existingUsers = JSON.parse(sessionStorage.getItem("registrationData")) || [];

    // Check for duplicate users
    const userExists = existingUsers.some(user => user.email === newUser.email || user.mobileNo === newUser.mobileNo);
    if (userExists) {
      setRegistrationError(true);
      return;
    }

    // Add new user to existing users array
    existingUsers.push(newUser);

    // Save updated users array to session storage
    sessionStorage.setItem("registrationData", JSON.stringify(existingUsers));

    // Update formData to reflect the newly registered user
    setFormData(newUser);

    // Clear input fields after registration (assuming successful)
    emailRef.current.value = '';
    mobileRef.current.value = '';
    passwordRef.current.value = '';
    cPasswordRef.current.value = '';

    setIsModalOpen(true); // Show modal after successful registration
    setRegistrationError(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaderVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false); // Close modal and show registration form
  };

  return (
    <div>
      {isLoaderVisible && <Loader />}
      {isModalOpen && (
        <Modal
          title="Registered Successfully!"
          bodyMsg1="User Name:"
          bodyMsg2={formData.userName}
          closeModal={closeModal}
        />
      )}

      <div className="container">
        <div className="fs-3 fw-bold text-center my-5">
          A Peculiar Image Encryption Technique For Mobile Application
        </div>
        <div className="text-center fs-4 fw-bold mb-3">User Registration Form</div>
        <form className="form w-75 mx-auto my-5" onSubmit={handleRegister}>
          <Row
            label="Email"
            type="email"
            formData={formData}
            setFormData={setFormData}
            inputRef={emailRef}
            id="email"
          />
          <Row
            label="Mobile No"
            type="number"
            formData={formData}
            setFormData={setFormData}
            inputRef={mobileRef}
            id="mobileNo"
          />
          <Row
            label="Password"
            type="password"
            formData={formData}
            setFormData={setFormData}
            inputRef={passwordRef}
            id="password"
          />
          <Row
            label="Confirm Password"
            type="password"
            formData={formData}
            setFormData={setFormData}
            inputRef={cPasswordRef}
            id="cPassword"
          />
          {registrationError && (
            <div className="text-danger text-center my-2">
              Registration error: User already exists.
            </div>
          )}
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary px-4 py-2" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
