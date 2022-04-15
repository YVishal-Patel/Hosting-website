import React from 'react'
import './Learn.css'
import LearnCard from './LearnCard'
import study1 from '../Asset/study1.jpg'
import study2 from '../Asset/study3 (copy).jpg'
import study3 from '../Asset/study4.jpg'

import user1 from '../Asset/user1.jpg'
import user2 from '../Asset/user2.jpg'
import user3 from '../Asset/user3.jpg'



function Learn() {
  return (
      <>
         <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h4>Learn</h4>
          <h2>Helpful Resources</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio.</p>
        </div>
        </div>
        <div className="learn">
            <div className="learn-container">
                <div className="learn-items">
          <LearnCard img={study3} type="Article" title="Boast your conversion rate." disc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum est qui, quod earum ad libero maiores temporibus possimus, sunt a, tempore maxime vero labore totam."  users={user3} name="Natasha Romanoff" date="Mar 16, 2020" />
                </div>
                <div className="learn-items">
          <LearnCard img={study1} type="Video" title="Search Engine optimization." disc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum est qui, quod earum ad libero maiores temporibus possimus, sunt a, tempore maxime vero labore totam."  users={user2} name="Ronda Rousey" date="Mar 16, 2020" />
                </div>
                <div className="learn-items">
          <LearnCard img={study2} type="Case Study" title="Improve your costumer experience." disc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum est qui, quod earum ad libero maiores temporibus possimus, sunt a, tempore maxime vero labore totam." users={user1} name="Jack Lowerence" date="Mar 16, 2020" />
                </div>
            </div>
        </div>
        </div>
      </>
  )
}

export default Learn