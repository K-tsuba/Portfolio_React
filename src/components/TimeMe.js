import React, { useState } from 'react'
import Header from './Header';
import '../App.css';

const TimeMe = () => {
  
    const [mainImage, setMainImage] = useState('timeme_3.png');

    const images = [
      'timeme_1.png',
      'timeme_2.png',
      'timeme_3.png',
      'timeme_4.png',
      'timeme_5.png',
      'timeme_6.png',
      'timeme_7.png',
      'timeme_8.png',
      'timeme_9.png',
      'timeme_10.png'
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
                <h1 className='border-bottom border-3' style={{ padding: '20px' }}>TimeMe</h1>
                <h5 className='text-center my-5'>「学習時間を計測し、学習のモチベーションの維持向上を図るアプリケーション」</h5>
              </div>

              <div className="col-12">
                <div className='text-center'>
                  <img src={`/timeme_img/${mainImage || 'default.jpg'}`} alt="main_img" className='border border-2 main-img'></img>
                </div>

                <div className="d-flex flex-wrap mt-2">
                  {images.map((image, index) => (
                    <div key={index} className="m-2">
                      <img src={`/timeme_img/${image}`} alt={`timeme_${index + 1}`} onClick={() => handleImageClick(image)} className='second_img' style={{ height: '80px', width: '100px' }}></img>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mt-5'>
                GitHub URL 
                <a href='https://github.com/K-tsuba/TimeMe' target='_blank' rel='noopener noreferrer' className='ms-2'>
                https://github.com/K-tsuba/TimeMe
                </a>
              </div>
            </div>

            <div className='work-width'>
              <div className='row'>
                <div className='mt-5'>
                  <h4 className='mb-3'>アプリ概要</h4>
                  <div style={{ 'font-size': '18px' }}>コロナによりオンライン学習が発展し、webサイトなどで気軽に学習できる教材が増えています。しかしオンラインで一人で学習するのも難しいと思う方が多いと思います。そこで学習時間を計測することで1日にどれくらい学習しているを把握でき、予定を立てることに繋がったり、学習時間の可視化によりモチベーションを保つことができます。</div>
                </div>
                
                <div className='mt-5'>
                  <h4 className='mb-3'>使用技術</h4>
                  <div style={{ 'font-size': '18px' }}>PHP / Laravel / Javascript</div>
                </div>
                
                <div className='mt-5'>
                  <h4 className='mb-3'>主な機能</h4>
                  <ul style={{ 'font-size': '18px' }}>
                    <li>
                      学習するサイトの登録
                      <p>自分が学習したいサイトのタイトルを決めていただいて、urlを記入していただければこのサイトから自分が学習したいサイトへ遷移することができます。</p>
                    </li>
                    <li>
                      時間の計測
                      <p>学習するサイトを選んでいただいた後に、startのボタンを押していただくと計測することができます。</p>
                    </li>
                    <li>
                      目標と振り返りをtwitterにツイートする
                      <p>目標では学習を始める前に、今日のゴールや意気込みを宣言することで学習の意欲を高められます。また振り返りでは学んだことをアウトプットすることで記憶に残すことができます。</p>
                    </li>
                    <li>
                      音楽の再生
                      <p>学習中にやる気がなくなったり、疲れた時に気分を高めることができます。</p>
                    </li>
                    <li>
                      他のユーザーの学習時間一覧
                      <p>他のユーザーの学習時間を知ることができればお互いに頑張ろうという気持ちを共有することができ、学習の意欲保持に繋がります。</p>
                    </li>
                    <li>
                      学習時間のランキング
                      <p>ランキングがあることで競争がうまれ、学習の意欲に繋がります。</p>
                    </li>
                    <li>
                      アウトプット投稿/質問
                      <p>学習したことをアウトプットすることで自分のためになるし、相手のためにもなります。またわからないことも質問できるのでお互いに助け合うことができます。</p>
                    </li>
                    <li>
                      自分の学習時間一覧表
                      <p>1週間にどれくらい学習しているのかなどを把握することで予定を立てる時の目安になったり、時間を可視化することで自身にも繋がります。</p>
                    </li>
                  </ul>
                </div>

                <div className='mt-5'>
                  <h4 className='mb-3'>工夫ポイント</h4>
                  <p style={{ 'font-size': '18px' }}>こだわったところは学習時間の表示のところです。最初は今までの学習時間を表示できたり、今日の学習時間を表示できればいいと考えていました。しかし、作っている時に１週間分でまとめられていたり、月単位での時間などを知ることができれば学習の予定管理などに役立つと思ったので様々な表示で確認できるようにこだわりました。</p>
                  <p style={{ 'font-size': '18px' }}>コード面ではControllerの肥大化するのをうまくModelを使ってコードを分かりやすいように書くことをこだわりました。最初は1週間分や1カ月分など一つ一つ丁寧に書いていたのでControllerが肥大化してしまいました。しかし、データを取得するときに範囲が異なるだけで足し方は一緒な所があったりしたのでそういったところをModelで関数にまとめControllerの肥大化を解消しました。</p>
                </div>

                <div className='my-5'>
                  <h4 className='mb-3'>苦労したポイント</h4>
                  <p style={{ 'font-size': '18px' }}>計測時間を表示する時に計算して表示することに苦労しました。計測するときにボタンを押した時間と終了するときにボタンを押したときの差分で学習時間を表示しています。その時にデータベースに保存されている日時から時間の部分を取得して差分を計算しても上手くいきませんでした。そこで時間の形式を変換して差分を計算してから表示するように設計しており、思ったように計算できない所に苦労しました。</p>
                  <p style={{ 'font-size': '18px' }}>TwitterとかYoutubeとの連携をしているのですが、外部APIとの連携を今までしたことがなかったので、外部から情報を取得するときにはどういったデータが必要で、データを取得するにはどういう形式で取得できるのかなどを理解するところが難しくて苦労しました。まだすべてを理解できているわけではないのですが、今回実際に実装することができたので、流れや必要なことはわかったので、今後開発を行っていく過程で理解できるようにしていきたいと思っています。</p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
}

export default TimeMe