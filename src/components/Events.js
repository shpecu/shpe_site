import React, { useEffect, useState } from 'react';
import '../styles/home.css';

const Events = () => {

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
    <div className="eventpage">
      <section className="section-with-background">
        <div className="title-overlay">
            <h1>Our events</h1>
            
            <p>Society of Hispanic Professional Engineers at University of Colorado Boulder</p>
          </div>
      </section>

      <div>

        jweifweifwef


        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&src=amFpcmdvdGFsZW50OTE5QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=bzhwdGYwZWFqMXNvM2g3aThsOGNvaGRkaWhwcGEyYTdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%2333B679&color=%230B8043&color=%23D50000" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>

    </div>
  
    // <section className="home">
    //   <div className="home-content">
    //     <h1>SHPE CU Boulder </h1>
    //   </div>
    // </section>
  );
};

export default Events;
