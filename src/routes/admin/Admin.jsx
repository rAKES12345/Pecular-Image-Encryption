// src/components/Login.js
"use client";
import React, { useState, useRef, useEffect, useContext } from "react";
import Loader from "../loader/Loader";
import Modal from "../modal/Modal";
import Row from "../row/Row";
import Menu from "../menu/Menu";
import Card from "../card/Card";
import { AuthContext } from "../../app/RootLayoutClient"; // Adjusted import path assuming the correct structure
import AdminHome from "../adminHome/AdminHome";
import { cardsData } from "../cardsData/CardsData";

const ValidationMsg = ({ flag, msg }) => {
  return <div>{flag && <div>{msg}</div>}</div>;
};

const AdminLogin = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [isLoaderTrue, setIsLoaderTrue] = useState(true);
  const [isModalTrue, setIsModalTrue] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const userNameRef = useRef();
  const passwordRef = useRef();

  const login = (event) => {
    event.preventDefault();
    if (
      userNameRef.current.value === "admin" &&
      passwordRef.current.value === "admin"
    ) {
      setIsModalTrue(true);
      setAdminLoggedIn(true);
      setIsLoggedIn(true);

      // Hide modal after 2 seconds
      setTimeout(() => {
        setIsModalTrue(false);
      }, 2000);
    } else {
      // Handle incorrect login credentials
      console.log("Incorrect username or password");
    }
    userNameRef.current.value = "";
    passwordRef.current.value = "";
  };

  useEffect(() => {
    // Simulating a loading state for 1 second
    setTimeout(() => {
      setIsLoaderTrue(false);
    }, 1000);
  }, []);

  return (
    <div>
      {adminLoggedIn ? (
        <>
          <div>
            {isLoaderTrue && <Loader />}
            <AdminHome />
          </div>
        </>
      ) : (
        <>
          {isLoaderTrue && <Loader />}
          {isModalTrue && (
            <Modal
              bodyMsg1={"Logged In"}
              bodyMsg2={"Successfully!"}
              titleMsg={"Admin Login"}
            />
          )}
          <div className="container">
            <div className="fs-3 fw-bold text-center my-5">
              A Peculiar Image Encryption Technique For Mobile Application
            </div>
            <div className="text-center fs-4 fw-bold mb-3">
              Admin Login Form
            </div>
            <form className="form w-75 mx-auto my-5" onSubmit={login}>
              <Row
                label={"User Name"}
                type={"text"}
                inputRef={userNameRef}
                id={"userName"}
                data={data}
                setData={setData}
              />
              <Row
                label={"Password"}
                type={"password"}
                inputRef={passwordRef}
                id={"password"}
                data={data}
                setData={setData}
              />
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary px-4 py-2" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminLogin;
