import React from 'react'
import './About.css'
import user1 from '../Asset/user3.jpg'

function About() {
  return (<>
  <div className="about-container">
    <div className="about-items">
        <div className="user-img">
            <img src={user1} alt="" />
        </div>
        <div className="user-review">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem dolorum non ad expedita repudiandae voluptatem. Recusandae excepturi quae eos.</h4>
            <p> - Judith Black</p>
             <h5> - CEO at Pureinsights</h5>
        </div>
    </div>
  </div>

  </>
  )
}

export default About