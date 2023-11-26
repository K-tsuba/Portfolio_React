import React from 'react'
import Header from './Header'
import '../App.css';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <div className='header-back'></div>
      <div className="container">
        <div className='custom-container'>
          <Header />
          <div className='row pt-5 pb-4'>
            <div className="col-12 text-center mb-3">
              <h3 className='mt-4'>CONTACT</h3>
              <div className='title-border'></div>
            </div>
          </div>
          <div className='form-width pb-5'>
            <div className='pb-4'>
              <p className=''>Web関係の仕事依頼を承ります。</p>
              <p>I am open to accepting business inquiries for web-related projects.</p>
            </div>
            <form name="contact" method="POST" data-netlify="true" action="/dummy_thanks.html">
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
              <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact