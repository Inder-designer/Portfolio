import React from 'react'

const Header = () => {
  return ( 
    <div className='header position-fixed top-0 w-100'>
      <div className="container">
      <nav className="navbar navbar-expand-md justify-content-between">
                <a href="/" className="navbar-brand">
                    B.
                </a>
                <div className="d-flex align-items-center">
                    <div className="side-menu">
                        <div className="backdrop"></div>
                        <div className="body">
                            <div className="nav-menu ms-auto">
                                {/* <a className="d-xl-none d-block" href="">
                                    <img src="assets/faction_logo@4x.png.png" alt="" className="" height="46px"/>
                                </a> */}
                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link " href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#skills">
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#projects">
                                            Projects
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#experience">
                                            Experience
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <a href='#contact' className="cstmBtn ms-auto ms-lg-3"><span>Contact Us</span></a>
                    <button className="nav_btn ">
                        {/* <img src="assets/bars.svg" alt="" width="20px" className="ms-3"/> */}
                    </button>
                </div>
            </nav>
      </div>
    </div>
  )
}

export default Header
