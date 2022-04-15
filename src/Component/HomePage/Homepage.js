import React from 'react'
import './Homepage.css'
import img1 from '../Navbar/NavbarAsset/logo1.png'
import user1 from '../Asset/user1.jpg'
import git from '../Asset/git32.png'
import book from '../Asset/book1.png'

import HomepageCart from './HomepageCart'
import ActivityCard from './ActivityCard'


function Homepage() {
  return (
    <>
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h4>serverless</h4>
          <h2>No server? No problem.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio?</p>
        </div>
        <div className="home-nav">
          <div className="home-nav-container">
            <div className="logo">
             <img src={img1} alt="Not Found" />
            </div>
            <div className="input-search">
              <input type="text" placeholder="Search Project" />
            <svg xmlns="http://www.w3.org/2000/svg" class="icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
            </div>
           <div className="home-nav-container-right">
            <ul>
              <li><a href="#">Documentation</a> </li>
              <li><a href="#"> Support</a></li>
            </ul>
            </div>
            <div className="user">
              <img src={user1} alt="" />
            </div>
          </div>



          <div className="home-main">
          <div className="home-container-items">
          <div className="home-profile-container">
          <div className="user1">
              <img src={user1} alt="" />
              <span>Debbie Lewis</span>
            </div>
            <div className="user-content">
              </div>

              <div className="home-git">
              <img src={git} alt="Not found" />
              <p>Debbie Lewis</p>
            </div>
            <div className="home-main-btn">
            <button className='project-btn'>New Project</button>
            <button className='invite-btn'>Invite Team</button>
            </div>
            <div className="user-membership">
             <svg xmlns="http://www.w3.org/2000/svg" class="icon-right" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg> 
             <p>Pro Membership</p>
            </div>
            <div className="user-membership footer">
              <img src={book}  alt="not found" />
              <p>8 Projects.</p>
            </div>
            </div>
          {/*-------------------------------------- Project   -------------------------------------  */}
          <div className="home-project-container">
            <div className="project-items">
              <div className="project-heading">
                <h3>Projects</h3>
              </div>
              <div className="project-sort">
              <form action="#">
              <select className='select-project-items'>
                <option value="#">Sort</option>
                <option value="#">Saab</option>
                <option value="#">Fiat</option>
                <option value="#">Audi</option>
              </select>
            </form>
              </div>
            </div>
              {/* <hr className='hr'></hr> */}
              <div className="project-work">
                <HomepageCart work= "workcation" name="debbielewis/workcation" />
                <HomepageCart work= "Tailwind CSS" name="debbielewis/tailwindcss" />
                <HomepageCart work= "Kitetail" name="debbielewis/kitetail" />
                <HomepageCart work= "Refracting UI" name="debbielewis/refractingui" />
                <HomepageCart work= "Hero Patterns" name="debbielewis/heropatterns" />
              </div>
          </div>
          <div className="home-activity ">
            <div className="activity-feed">
              <div className="activity-heading">
                <h4>Activity feed</h4>
              </div>
                <ActivityCard userImg={user1} name="you"  Time={"3h"}  message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illo!"} />
                <ActivityCard  userImg={user1} name="Tanya Pena"  Time={"3h"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illo!"}  />
                <ActivityCard  userImg={user1} name="you" Time={"3h"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illo!"} />
                <ActivityCard userImg={user1}  name="Courtney Nguyen" Time={"3h"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illo!"} />
                <ActivityCard userImg={user1} name="you" Time={"3h"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illo!"} />
                <ActivityCard  userImg={user1} name="Guy Webb" Time={"3h"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illo!"}  />
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Homepage