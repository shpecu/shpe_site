import React, { useEffect, useState } from 'react';

// import '../styles/home.css';

const Membership = () => {

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
  
  
        <div className='event-box'>
              {/* <span> <br></br>   </span> */}
              <h3 className='event-title'>Coming Soon</h3>
  
        </div>
  
      </div>
    
      // <section className="home">
      //   <div className="home-content">
      //     <h1>SHPE CU Boulder </h1>
      //   </div>
      // </section>
  
      
    );
  };
export default Membership;
