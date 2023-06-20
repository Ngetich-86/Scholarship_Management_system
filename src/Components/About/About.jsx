import React from 'react'
import './About.css'
import image2 from '../../assets/images/girl.jpg'
import image3 from '../../assets/images/graduation.jpg'
import data from './data'
import { FaLinkedin } from 'react-icons/fa'
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

               <div className="container portfolio__container">
        {data.map(({ id, image, title,rank,linkedin, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <h4>{rank}</h4>
              <div className="portfolio__item-cta">
                <a href={linkedin} className="btn primary">
                  linkedin
                </a>
               
              </div>
            </article>
          );
        })}
      </div>
      </section>

      {/* ==================================footer-------------------- */}


               <div className="reachout">
                <h1>contact us</h1>
                <p>Location: Kenya</p>
                <h6>P.O.BOX:64-103100</h6>
                <h6>Phone Number:+254742252910</h6>
                <form>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
               </div>


    
            

               
         </div>

  )
}

export default About