import React from 'react'
import Profile from './Profile'
import Header from './Header'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();

  const handleClick = (to) => {
    // リンクがクリックされたときにページのトップにスクロールし、遷移
    window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <div>
      <div className='header-back'></div>
      <div className="container">
        <div className='custom-container'>
          <Header />
          <Profile />
          <div className='row'>
            <div className="col-12 text-center mb-3">
              <h3 className=''>WORKS</h3>
              <div className='title-border'></div>
            </div>
          </div>
          <div className='work-width py-5'>
            <div className='row'>
              <div className="col-lg-4 col-md-12 col-12 pb-5 text-center">
                <img src="/timeme_img/TimeMe_MockUp.png" alt="TimeMe" onClick={() => handleClick("/TimeMe")} className='work-hover' width="200" height="200" />
              </div>
              <div className="col-lg-4 col-md-12 col-12 pb-5 text-center">
                <img src="/portfolio_img/Portfolio_MockUp.png" alt="Portfolio" onClick={() => handleClick("/Portfolio")} className='work-hover' width="200" height="200" />
              </div>
              <div className="col-lg-4 col-md-12 col-12 pb-5 text-center">
                <img src="/design_works_img/Twitter_Header_MockUp.png" alt="TwitterHeader" onClick={() => handleClick("/TwitterHeader")} className='work-hover' width="200" height="200" />
              </div>
            </div>
            <div className='text-center me-3 mt-2'>
              <a href="/works" class="btn btn-secondary">View All >></a>
            </div>
          </div>
          <div className="col-12 text-center mb-3">
            <h3 className='mt-4'>SKILLS</h3>
            <div className='title-border'></div>
          </div>
          <div className='work-width py-5'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage