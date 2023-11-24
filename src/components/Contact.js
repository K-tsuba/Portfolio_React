import React from 'react'
import Header from './Header'
import '../App.css';
// import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <div>
      <div className='header-back'></div>
      <div className="container">
        <div className='custom-container'>
          <Header />
          <div className='py-5 form-width'>
            
            <form name="contact" method="POST" data-netlify="true">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" required />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
              </div>
              <input type="hidden" name="form-name" value="contact" />
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
    /* // <Element name="contact">
    
    //   <div className='row'>
    //     <div className="col-12 text-center mb-3">
    //       <h3 className='mt-4'>CONTACT</h3>
    //       <div className='title-border'></div>
    //     </div>
    //   </div>

    //   <div className='contact-width'>
    //     <div className='row pb-5'>
    //       <div className="col-12 text-center mb-2">
    //         <p className='mt-4'>～  お気軽にお問い合わせください  ～</p>
    //       </div>
    //       <div className="col-lg-6 col-md-4 col-xs-4 my-4">
    //         <div className='d-flex justify-content-center align-items-center h-100'>
    //           <a href='https://www.instagram.com/kou_tt_0101/' target="_blank" rel="noreferrer">
    //             <img src="/contact_img/Instagram.jpg" alt="TimeMe" className='contact-img' style={{ height: '60px', width: '55px' }} />
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-md-4 col-xs-4 my-4">
    //         <div className='d-flex justify-content-center align-items-center h-100'>
    //           <a href='https://twitter.com/KouKou39096839' target="_blank" rel="noreferrer">
    //             <img src="/contact_img/Twitter.png" alt="TimeMe" className='contact-img rounded' style={{ height: '50px', width: '50px' }} />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    
    // </Element> */
  )
}

export default Contact