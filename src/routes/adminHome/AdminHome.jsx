import React from 'react';
import { cardsData } from '../cardsData/CardsData';
import Card from '../card/Card';

const AdminHome = () => {
  return (
    <div>
    <div className='container'>
      <div className='fs-3 fw-bold text-center my-5'>A Peculiar Image Encryption Technique For Mobile Application</div>
      <div className="cards d-flex justify-content-center align-items-center gap-4">
        {cardsData.map((item, index) => (
          <Card key={index} heading={item.heading} cardData={item.cardData} img={item.img} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default AdminHome