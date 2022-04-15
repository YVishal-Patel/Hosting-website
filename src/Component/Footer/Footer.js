import React from 'react'
import './Footer.css'
import logo from '../Navbar/NavbarAsset/logo1.png'

function Footer() {
  return (<>
  <div className="footer-component">
      <div className="footer-items">
          <div className="footer-img-items">
           <img src={logo} alt="Not found" />
           <p>Making the world better place through constructing better hierarchy.</p>
          </div>
          <div className="footer-item">
              <h4>SOLUTIONS</h4>
              <ul>
                  <li>Marketing</li>
                  <li>Analytic</li>
                  <li>Commmerce </li>
                  <li>Insight</li>
              </ul>
          </div>

          <div className="footer-item">
              <h4>SUPPORT</h4>
              <ul>
                  <li>Pricing</li>
                  <li>Documentation</li>
                  <li>Guides</li>
                  <li>API Status</li>
              </ul>
          </div>

          <div className="footer-item">
              <h4>Company</h4>
              <ul>
                  <li>About</li>
                  <li>Job</li>
                  <li>Blog </li>
                  <li>Press</li>
              </ul>
          </div>

          <div className="footer-item">
              <h4>LEGAL</h4>
              <ul>
                  <li>Claim</li>
                  <li>Privacy</li>
                  <li>Terms </li>
                  <li>Partners</li>
              </ul>
          </div>

      </div>
      <div className="footer-copyright">
          <hr />
          <p>@2020 Workflow, Inc. All right reserved.</p>
          <i class="fa-brands fa-twitter"></i>
      </div>
  </div>
  </>)
}

export default Footer