import React, { useEffect, useState } from 'react';
import '../styles/about.css';
import { Parallax } from 'react-parallax';
import m3 from '../assets/images/shpe_meeting_3.jpg'
import m2 from '../assets/images/shpe_meeting_2.jpg'
import event_photo from '../assets/images/events/2023_fall_first_meeting.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const About = () => {

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

      <Parallax className='image1a' blur={0} bgImage={m2} strength={800} bgImageStyle={{opacity:.4}}>
        <div className='content'>
            <span className="img-txt"></span>

            
        </div>


      </Parallax>

      <div className='event-boxa'>
        <div className="about-us-container">
        <h1>About SHPE CU</h1>
        <br></br>
        <p>
        The Society of Hispanic Professional Engineers and Latinos in Science and Engineering
        (SHPE/MAES) is the nation’s largest association dedicated to fostering Hispanic
        leadership in the STEM field and the lar. We strive to empower students from middle
        school to college students to realize their fullest potential and to impact the world
        through STEM (Science, Technology, Engineering, Mathematics) bringing education,
        training, volunteering opportunities, and community, and access to the single largest
        national organization of Hispanic members, professionals, and supporters. SHPE/MAES
        strives to promote, cultivate, and honor excellence in education and leadership among

        Latino engineers and scientists.


        </p>
        <p>
          Phasellus in consectetur tortor. Nullam semper quam eu ligula
          hendrerit, nec efficitur lorem blandit.
        </p>
      </div>



      </div>

      <Parallax className='image3a' blur={0} bgImage={m3} strength={800} bgImageStyle={{opacity:.5}}>
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
          <a className='socials' href="https://www.linkedin.com/groups/13551381/" target="_blank" rel="noopener noreferrer">
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

export default About;

