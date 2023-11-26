import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer-back'>
      <div className="container p-4">
        <div className='footer-container'>
          <div className="row">
            <div className='col-lg-8 col-md-12 col-12 p-3'>
              <h6 className='pb-3'>お問い合わせ<FontAwesomeIcon icon={faEnvelope} size="lg" className='ms-2' style={{ color: '#526D82' }} /></h6>
              <div className='d-flex flex-row'>
                <div className=''>ご質問やお問い合わせがあれば、お気軽にご連絡ください</div>
                <div className='ms-2'>
                  <a href="/contact" target="_blank">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" style={{ color: '#526D82' }} />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-12 p-3'>
              <h6>Follow Us<FontAwesomeIcon icon={faUser} size="lg" className='ms-2' style={{ color: '#526D82' }} /></h6>
              <div className='d-flex flex-row py-2'>
                <div className=''>
                  <a href="https://www.instagram.com/kou_tt_0101/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#526D82' }} />
                  </a>
                </div>
                <div className='ms-3'>
                  <a href="https://twitter.com/KouKou39096839" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} size="2x" style={{ color: '#526D82' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-3'>
          <FontAwesomeIcon icon={faCopyright} size="" className='me-2' style={{ color: '#526D82' }} />2023 KT. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer