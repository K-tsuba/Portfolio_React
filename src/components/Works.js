import React from 'react'
import Header from './Header';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const applicationLinks = [
  { to: '/TimeMe', label: 'TimeMe', imgSrc: '/timeme_img/timeme_4.png', style: { height: '150px', width: '250px' } },
  { to: '/ArchiQuiz', label: 'ArchiQuiz', imgSrc: '/archiquiz_img/archiquiz_6.png', style: { height: '150px', width: '250px' } },
  { to: '/Kagoyume', label: 'Kagoyume', imgSrc: '/kagoyume_img/kagoyume_9.jpg', style: { height: '150px', width: '250px' } },
  { to: '/Portfolio', label: 'Portfolio', imgSrc: '/portfolio_img/portfolio_1.png', style: { height: '150px', width: '250px' } },
];

const desingLinks = [
  { to: '/TwitterHeader', label: 'Twitter Header', imgSrc: '/design_works_img/Twitter Account Header（デザイン）.png', style: { height: '130px', width: '250px' } },
  { to: '/WebSiteMake', label: 'Web Site Make', imgSrc: '/design_works_img/Web制作（デザイン）.png', style: { height: '150px', width: '190px' } },
  { to: '/LogoMake', label: 'Logo Make', imgSrc: '/design_works_img/ロゴデザイン（デザイン）.png', style: { height: '150px', width: '190px' } },
  { to: '/BannerAdvertisement', label: 'Banner Advertisement', imgSrc: '/design_works_img/広告バナー（デザイン）.png', style: { height: '150px', width: '190px' } },
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
              <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div key={index} className='work-link-box' onClick={() => handleClick(link.to)}>
                    <div className='work-word'>{link.label}</div>
                    <img src={link.imgSrc} alt={link.label} style={link.style} />
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
              <div className="col-lg-4 col-md-12 col-xs-12 col-12 my-5">
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div key={index} className='work-link-box' onClick={() => handleClick(link.to)}>
                    <div className='work-word'>{link.label}</div>
                    <img src={link.imgSrc} alt={link.label} style={link.style} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works