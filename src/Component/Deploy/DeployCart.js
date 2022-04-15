import React from 'react'

function DeployCart(props) {
  return (<>
  <div className="deploy-cart-items">
  <p>{props.icon}</p>
  <h4>{props.type}</h4>
  <p>{props.disc}</p>
  </div>
  </>
  )
}

export default DeployCart