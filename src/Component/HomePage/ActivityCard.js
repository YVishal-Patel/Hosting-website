import React from 'react'

function ActivityCard(props) {
  return (
    <>
    <div className="home-activity-card">
      <div className="home-activity">
        <div className="activity-img">
      <img  src={props.userImg} alt="" />
      </div>
      <div className="activity-name">
        <h5>{props.name}</h5>
      <p>{props.Time}</p>
      </div>
      </div>
      <p className='activity-message'>{props.message}</p>
    </div>
    <hr className='hr'/>
    </>
  )
}

export default ActivityCard