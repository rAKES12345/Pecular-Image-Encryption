import React from 'react';
import Link from 'next/link';
import './Logout.css';

const Logout = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
        <div className='text-center fs-2 fw-bold '>
          Logged Out Successfully !
          <div className='loginAgain'><button className='btn btn-warning text-white px-5 py-2 fw-bold my-2'><Link href={'./home'} >Sign In Again</Link></button></div>
          <div className='text-center fs-3 fw-light my-3'>See You Later</div>
        </div>
      </div>
    </div>
  )
}

export default Logout