import React from 'react'
import './project.css'
import Tilt from 'react-vanilla-tilt'

const Projects = () => {
  return (
    <div className='page_collection'>
      <div className="container">
        <div className="row">
            <div className="col-4">
                <Tilt className="tilt">
                    <div class="pageOuter">
                        <div class="pagethumb">
                            <img src="assets/BigTech LandingPage.png" alt="" class="img-fluid"/>
                        </div>
                        <div class="page_content px-3 pb-3">
                            <div class="page_title">
                                <h3>BigTech Template</h3>
                            </div>
                            <div class="page_links d-flex">
                                <a href="#">Details</a>
                                <a href="/BigTech" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className="col-4">
                <Tilt className="tilt">
                    <div class="pageOuter">
                        <div class="pagethumb">
                            <img src="assets/Aurres LandingPage.png" alt="" class="img-fluid"/>
                        </div>
                        <div class="page_content px-3 pb-3">
                            <div class="page_title">
                                <h3>Aurres   Template</h3>
                            </div>
                            <div class="page_links d-flex">
                                <a href="#">Details</a>
                                <a href="/BigTech" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className="col-4">
                <Tilt className="tilt">
                    <div class="pageOuter">
                        <div class="pagethumb">
                            <img src="assets/CryptoeTrade LandingPage.png" alt="" class="img-fluid"/>
                        </div>
                        <div class="page_content px-3 pb-3">
                            <div class="page_title">
                                <h3>Crypto eTrade Template</h3>
                            </div>
                            <div class="page_links d-flex">
                                <a href="#">Details</a>
                                <a href="/BigTech" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className="col-4">
                <Tilt className="tilt">
                    <div class="pageOuter">
                        <div class="pagethumb">
                            <img src="assets/Pontem LandingPage.png" alt="" class="img-fluid"/>
                        </div>
                        <div class="page_content px-3 pb-3">
                            <div class="page_title">
                                <h3>Pontem Template</h3>
                            </div>
                            <div class="page_links d-flex">
                                <a href="#">Details</a>
                                <a href="/BigTech" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className="col-4">
                <Tilt className="tilt">
                    <div class="pageOuter">
                        <div class="pagethumb">
                            <img src="assets/3Deals LandingPage.png" alt="" class="img-fluid"/>
                        </div>
                        <div class="page_content px-3 pb-3">
                            <div class="page_title">
                                <h3>3Deals</h3>
                            </div>
                            <div class="page_links d-flex">
                                <a href="">Details</a>
                                <a href="https://3Deals.ae" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className="col-4">
                <Tilt className="tilt">
                    <div class="pageOuter">
                        <div class="pagethumb">
                            <img src="assets/passivoLandingPage.png" alt="" class="img-fluid"/>
                        </div>
                        <div class="page_content px-3 pb-3">
                            <div class="page_title">
                                <h3>Passivo</h3>
                            </div>
                            <div class="page_links d-flex">
                                <a href="#">Details</a>
                                <a href="https://passivo.io/" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
