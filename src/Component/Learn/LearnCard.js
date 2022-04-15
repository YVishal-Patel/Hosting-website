import React from 'react'

function LearnCard(props) {
  return (
      <>
      <div className="learn-card">
      <img src={props.img} alt="" />
      <p className='learnType'>{props.type}</p>
      <h4>{props.title}</h4>
      <p>{props.disc}</p>
      </div>
      <div className="learn-user">
          <div className="user-id">
              <img  src={props.users} alt="" />
          </div>
          <div className="learn-user-data">
              <p>{props.name}</p>
              <h5 className='date'>{props.date}</h5>
          </div>
      </div>
      </>)
}

export default LearnCard