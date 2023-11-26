import React from 'react'
import Header from './Header';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const applicationLinks = [
  { to: '/TimeMe', label: 'TimeMe', imgSrc: '/timeme_img/TimeMe_MockUp.png'},
  { to: '/ArchiQuiz', label: 'ArchiQuiz', imgSrc: '/archiquiz_img/ArchiQuiz_MockUp.png'},
  { to: '/Kagoyume', label: 'Kagoyume', imgSrc: '/kagoyume_img/Kagoyume_MockUp.png'},
  { to: '/Portfolio', label: 'Portfolio', imgSrc: '/portfolio_img/Portfolio_MockUp.png'},
];

const desingLinks = [
  { to: '/TwitterHeader', label: 'Twitter Header', imgSrc: '/design_works_img/Twitter_Header_MockUp.png'},
  { to: '/WebSiteMake', label: 'Profile Pic', imgSrc: '/design_works_img/Web_Make_MockUp.png'},
  { to: '/LogoMake', label: 'Logo Make', imgSrc: '/design_works_img/Logo_Make_MockUp.png'},
  { to: '/BannerAdvertisement', label: 'Banner Ad', imgSrc: '/design_works_img/Banner_Advertisement_MockUp.png'},
];

const Works = () => {

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
          <div className='row py-5'>
            <div className="col-12 text-center mb-4">
              <h3 className='mt-4'>APPLICATION / SITE</h3>
              <div className='title-border'></div>
            </div>
            {applicationLinks.map((link, index) => (
              <div className="col-lg-6 col-md-12 col-xs-12 col-12 my-5">
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div key={index} className='work-link-box' onClick={() => handleClick(link.to)}>
                    <div className='work-word'>{link.label}</div>
                    <img src={link.imgSrc} alt={link.label} style={{ height: '310px', width: '330px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='row mb-5'>
            <div className="col-12 text-center mb-4">
              <h3 className='mt-4'>DESIGN</h3>
              <div className='title-border'></div>
            </div>
            {desingLinks.map((link, index) => (
              <div className="col-lg-6 col-md-12 col-xs-12 col-12 my-5">
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div key={index} className='work-link-box' onClick={() => handleClick(link.to)}>
                    <div className='work-word'>{link.label}</div>
                    <img src={link.imgSrc} alt={link.label} style={{ height: '310px', width: '330px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Works