import React from 'react'
import './About.css'
import image2 from '../../assets/images/girl.jpg'
import image3 from '../../assets/images/graduation.jpg'
import data from './data'
const About = () => {
  return (
    <div className="container1">
      <div className="about-us">
      <h1>About us</h1>
      <p>Ustawi scholarship is a leading technology scholarship provider, built to accelerate the careers of
         young Africans through the technology and professional skills that enable them to 
         thrive in the digital economy.</p>
         </div>

         <div className="img-container">
          <div className="img1">
          <img src={image2} alt="diverse img" />
          </div>
          <div className="img2">
          <img src={image3} alt="diverse img" />
          </div>
         </div>

         
         
            <section id="the-team">
              <h1>Meet The Team</h1>
            <p>Our team is made up of passionate individuals who are committed to making a difference
               in the lives of young Africans.</p>
{/* 
               <div className="team-container">
                {data.map(({image,name,rank,linked}))} ={
                    <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h2>{name}</h2>
              <h3>{rank}</h3>
              <div className="portfolio__item-cta">
                <a href={linkedin} className="btn primary">
                  linkedin
                </a>
              </div>
            </article> 
                }
               </div> */}
               </section>


               <div className="reachout">
                <h1>contact us</h1>
                <p>Location: Kenya</p>
                <h6>P.O.BOX:64-103100</h6>
                <h6>Phone Number:+254742252910</h6>
               </div>


    
            

               
         </div>

  )
}

export default About