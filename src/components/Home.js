import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import m3 from '../assets/images/shpe_meeting_3.jpg'
import a1 from '../assets/images/nationals_all.JPG'
import event_photo1 from '../assets/images/events/sept21.png'
import event_photo2 from '../assets/images/events/sept22.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/home.css';

const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="homepage">

      <Parallax className='image1' blur={0} bgImage={a1} strength={800} bgImageStyle={{opacity:.4}}>
        <div className='content1'>
            <span className="img-txt">Welcome to the Familia!!</span>

            
        </div>
      </Parallax>

      <div className='event-box'>
        <div class='container'>
            <h3 class='event-title mx-auto'>Next Event:</h3>
            <img className='event_img' src={event_photo1} alt="Logo" />
            <br></br>
            <img className='event_img' src={event_photo2} alt="Logo" />
        </div>
      </div>

      <Parallax className='image3' blur={0} bgImage={m3} strength={800} bgImageStyle={{opacity:.5}}>
        <div className='content'>
            <span className="img-txt"></span>
          
        </div>
      </Parallax>


      <br></br>

      <div className="footer-container">
        <div className="social-media">
          <a className='socials' href="https://www.instagram.com/cuboulder_shpemaes/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className='socials' href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="contact-info">
          <p>Email: shpe.maes.cuboulder@gmail.com</p>
        </div>
      </div>

    </div>
  
    // <section className="home">
    //   <div className="home-content">
    //     <h1>SHPE CU Boulder </h1>
    //   </div>
    // </section>

    
  );
};



export default Home;