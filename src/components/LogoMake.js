import Header from './Header';
import '../App.css';

const LogoMake = () => {
    return (
      <div>
        <div className='header-back'></div>
        <div className="container">
          <div className='custom-container'>
            <Header />
            <div className='row py-5'>
              <div className="col-12">
                <h1 className='border-bottom border-3' style={{ padding: '20px' }}>Profile Pic</h1>
                <div className='text-center my-5' style={{ 'font-size': '25px' }}>「ロゴデザイン制作」</div>
              </div>             
              <div className="col-12">
                <div className='text-center'>
                  <img src={`/design_works_img/ロゴデザイン（デザイン）.png`} alt="logo-make-img" className='border border-2 web-site-make-img'></img>
                </div>
              </div>
            </div>
            <div className='work-width mb-5 pb-5'>
              <div className='row'>
                <div className='mt-5'>
                  <h4 className='mb-3'>制作したもの</h4>
                  <div style={{ 'font-size': '18px' }}>
                    <div>「ロゴデザイン制作」を商品としたココナラ用のサムネイル</div>
                  </div>
                </div>  
                <div className='mt-5'>
                  <h4 className='mb-3'>使ったツール</h4>
                  <div style={{ 'font-size': '18px' }}>Canva</div>
                </div>  
                <div className='mt-5'>
                  <h4 className='mb-3'>工夫ポイント</h4>
                  <div>
                    <p style={{ 'font-size': '18px' }}>・ ロゴデザイン制作を商品とするデザインだったので、デザインに必要な要素を掛け合わせるようなデザイン性にしました。デザインをするうえで必要不可欠な要素を歯車のように掛け合わせることで良いデザインが生まれるという表現しました。</p>
                    <p style={{ 'font-size': '18px' }}>・ キャッチーコピーや商品の必要最低限の情報を入れるようにしました。</p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
}

export default LogoMake