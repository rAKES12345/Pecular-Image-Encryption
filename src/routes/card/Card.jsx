"use client";
import React from 'react'
import './Card.css';

const Card = ({ heading, cardData, img }) => {
    return (
      <div>
        <div className="card py-4">
          <img className='mx-auto' src={img} alt="image" />
          <div className="fs-4 fw-bolder text-center mt-5 mb-3 px-4">{heading}</div>
          <div className='fs-6 fw-light text-center px-4'>{cardData}</div>
        </div>
      </div>
    );
  };

export default Card