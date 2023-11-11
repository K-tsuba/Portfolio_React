import React, { useState } from 'react'
import Header from './Header';
import '../App.css';

const Portfolio = () => {
  
  const [mainImage, setMainImage] = useState('portfolio_1.png');

  const images = [
    'portfolio_1.png',
    'portfolio_2.png',
    'portfolio_3.png',
    'portfolio_4.png',
    'portfolio_5.png'
  ];

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div>
      <div className='header-back'></div>
      <div className="container">
        <div className='custom-container'>
          <Header />
          <div className='row py-5'>
            <div className="col-12">
              <h1 className='border-bottom border-3' style={{ padding: '20px' }}>Portfolio</h1>
              <div className='text-center my-5' style={{ 'font-size': '25px' }}>「ポートフォリオサイト」</div>
            </div>
            <div className="col-12">
              <div className='text-center'>
                <img src={`/portfolio_img/${mainImage || 'default.png'}`} alt="Portfolio" className='border border-2 main-img'></img>
              </div>
              <div className="d-flex flex-wrap mt-2">
                {images.map((image, index) => (
                  <div key={index} className="m-2">
                    <img src={`/portfolio_img/${image}`} alt={`portfolio_${index + 1}`} onClick={() => handleImageClick(image)} className='work-img' style={{ height: '80px', width: '100px' }}></img>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-5'>
              GitHub URL 
              <a href='https://github.com/K-tsuba/Portfolio_React' target='_blank' rel='noopener noreferrer' className='ms-2'>
              https://github.com/K-tsuba/Portfolio_React
              </a>
            </div>
          </div>
          <div className='work-width mb-5'>
            <div className='row'>
              <div className='mt-5'>
                <h4 className='mb-3'>内容</h4>
                <div style={{ 'font-size': '18px' }}>自己紹介、スキル、作品</div>
              </div>
              <div className='mt-5'>
                <h4 className='mb-3'>使用技術</h4>
                <div style={{ 'font-size': '18px' }}>HTML / CSS / Bootstrap / React</div>
              </div>
              <div className='mt-5'>
                <h4 className='mb-3'>工夫ポイント</h4>
                <p className='border-bottom border-dark' style={{ 'font-size': '18px' }}>フレキシブル対応ができるようにデザインを調整したところ</p>
                <p style={{ 'font-size': '18px' }}>今までWebで見れるようにデザインを設計していた。しかし、ポートフォリオをスマホでも見れるようにした方がいいと思い、画面幅が狭くなっても見れるようにデザインを設計しました。それぞれの画面幅によってデザインを少しずつ調整をしないといけない所は大変だったのですが、他のポートフォリオサイトやデザインサイトを参考に良かったデザインを取り入れて設計しました。普通のサイトは静止的な部分が多いので、少しでも多く動的な要素を取り入れるように工夫しました。</p>
              </div>
              <div className='my-5'>
                <h4 className='mb-3'>苦労したポイント</h4>
                <p className='border-bottom border-dark' style={{ 'font-size': '18px' }}>使用しているライブラリへの細かい追加</p>
                <p style={{ 'font-size': '18px' }}>reactのライブラリを使用して、ヘッダーの部分やSPAの実装などを行いました。そこで、もう少しこうしたいと思ったところの修正を加える時に柔軟性がないため少し設計に苦労するようなことが何度かありました。簡単に設計ができる反面追加で修正を加える必要があるとデザインとかもそれに合わせる必要があって少し時間がかかるというところが大変でした。</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio