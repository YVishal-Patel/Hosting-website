import React from 'react'
import './Support.css'
import supImg from '../Asset/support.jpg'

function Support() {
  return (<>
  <div className="support-cont">
      <div className="support-items">
          <div className="support-img">
        <img src={supImg} alt="Not Found" />
          </div>
          <div className="support-data">
              <h4>Award Winning Support</h4>
              <h2>We're here to help</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam debitis eos vero perferendis optio culpa natus, aperiam, quas vitae, atque aliquid provident autem ex nemo aliquam ipsam blanditiis! Earum, dolorem?</p>
              <button className='Support-btn'>Visit the help center</button>
          </div>
      </div>
  </div>
  </>
  )
}

export default Support