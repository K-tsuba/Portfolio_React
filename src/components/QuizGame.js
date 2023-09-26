import React, { useState } from 'react'
import Header from './Header';
import '../App.css';

const QuizGame = () => {

  const [mainImage, setMainImage] = useState('archiquiz_5.png');

  const images = [
    'archiquiz_1.png',
    'archiquiz_2.png',
    'archiquiz_3.png',
    'archiquiz_4.png',
    'archiquiz_5.png',
    'archiquiz_6.png',
    'archiquiz_7.png'
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
              <h1 className='border-bottom border-3' style={{ padding: '20px' }}>ArchiQuiz</h1>
              <h5 className='text-center my-5'>「建築環境や設備分野についてクイズ形式で学習できるアプリケーション」</h5>
            </div>

            <div className="col-12">
              <div className='text-center'>
                <img src={`/archiquiz_img/${mainImage || 'default.png'}`} alt="main_img" className='border border-2 main-img'></img>
              </div>

              <div className="d-flex flex-wrap mt-2">
                {images.map((image, index) => (
                  <div key={index} className="m-2">
                    <img src={`/archiquiz_img/${image}`} alt={`archiquiz_${index + 1}`} onClick={() => handleImageClick(image)} className='work-img' style={{ height: '80px', width: '100px' }}></img>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-5'>
              GitHub URL 
              <a href='https://github.com/K-tsuba/chat-app' target='_blank' rel='noopener noreferrer' className='ms-2'>
              https://github.com/K-tsuba/chat-app
              </a>
            </div>
          </div>

          <div className='work-width'>
            <div className='row'>
              <div className='mt-5'>
                <h4 className='mb-3'>アプリ概要</h4>
                <div style={{ 'font-size': '18px' }}>世界問題の一つとして環境問題がある。多くの企業などが環境に負荷を与えないように対策を取り実行しているが、一人一人が意識して問題と向き合う必要があると考えている。そこで学校教育でも環境について学ぶ機会が増えたり、環境の教材があったりする。しかし、授業では面白く学べないだったり、既存のゲームにも普段できるようなことが学べないなどの問題があったため、ゲームを通して建築的観点から環境について学習できる。</div>
              </div>
              
              <div className='mt-5'>
                <h4 className='mb-3'>使用技術</h4>
                <div style={{ 'font-size': '18px' }}>HTML / CSS / Bootstrap / PHP / Laravel / Javascript</div>
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

export default QuizGame