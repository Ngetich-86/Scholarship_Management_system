import React from 'react'
import './Home.css'
import Reg from '../Register/Reg'
import Image1 from '../../assets/images/Diverse-young-students.jpg'

const Home = () => {
  return (
    <div className="container">
      <div className="home">
      <img src={Image1} alt="diverse img" />
        </div>
        <div className="content">
          <h1>Welcome to Ustawi Scholarship Program</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa nemo, fugiat officiis
             quibusdam inventore
             non molestiae qui, repellat laboriosam quaerat. Nulla, nobis! Animi, dolore obcaecati.
              Quisquam quidem alias sunt!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa nemo, fugiat officiis
            </p>

              <button Route path='/Reg' element= {<Reg/>} >Register Now</button>


        </div>
    </div>
  )
}

export default Home