import React, { useEffect, useState } from 'react';
import '../styles/team.css';
import president_img from '../assets/images/board/president.png' 
import vicepres_img from '../assets/images/board/vicepresident.png'

import treasurer from '../assets/images/board/treasurer.png'
import  secretary from '../assets/images/board/secretary.png'
import  academicchair from '../assets/images/board/academicchair.png'
import  outreachco from '../assets/images/board/outreachco.png'
import  memberengage from '../assets/images/board/memberengage.png'
import professionaldev from '../assets/images/board/professionaldev.png'
import pubrelations from '../assets/images/board/pubrelations.png'
import socialmedia from '../assets/images/board/socialmedia.png'
import webmaster from '../assets/images/board/webmaster.png'
import historian from '../assets/images/board/historian.png'






const Board = () => {

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

    // let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
    return (
      <section class="section-white">
 
    <div class="container">
 
        <div class="row">
       
                    <div class="col-md-12 text-center">

                          <h2 class="section-title">SHPE Board</h2>

                          {/* <p class="section-subtitle">{message}</p> */}
                          
                    </div> 
             
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={president_img} class="team-img" alt="pic" />                   
                      <h3>Isaac Chavarria</h3>            
                      <div class="team-info"><p>President</p></div>
                      <p>Aerospace Engineering<br></br>
                        Fifth Year
                        
                      </p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-linkedin"></i>
                        </a></li>
                          
                          
                      </ul>
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={vicepres_img} class="team-img" alt="pic" />
                     
                      <h3>Erika Antunez</h3>
                      
                      <div class="team-info"><p>Vice-President</p></div>

                      <p>Integrated Design Engineering <br></br>
                        Fifth Year
                      </p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-linkedin"></i>
                        </a></li>
                          
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={treasurer} class="team-img" alt="pic" />
                     
                      <h3>Jessica Navarro</h3>
                      
                      <div class="team-info"><p>Treasurer</p></div>

                      <p>Biomedical Engineering 
                        <br></br>
                        Fourth Year
                        </p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-linkedin"></i>
                        </a></li>
                           
                      </ul>
                      
                  </div>

                  

            </div> 
            <div class="col-sm-6 col-md-4">

            <div class="team-item">

                <img src={secretary} class="team-img" alt="pic" />
              
                <h3>Daniel Cerna</h3>
                
                <div class="team-info"><p>Secretary</p></div>

                <p>Mechanical Engineering <br></br>
                  Fifth Year
                </p>

                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-linkedin"></i>
                        </a></li>
                          
                          
                      </ul>
                
            </div>

            </div> 

            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={academicchair} class="team-img" alt="pic" />
                     
                      <h3>Gustavo Sanchez </h3>
                      
                      <div class="team-info"><p>Academic Chair</p></div>

                      <p>Electrical & Computer Science <br></br>
                        Fourth Year
                      </p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-linkedin"></i>
                        </a></li>
                          
                          
                      </ul>
                      
                  </div>

                  

            </div> 
            <div class="col-sm-6 col-md-4">

              <div class="team-item">

                  <img src={outreachco} class="team-img" alt="pic" />
                
                  <h3>Arly Diaz De Leon</h3>
                  
                  <div class="team-info"><p>Outreach Coordinator</p></div>

                  <p>Chemical & Biological Engineering <br></br>
                  Third Year
                  </p>
                        <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-linkedin"></i>
                        </a></li>
                          
                          
                      </ul>
                  
              </div>



            </div> 
            <div class="col-sm-6 col-md-4">

              <div class="team-item">

                  <img src={memberengage} class="team-img" alt="pic" />
                
                  <h3>Gilbert Carbajal</h3>
                  
                  <div class="team-info"><p>Member Engagement</p></div>

                  <p>Architecural Engineering<br></br>
                  Fourth Year
                  </p>

                  <ul class="team-icon">
                      
                      <li><a href="#" class="twitter">
                        <i class="fa fa-linkedin"></i>
                    </a></li>
                      
                      
                  </ul>
                  
              </div>



              </div> 

              <div class="col-sm-6 col-md-4">

              <div class="team-item">

                  <img src={professionaldev} class="team-img" alt="pic" />
                
                  <h3>Bruno Armas</h3>
                  
                  <div class="team-info"><p>Professional Development Chair</p></div>

                  <p>Eletrical and Computer Science<br></br>
                  Fourth Year
                  </p>                  
                  <ul class="team-icon">
                  
                      <li><a href="#" class="twitter">
                        <i class="fa fa-linkedin"></i>
                    </a></li>
                      
                      
                  </ul>
                  
              </div>



              </div> 

              <div class="col-sm-6 col-md-4">

              <div class="team-item">

                  <img src={pubrelations} class="team-img" alt="pic" />
                
                  <h3>Jackie Padilla</h3>
                  
                  <div class="team-info"><p>Public Relations</p></div>

                  <p> IDE Mechanical Engineer
                    <br></br>
                    Fourth Year 
                  </p>

                  <ul class="team-icon">
                      
                      <li><a href="#" class="twitter">
                        <i class="fa fa-linkedin"></i>
                    </a></li>
                      
                  </ul>
                  
              </div>

              </div> 

              <div class="col-sm-6 col-md-4">

              <div class="team-item">

                  <img src={historian} class="team-img" alt="pic" />
                
                  <h3>Arnold Acosta</h3>
                  
                  <div class="team-info"><p>Historian</p></div>

                  <p> IDE Mechnical Engineer
                    <br></br>
                    Fifth Year
                  </p>
                  
                  <ul class="team-icon">
                  
                      <li><a href="#" class="twitter">
                        <i class="fa fa-linkedin"></i>
                    </a></li>
                      
                      
                  </ul>
                  
              </div>



        </div> 


              <div class="col-sm-6 col-md-4">

              <div class="team-item">

                  <img src={socialmedia} class="team-img" alt="pic" />
                
                  <h3>Nathaniel Ramirez</h3>
                  
                  <div class="team-info"><p>Social Media Coordinator</p></div>

                  <p>Computer Science <br></br>
                  Fifth Year
                  </p>
                  
                  <ul class="team-icon">
                  
                      <li><a href="#" class="twitter">
                        <i class="fa fa-linkedin"></i>
                    </a></li>
                      
                      
                  </ul>
                  
              </div>



              </div> 

              <div class="col-sm-6 col-md-4">

              <div class="team-item">

                  <img src={webmaster} class="team-img" alt="pic" />
                
                  <h3>Jair Galindo Flores</h3>
                  
                  <div class="team-info"><p>Webmaster</p></div>

                  <p>Computer Science <br></br> Fourth Year

                  </p>

                  <ul class="team-icon">
                      
                      <li><a href="#" class="twitter">
                        <i class="fa fa-linkedin"></i>
                    </a></li>
                      
                  </ul>
                  
              </div>

              </div> 
            
            
        
        </div> 
    
    </div> 

    </section>
    )
}

export default Board;