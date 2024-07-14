"use client";
import React from 'react';
import Table from '../table/Table';
import { data } from '../viewData/viewData';

const View = () => {
  return (
    <div>
      <div className="container">
        <div className='fs-3 fw-bold text-center my-5'>
          A Peculiar Image Encryption Technique For Mobile Application
        </div>
        <div className='fs-5 fw-normal text-center mt-4'>
          User Can Decrypt The Uploaded Images.
          <div className='mt-2'>The Decrypted MSG:</div>
        </div>
        <Table 
          thead={["S.No", "User Name", "Message", "Image", "Date", "Decryption"]} 
          tableData={data}
          tableColumns={["sno","userName", "message", "image", "date"]}
        />
      </div>
    </div>
  );
};

export default View;
