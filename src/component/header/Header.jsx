import React, { useEffect, useState } from 'react'

const Header = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [activeItem, setActiveItem] = useState('home');
    const [isActive, SetActive] = useState("ture")
    const handleToggle = () =>{
        SetActive(!isActive)
    }
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
    setIsHovered(false);
    };


    useEffect(() => {
        const handleScroll = () => {
          const sectionElements = document.querySelectorAll('section');
          const sectionTops = Array.from(sectionElements).map((section) => section.offsetTop);
          const scrollPosition = window.scrollY + window.innerHeight / 7;
    
          let currentActiveSection = '';
          for (let i = 0; i < sectionTops.length; i++) {
            if (scrollPosition >= sectionTops[i] && scrollPosition < sectionTops[i] + sectionElements[i].offsetHeight) {
              currentActiveSection = sectionElements[i].id;
              break;
            }
          }
    
          setActiveSection(currentActiveSection);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) { // Check if the user has scrolled past the element's offset top
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll); // Add a scroll event listener
      
          return () => {
            window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener on component unmount
          };
    },[])
  return ( 
    <div className={`header position-fixed top-0 w-100 ${isScrolled ? 'topFixed' : ''}`}>
      <div className="container">
      <nav className="navbar navbar-expand-md justify-content-between">
                <a href="/" className={`navbar-brand ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    {isHovered ? 'Bhupinder.' : 'B.'}
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
                                        <a className={`nav-link ${activeItem && activeSection === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')} href="#home">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem && activeSection === 'about' ? 'active' : ''}`} onClick={() => handleItemClick('about')} href="#about">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem && activeSection === 'skills' ? 'active' : ''}`} onClick={() => handleItemClick('skills')} href="#skills">
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem && activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleItemClick('projects')} href="#projects">
                                            Projects
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeItem && activeSection === 'experience' ? 'active' : ''}`} onClick={() => handleItemClick('experience')} href="#experience">
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
