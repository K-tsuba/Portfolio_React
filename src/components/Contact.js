import React from 'react'
import '../App.css';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name="contact">
    
      <div className='row'>
        <div className="col-12 text-center mb-3">
          <h3 className='mt-4'>CONTACT</h3>
          <div className='title-border'></div>
        </div>
      </div>

      <div className='contact-width'>
        <div className='row pb-5'>
          <div className="col-12 text-center mb-2">
            <p className='mt-4'>～  お気軽にお問い合わせください  ～</p>
          </div>
          <div className="col-lg-6 col-md-4 col-xs-4 my-4">
            <div className='d-flex justify-content-center align-items-center h-100'>
              <a href='https://www.instagram.com/kou_tt_0101/' target="_blank" rel="noreferrer">
                <img src="/contact_img/Instagram.jpg" alt="TimeMe" className='contact-img' style={{ height: '60px', width: '55px' }} />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-xs-4 my-4">
            <div className='d-flex justify-content-center align-items-center h-100'>
              <a href='https://twitter.com/KouKou39096839' target="_blank" rel="noreferrer">
                <img src="/contact_img/Twitter.png" alt="TimeMe" className='contact-img rounded' style={{ height: '50px', width: '50px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </Element>
  )
}

export default Contact