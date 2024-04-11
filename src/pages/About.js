import React from 'react'
import bus from '../assets/photos/bus_about.jpeg'
import '../css/About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='abt_heading'>
        <h1><span>ABOUT</span> BusHub</h1>
      </div>
      <div className='abt_container'>
        <div className='image'>
          <img src={bus} alt=""/>
        </div>
        <div className='abt_content'>
          <span>What makes BusHub special?</span>
          <p><b><u>Reduced overcrowding:</u></b> Accurate live bus tracking enables
           commuters to plan their journeys better, minimizing the need to 
           wait at crowded bus stops. </p>
          <p><b><u>Enhanced passenger experience:</u></b> Passengers gain access 
          to real-time information about bus locations and estimated 
          arrival time, allowing them to make informed decisions and 
          reducing uncertainty. </p>
          <p><b><u>Technological innovation:</u></b> The project embraces 
          technologies like real-time tracking, geospatial data analysis 
          and secure payment gateways, showcasing the city's commitment 
          to technological innovation and smart urban infrastructure.</p>
        </div>
      </div>
    </div>
  )
}

export default About
