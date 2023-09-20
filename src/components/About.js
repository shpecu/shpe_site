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
            <span className="img-txt"> About Us</span>

            
        </div>


      </Parallax>

      <div className='event-boxa'>


        <div class="container-fluid shpeabout">

            <div className='shpedef mx-auto'>
              <h1 class = 'heading1 mx-auto'> SHPE CU</h1>


              <p class = 'shpeabouttext mx-auto'>
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

            </div>

            {/* <Parallax className='image3a' blur={0} bgImage={m3} strength={800} bgImageStyle={{opacity:.5}}>
              <div className='content'>
                  <span className="img-txt"></span>
                
              </div>
            </Parallax> */}


            <div class="mission row justify-content-evenly mx-auto">

              <div class="col-3">
                <h2>Goals:</h2>
              </div>

              <div class="col-7">
                <div className='goalList'>
                  <ul>
                    <li > 
                      <b>Awareness:</b> bringing Hispanic/Latin American culture to campus, mentoring students 
                        in high school, outreach and volunteering in STEM
                    </li>

                    <li>
                      <b>Access:</b> to the top companies in the US for engineers, a network of alumni, 

                    </li>
                    <li>
                      <b> Support:</b> the largest network of Hispanic students on campus, community-bonding, academic mentorship, social community, personal support 
                    </li>
                    <li>
                      <b>Development:</b>  workshops on personal finance, networking, resume building, activism, and socially-bonded growth 
                    </li>

                  </ul>
                </div>

              </div>
            </div>     

          <div class="mission row justify-content-evenly mx-auto">

            <div class="col-3">
              <h2>Mission:</h2>
            </div>

            <div class="col-7">
            SHPE's mission is to develop a diverse community of supportive CU Boulder students that excel as STEM leaders, contributing community members, and well rounded professionals.
            </div>
          </div>   

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

