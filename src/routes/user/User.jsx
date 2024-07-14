"use client";
import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../../app/RootLayoutClient'; // Adjust import path as per your project structure
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';
import Row from '../row/Row';
import Card from '../card/Card'; // Assuming you have a Card component
import cardsData from '../data/cardsData.json'; // Assuming you have card data

const UserLogin = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoaderTrue, setIsLoaderTrue] = useState(true);
  const [isModalTrue, setIsModalTrue] = useState(false);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const login = (event) => {
    event.preventDefault();
    // Simulate API call or check credentials from storage
    if (userNameRef.current.value === 'rak901' && passwordRef.current.value === 'Rakesh@1') {
      setIsModalTrue(true);
      setIsLoggedIn(true); // Update global context state
      setTimeout(() => {
        setIsModalTrue(false);
        setUserLoggedIn(true); // Update local state to show authenticated content
        setIsLoaderTrue(false); // Hide loader after authentication
      }, 2000);
    } else {
      console.log("Invalid username or password");
    }
    // Clear input fields
    userNameRef.current.value = '';
    passwordRef.current.value = '';
  };

  useEffect(() => {
    // Simulating a loading state for 1 second
    setTimeout(() => {
      setIsLoaderTrue(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <>
          {isLoaderTrue && <Loader />}
          {isModalTrue && <Modal bodyMsg1={"Logged In"} bodyMsg2={"Successfully!"} titleMsg={"Admin Login"} />}
          <div className='container'>
            <div className='fs-3 fw-bold text-center my-5'>A Peculiar Image Encryption Technique For Mobile Application</div>
            <div className="cards d-flex justify-content-center align-items-center gap-4">
              {cardsData.map((item, index) => (
                <Card key={index} heading={item.heading} cardData={item.cardData} img={item.img} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {isLoaderTrue && <Loader />}
          {isModalTrue && <Modal bodyMsg1={"Logged In"} bodyMsg2={"Successfully!"} titleMsg={"Admin Login"} />}
          <div className='container'>
            <div className='fs-3 fw-bold text-center my-5'>A Peculiar Image Encryption Technique For Mobile Application</div>
            <div className='text-center fs-4 fw-bold mb-3'>User Login Form</div>
            <form className='form w-75 mx-auto my-5' onSubmit={login}>
              <Row
                label={"User Name"}
                type={"text"}
                inputRef={userNameRef}
                id={"userName"}
                data={{}}
                setData={() => {}}
              />
              <Row
                label={"Password"}
                type={"password"}
                inputRef={passwordRef}
                id={"password"}
                data={{}}
                setData={() => {}}
              />
              <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary px-4 py-2' type="submit">Login</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default UserLogin;
