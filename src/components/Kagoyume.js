import React, { useState } from 'react'
import Header from './Header';
import '../App.css';

const Kagoyume = () => {
  
  const [mainImage, setMainImage] = useState('kagoyume_9.jpg');

  const images = [
    'kagoyume_1.jpg',
    'kagoyume_2.jpg',
    'kagoyume_3.jpg',
    'kagoyume_4.jpg',
    'kagoyume_5.jpg',
    'kagoyume_6.jpg',
    'kagoyume_7.jpg',
    'kagoyume_8.jpg',
    'kagoyume_9.jpg',
    'kagoyume_10.jpg',
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
              <h1 className='border-bottom border-3' style={{ padding: '20px' }}>Kagoyume</h1>
              <h5 className='text-center my-5'>「」</h5>
            </div>

            <div className="col-12">
              <div className='text-center'>
                <img src={`/kagoyume_img/${mainImage || 'default.jpg'}`} alt="Kagoyume" className='border border-2 main-img'></img>
              </div>

              <div className="d-flex flex-wrap mt-2">
                {images.map((image, index) => (
                  <div key={index} className="m-2">
                    <img src={`/kagoyume_img/${image}`} alt={`kagoyume_${index + 1}`} onClick={() => handleImageClick(image)} className='work-img' style={{ height: '80px', width: '100px' }}></img>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-5'>
              GitHub URL 
              <a href='https://github.com/K-tsuba/Kagoyume' target='_blank' rel='noopener noreferrer' className='ms-2'>
              https://github.com/K-tsuba/Kagoyume
              </a>
            </div>
          </div>

          <div className='work-width'>
            <div className='row'>
              <div className='mt-5'>
                <h4 className='mb-3'>アプリ概要</h4>
                <div style={{ 'font-size': '18px' }}></div>
              </div>
              
              <div className='mt-5'>
                <h4 className='mb-3'>使用技術</h4>
                <div style={{ 'font-size': '18px' }}>HTML / CSS / Bootstrap / Java</div>
              </div>
              
              <div className='mt-5'>
                <h4 className='mb-3'>主な機能</h4>
                <ul style={{ 'font-size': '18px' }}>
                  <li>
                    認証機能
                    <p>認証機能を導入することでユーザーごとにゲームの記録などを保存できる。</p>
                  </li>
                  <li>
                    分野選択
                    <p>特定の分野を集中して学習することで理解をしやすくなる。</p>
                  </li>
                  <li>
                    対戦設計
                    <p>一人で学習をするよりも誰かと学習をすることで刺激になり、吸収力に繋がる。</p>
                  </li>
                  <li>
                    タイピング機能
                    <p>質問の回答をタイピングで行うことでタイピングの練習ができる。</p>
                  </li>
                  <li>
                    振り返り機能
                    <p>ゲームの結果を見れるようにして、間違えた問題や理解していなかった問題の復習ができる。</p>
                  </li>
                  <li>
                    ランキング機能
                    <p>ランキングがあることで競争がうまれ、学習の意欲に繋がります。</p>
                  </li>
                </ul>
              </div>

              <div className='mt-5'>
                <h4 className='mb-3'>工夫ポイント</h4>
                <p style={{ 'font-size': '18px' }}>web socketを使用して同時リアルタイムのゲーム対戦設計</p>
                <p style={{ 'font-size': '18px' }}>質問を投げる戦略型クイズ形式</p>
              </div>

              <div className='my-5'>
                <h4 className='mb-3'>苦労したポイント</h4>
                <p style={{ 'font-size': '18px' }}>同時に入室するときの設計</p>
                <p style={{ 'font-size': '18px' }}>本番環境で複数の台数</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kagoyume