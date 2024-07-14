"use client";
import React, { useState, useEffect } from 'react';
import Table from '../table/Table'; // Adjust the path based on your file structure
import { data } from '../viewData/viewData'; // Adjust the path based on your file structure
import Loader from '../loader/Loader';

const Users = () => {
  const [isLoaderTrue, setIsLoaderTrue] = useState(true); // Initially set to true to show the loader

  useEffect(() => {
    setTimeout(() => {
      setIsLoaderTrue(false); // After 1000ms (1 second), set loader to false to hide it
    }, 1000);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      {isLoaderTrue && <Loader />} {/* Display loader if isLoaderTrue is true */}
      <div className="container">
        <div className='fs-3 fw-bold text-center mt-5 mb-4'>A Peculiar Image Encryption Technique For Mobile Application</div>
        <div className='text-center fs-4 fw-light'><b>View Registered Users</b></div>
        <Table 
          tableData={data}
          thead={["S.No", "User Name", "Mobile", "Email"]} // Added "Action" to thead
          tableColumns={["sno", "userName", "mobileNo", "email"]} // Added "btnValue" to tableColumns
          btnValue={"Activate"}
        />
      </div>
    </div>
  );
}

export default Users;
