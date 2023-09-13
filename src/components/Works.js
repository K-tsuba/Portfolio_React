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
            <div className="col-12">
              <h1>WORKS</h1>
            </div>

            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <Link to="/TimeMe">
                  <img src="/timeme_img/timeme_3.png" alt="Logo" style={{ height: '150px', width: '180px' }} />
                </Link>
              </div>
              <div className='text-center'>
                <p>TimeMe</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="./logo192.png" alt="プロフィール写真" style={{ height: '100px', width: '120px' }} />
              </div>
              <div className='text-center'>
                <p>Work 1</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="./logo192.png" alt="プロフィール写真" style={{ height: '100px', width: '120px' }} />
              </div>
              <div className='text-center'>
                <p>Work 1</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="./logo192.png" alt="プロフィール写真" style={{ height: '100px', width: '120px' }} />
              </div>
              <div className='text-center'>
                <p>Work 1</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="./logo192.png" alt="プロフィール写真" style={{ height: '100px', width: '120px' }} />
              </div>
              <div className='text-center'>
                <p>Work 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works