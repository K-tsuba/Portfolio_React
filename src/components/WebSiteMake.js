import Header from './Header';
import '../App.css';

const WebSiteMake = () => {
    return (
      <div>
        <div className='header-back'></div>
        <div className="container">
          <div className='custom-container'>
            <Header />
            <div className='row py-5'>
              <div className="col-12">
                <h1 className='border-bottom border-3' style={{ padding: '20px' }}>Profile Pic</h1>
                <div className='text-center my-5' style={{ 'font-size': '25px' }}>「WEB制作」</div>
              </div>             
              <div className="col-12">
                <div className='text-center'>
                  <img src={`/design_works_img/Web制作（デザイン）.png`} alt="web_site_make_img" className='border border-2 web-site-make-img'></img>
                </div>
              </div>
            </div>
            <div className='work-width mb-5 pb-5'>
              <div className='row'>
                <div className='mt-5'>
                  <h4 className='mb-3'>制作したもの</h4>
                  <div style={{ 'font-size': '18px' }}>
                    <div>「WEB制作」を商品としたココナラ用のサムネイル</div>
                  </div>
                </div>  
                <div className='mt-5'>
                  <h4 className='mb-3'>使ったツール</h4>
                  <div style={{ 'font-size': '18px' }}>Canva</div>
                </div>  
                <div className='mt-5'>
                  <h4 className='mb-3'>工夫ポイント</h4>
                  <div>
                    <p style={{ 'font-size': '18px' }}>どんなWeb制作を売りにしたいかを考えた時にサイトを作る目的の一つに多くの人に認知してもらうために作るという理由があると思います。それをデザインにも表現したいと思い、中央に重要な情報を書いて、その周りにいくつかのキャッチコピーを配置したのですが、中央に集まるようなデザインにすることで多くの人がサイトに訪れるというイメージをデザインで表現しました。</p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
}

export default WebSiteMake