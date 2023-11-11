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
              <div className='text-center my-5' style={{ 'font-size': '25px' }}>「フラストレーションなく楽しめる仮想世界でのショッピングアプリ」</div>
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
          <div className='work-width mb-5'>
            <div className='row'>
              <div className='mt-5'>
                <h4 className='mb-3'>アプリ概要</h4>
                <div style={{ 'font-size': '18px' }}>オンラインショッピングが普及するようになり、オンラインでも買い物を楽しめるようになりました。しかし、欲しい商品が多くて、ついつい商品カートに追加して、後で合計金額をみて悩むことが多いと思います。そんなストレスを解消することができます。</div>
              </div>
              <div className='mt-5'>
                <h4 className='mb-3'>使用技術</h4>
                <div style={{ 'font-size': '18px' }}>HTML / CSS / Bootstrap / Java</div>
              </div> 
              <div className='mt-5'>
                <h4 className='mb-3'>主な機能</h4>
                <ul style={{ 'font-size': '18px' }}>
                  <li>
                    商品検索
                    <p>ユーザーが買いたいと思っている商品を検索することで絞込ができる。</p>
                  </li>
                  <li>
                    買い物かごに追加する機能
                    <p>ユーザーが買いたい商品を買い物かごに追加することで、他にも買いたい商品を見ることができる。</p>
                  </li>
                  <li>
                    会員登録
                    <p>ユーザー登録によって、他の人とカートの中身が共有されないようにしたり、買う・買った商品をユーザーごとに管理する。</p>
                  </li>
                  <li>
                    購入機能（実際には購入できない）
                    <p>購入画面は設けているが、実際にお金が発生するわけではなく、現実世界で買うことはできない。</p>
                  </li>
                </ul>
              </div>
              <div className='mt-5'>
                <h4 className='mb-3'>工夫ポイント</h4>
                <p className='border-bottom border-dark' style={{ 'font-size': '18px' }}>DAOやDTO, Beanを使用してコードを設計</p>
                <p style={{ 'font-size': '18px' }}>最初はそれぞれの概念を理解することが大変だったのですが、フレームワークで言うMVC構造のようにJavaでもDAOやDTOなどを使用することでコードを簡略化して書くことができました。データベースからデータを取得して表示をするときやデータをデータベースに格納するときに使いまわしすることも可能なのでその分のコード量など減らせるように工夫しました。</p>
              </div>
              <div className='my-5'>
                <h4 className='mb-3'>苦労したポイント</h4>
                <p className='border-bottom border-dark' style={{ 'font-size': '18px' }}>yahooのapiと連携してデータを取得すること</p>
                <p style={{ 'font-size': '18px' }}>今回のショッピングサイトはyahooのオンラインショッピングにある商品を表示できるようにしました。その時にyahooのapiを用いて、商品を取得するだけだったら問題なくできたのですが、検索をかけて特定の商品を取得して表示するようにする時の設計に苦労しました。パラメータはyahoo側で設定されており、そのパラメータを使用してデータを取得する必要がありました。一つの商品にしかないキーのパラメータを使用して、データを取得しても複数の商品が表示されてしまうようなこともあり、うまくいかないことがありました。そこで、検索をかけたときに特定の商品が表示されるようにいくつかのパラメータを使用して検索ができるように設計しました。</p>
                <p className='border-bottom border-dark' style={{ 'font-size': '18px' }}>商品かごの中身をそれぞれのユーザーごとの中身にすること</p>
                <p style={{ 'font-size': '18px' }}>cookieとsessionの概念を最初は理解できていなくて、商品かごに他のユーザーの追加した商品も入ってしまい、一人で買い物をできるように設計するところに苦労しました。sessionをうまく使うと通信を行う際にコンピュータがどのユーザーなのかを認識してくれて、うまくそれぞれのユーザーごとに買い物ができるようになりました。オンラインショッピングサイトだけでなく、色々な所で日常的に使われている概念だったので、Webのことについて少しずつ知れることが面白く感じました。</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kagoyume