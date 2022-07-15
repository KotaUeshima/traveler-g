import React from 'react'
import './About.css'

function About() {
  return (
    <div >
        <h1>What are we all about?</h1>
          <div className='polaroid'>
            <img src='https://img.freepik.com/free-photo/flat-lay-yellow-luggage-with-copy-space_23-2148786124.jpg?size=626&ext=jpg&ga=GA1.2.1939195639.1657853215' alt='travel' style={{width: 1000}}/>
          <div className='container'>
             <p>At Where in the World?, we want you to feel informed about the places you may choose to visit. We encourage you to explore past user experiences on their travels and to post any reccomendations on places you have visted yourself!  </p>
          </div>
        </div>
      </div>
  )
}

export default About