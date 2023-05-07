import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="d-flex justify-content-between content pb-4">
            <div className="info">
                <h4>Bhupinder Singh </h4>
                <p className="text">
                    Thank you for visiting my personal portfolio website. Connect with me over socials.
                    <br />
                    
                </p>
            </div>
            <div class="d-flex align-item-center socialLinks">
                <a href="[your-social-media-link]" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                <a href="[your-social-media-link]" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                <a href="[your-social-media-link]" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="[your-social-media-link]" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div className='d-flex justify-content-between copy'>
            <p>&copy; 2023. All rights reserved.</p>
            <p>Designed and developed by Bhupinder Singh</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
