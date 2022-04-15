import './Navbar.css'
import logo from './NavbarAsset/logo1.png'

const Navbar =()=>{
    return(<>
    <div className="container">
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-items-left">
                <ul>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Market Place</a></li>
                    <li><a href="#">Company</a></li>
                </ul>
                
            </div>
            <div className="nav-items-right">
                    <ul>
                        <li><a href="#">Log in</a></li>
                        <button className=' navbar-trial'>Start New Trial</button>
                    </ul>
                </div>
                <div className="nav-item">
                        </div>
        </div>




        <div className="navbar-contents">
            <div className="navbar-content">
                <h5 className='nav-cont1'>WE'RE HIRING</h5>
                <h5 className="nav-cont">VISIT OUR CARRIER PAGE </h5>
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
            </div>
        </div>

       <div className="navbar-main">
           <h1>A better way to </h1>
           <h1 className='navbar-main-content' > ship web apps</h1>
           <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et commodi alias perferendis eveniet aspernatur in. Quaerat veniam doloremque dolores perferendis.</h5>
      
       <input type="email" placeholder="enter your email" className='input'/>
       <button className='main-btn' >Start free trial</button>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Placeat nam maxime reiciendis, autem facilis illo.</p>
       </div>
    </div>
    </>)
}
export default Navbar;