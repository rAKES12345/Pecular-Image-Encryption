'use client';
import React,{useEffect,useState} from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faBars, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import Menu from '@/routes/menu/Menu';
import Image from 'next/image';
import Loader from '../loader/Loader';
import Card from '../card/Card';
import cardsData from '../data/cardsData'



const Home = () => {
  const [isLoaderTrue, setIsLoaderTrue] = useState(true);
  useEffect(() => {
    // Simulating a loading state for 1 second
    setTimeout(() => {
      setIsLoaderTrue(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoaderTrue && <Loader />}
    <div className='container'>
      <div className='fs-3 fw-bold text-center my-5'>A Peculiar Image Encryption Technique For Mobile Application</div>
      <div className="cards d-flex justify-content-center align-items-center gap-4">
        {cardsData.map((item, index) => (
          <Card key={index} heading={item.heading} cardData={item.cardData} img={item.img} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
