import Header from './Header';
import '../App.css';

const BannerAdvertisement = () => {
    return (
      <div>
        <div className='header-back'></div>
        <div className="container">
          <div className='custom-container'>
            <Header />
            <div className='row py-5'>
              <div className="col-12">
                <h1 className='border-bottom border-3' style={{ padding: '20px' }}>Banner Advertisement</h1>
                <div className='text-center my-5' style={{ 'font-size': '25px' }}>「バナー広告」</div>
              </div>             
              <div className="col-12">
                <div className='text-center'>
                  <img src={`/design_works_img/広告バナー（デザイン）.png`} alt="BannerAdvertisement" className='border border-2 web-site-make-img'></img>
                </div>
              </div>
            </div>
            <div className='work-width mb-5 pb-5'>
              <div className='row'>
                <div className='mt-5'>
                  <h4 className='mb-3'>制作したもの</h4>
                  <div style={{ 'font-size': '18px' }}>
                    <div>アパレルショップ新春SALEのバナー広告</div>
                  </div>
                </div>  
                <div className='mt-5'>
                  <h4 className='mb-3'>使ったツール</h4>
                  <div style={{ 'font-size': '18px' }}>Canva</div>
                </div>  
                <div className='mt-5'>
                  <h4 className='mb-3'>工夫ポイント</h4>
                  <div>
                    <p style={{ 'font-size': '18px' }}>・ アパレルの広告ということをわかるようにするため背景画像を服の写真にして、文字の色も新年の赤を取り入れました。</p>
                    <p style={{ 'font-size': '18px' }}>・ 一番伝えたい情報が割引情報だったので、他の文字と文字サイズに強弱を付けるようにしました。</p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
}

export default BannerAdvertisement