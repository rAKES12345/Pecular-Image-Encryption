"use client";
import React, { useState, useEffect, useRef } from 'react';
import { getRegistrationData } from '../regData/regData.js';
import './ShareImage.css'; // Assuming this is your custom CSS file

const ShareImage = () => {
  const [imageData, setImageData] = useState('');
  const [users, setUsers] = useState([]);
  const [dataObj, setDataObj] = useState({});
  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  const userRef = useRef();
  const messageRef = useRef();
  const fileInputRef = useRef();

  const takeTheImage = (eve) => {
    const file = eve.target.files[0];
    const { type } = file;
    if (!type.includes("image/")) {
      alert("Select images only!");
    } else {
      const readerObj = new FileReader();
      readerObj.readAsDataURL(file);
      readerObj.onload = () => {
        setImageData(readerObj.result);
        setDataObj({ ...dataObj, image: readerObj.result });
      };
    }
  };

  const handleOnChange = (eve) => {
    const { value, id } = eve.target;
    setDataObj({ ...dataObj, [id]: value });
  };

  const handleUserChange = (eve) => {
    const { value } = eve.target;
    setDataObj({ ...dataObj, userName: value });
  };

  const uploadMsgAndImg = (event) => {
    event.preventDefault(); // Prevent default form submission
    const sharedImageData = JSON.stringify(dataObj);
    sessionStorage.setItem("sharedImageData", sharedImageData);
    setDataObj({});
    setImageData('');
    userRef.current.value = '';
    messageRef.current.value = '';
    fileInputRef.current.value = '';
    setSentSuccessfully(true);
  };

  useEffect(() => {
    const regData = JSON.parse(getRegistrationData());
    const userNames = regData.map((obj) => obj.userName);
    setUsers(userNames);
  }, []);

  useEffect(() => {
    if (sentSuccessfully) {
      // Clear modal state after 3 seconds
      const timer = setTimeout(() => {
        setSentSuccessfully(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [sentSuccessfully]);

  return (
    <div>
      <div className="share-image row container mx-auto">
        <div className="left-side col-md-6">
          <div className="card d-flex align-items-center ms-auto mt-4 pt-5">
            <img src="./card1Image.png" alt="Image1" width="100px" height="100px" />
            <div className='fs-5 fw-bold text-center'>Preview The Image</div>
            <img className='my-4' src={imageData} alt="Preview Image" width="200px" />
          </div>
        </div>
        <div className="right-side col-md-6">
          <div className="card d-flex align-items-center me-auto mt-4 pt-4">
            <img src="./card2Image.png" alt="Image2" width="100px" height="100px" />
            <div className='fs-5 fw-bold text-center'>Upload an Image</div>
            <form className='mt-2 form' onSubmit={uploadMsgAndImg}>
              <div className='form-group d-flex justify-content-center align-items-center'>
                <b>Select User :</b>
                <select className="form-control w-50 mx-auto text-center mt-2" id="userName" onChange={handleUserChange} ref={userRef} required>
                  <option value="">--Select User--</option>
                  {
                    users.map((user, ind) => (
                      <option value={user} key={ind}>{user}</option>
                    ))
                  }
                </select>
              </div>
              <div className='mt-2 fs-6 fw-bold text-center'>Select an Image</div>
              <div className='mt-2 w-100'>
                <input type="file" onChange={takeTheImage} ref={fileInputRef} required />
              </div>
              <div className='fs-6 fw-bold mt-2'>Enter Your Secret Message</div>
              <div>
                <textarea className="form-control" rows="5" style={{ resize: 'none' }} onChange={handleOnChange} id="message" ref={messageRef} required></textarea>
              </div>
              <div className='d-flex justify-content-center align-items-center '><button className='btn btn-primary mt-4'>Upload</button></div>
            </form>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      {sentSuccessfully &&
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setSentSuccessfully(false)}></button>
              </div>
              <div className="modal-body">
                <div className='fs-5 fw-bold text-center text-success'>Sent Successfully</div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ShareImage;
