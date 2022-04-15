import React from 'react'
import './Deploy.css'
import '../HomePage/Homepage.css'
import DeployCart from './DeployCart';

function Deploy() {
  return ( <>
       <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h4>Deploy Faster</h4>
          <h2>Everything you need to deploy your app</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio?</p>
        </div>
        </div>
          <div className="deploy-cart">
              <div className="deploy-cart-item">
                  <div className="deploy-items">

                  <DeployCart icon={<svg xmlns="http://www.w3.org/2000/svg" class="deploy-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
</svg>} type="deploy to push" disc="Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio" />
</div>
           
<div className="deploy-items">
        <DeployCart icon={<svg xmlns="http://www.w3.org/2000/svg" class="deploy-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"  />
</svg>}  type="SSL Certificate" disc="Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio" />
</div>


<div className="deploy-items">
        <DeployCart icon={<svg xmlns="http://www.w3.org/2000/svg" class="deploy-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
</svg>} type="Advanced Security" disc="Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio" />
</div>

<div className="deploy-items">
        <DeployCart icon={<svg xmlns="http://www.w3.org/2000/svg" class="deploy-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>} type="Powerful API" disc="Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio" />
</div>

<div className="deploy-items">
        <DeployCart icon={<svg xmlns="http://www.w3.org/2000/svg" class="deploy-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg>} type="Simple Queues" disc="Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio" />
</div>
 
<div className="deploy-items">
        <DeployCart icon={<svg xmlns="http://www.w3.org/2000/svg" class="deploy-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
</svg>} type="Database Backup" disc="Accusamus corrupti recusandae nam totam reprehenderit deserunt? Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio" />
</div>

                  
              </div>
          </div>     
        </div>
      </>)
}

export default Deploy;