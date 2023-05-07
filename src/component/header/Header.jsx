import React, { useState } from 'react'

const Header = () => {
    
    const [activeItem, setActiveItem] = useState('home');
    const [isActive, SetActive] = useState("ture")
    const handleToggle = () =>{
        SetActive(!isActive)
    }
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
  return ( 
    <div className='header position-fixed top-0 w-100'>
      <div className="container">
      <nav className="navbar navbar-expand-md justify-content-between">
                <a href="/" className="navbar-brand">
                    B.
                </a>
                <div className="d-flex align-items-center">
                    <div className={`side-menu ${isActive ? null : "menu-show"} `}>
                        <div className="backdrop" onClick={handleToggle}></div>
                        <div className="body">
                            <div className="nav-menu ms-auto">
                                <a className="d-lg-none navbar-brand" href="">
                                    B.
                                </a>
                                <button className="close_btn d-block d-lg-none " onClick={handleToggle}>
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')} href="#home">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem === 'about' ? 'active' : ''}`} onClick={() => handleItemClick('about')} href="#about">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem === 'skills' ? 'active' : ''}`} onClick={() => handleItemClick('skills')} href="#skills">
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem === 'projects' ? 'active' : ''}`} onClick={() => handleItemClick('projects')} href="#projects">
                                            Projects
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem === 'experience' ? 'active' : ''}`} onClick={() => handleItemClick('experience')} href="#experience">
                                            Experience
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <a href='#contact' className="cstmBtn ms-auto ms-lg-3"><span>Contact Us</span></a>
                    <button className="nav_btn  ms-3" onClick={handleToggle}>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
      </div>
    </div>
  )
}

export default Header
