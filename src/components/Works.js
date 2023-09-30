import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import '../App.css';

const Works = () => {

  return (
    <div>
      <div className='header-back'></div>
      <div className="container">
        <div className='custom-container'>
          <Header />
          <div className='row py-5'>
            <div className="col-12 text-center mb-4">
              <h3 className='mt-4'>WORKS</h3>
              <div className='title-border'></div>
            </div>

            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <Link to="/TimeMe" className='work-link-box'>
                  <div className='work-word'>TimeMe</div>
                  <img src="/timeme_img/timeme_4.png" alt="TimeMe" style={{ height: '150px', width: '250px' }} />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <Link to="/ArchiQuiz" className='work-link-box'>
                  <div className='work-word'>ArchiQuiz</div>
                  <img src="/archiquiz_img/archiquiz_6.png" alt="ArchiQuiz" style={{ height: '150px', width: '250px' }} />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <Link to="/Kagoyume" className='work-link-box'>
                  <div className='work-word'>Kagoyume</div>
                  <img src="/kagoyume_img/kagoyume_9.jpg" alt="Kagoyume" style={{ height: '150px', width: '250px' }} />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <Link to="/Portfolio" className='work-link-box'>
                  <img src="/portfolio_img/portfolio_1.png" alt="Portfolio" style={{ height: '150px', width: '250px' }} />
                  <div className='work-word'>Portfolio</div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Works