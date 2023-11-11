import Header from './Header';
import '../App.css';

const TwitterHeader = () => {
    return (
      <div>
        <div className='header-back'></div>
        <div className="container">
          <div className='custom-container'>
            <Header />
            <div className='row py-5'>
              <div className="col-12">
                <h1 className='border-bottom border-3' style={{ padding: '20px' }}>Twitter Header Design</h1>
                <div className='text-center my-5' style={{ 'font-size': '25px' }}>「Twitter Header Design」</div>
              </div>             
              <div className="col-12">
                <div className='text-center'>
                  <img src={`/design_works_img/Twitter Account Header（デザイン）.png`} alt="twitter_header_img" className='border border-2 twitter-header-img'></img>
                </div>
              </div>
            </div>
            <div className='work-width mb-5 pb-5'>
              <div className='row'>
                <div className='mt-5'>
                  <h4 className='mb-3'>制作したもの</h4>
                  <div style={{ 'font-size': '18px' }}>
                    <div>・ Twitterアカウントのヘッダー画像</div>
                    <div>・ Webデザイナーとして案件を獲得するためのTwitter</div>
                  </div>
                </div>  
                <div className='mt-5'>
                  <h4 className='mb-3'>使ったツール</h4>
                  <div style={{ 'font-size': '18px' }}>Canva</div>
                </div>  
                <div className='mt-5'>
                  <h4 className='mb-3'>工夫ポイント</h4>
                  <div>
                    <p style={{ 'font-size': '18px' }}>・ Webデザイナーとして案件を獲得するときに、デザインだけでなく、コーディングもできるということをアピールしたいと思いました。そのためエンジニアとデザイナーの文字を入れて相手にも分かるようにしました。</p>
                    <p style={{ 'font-size': '18px' }}>・ 文字でエンジニアも良いと思ったのですが、デザインの部分にもエンジニアの要素を入れたいと思い、Webデザインの仕事をするときに必要な要素をタグで囲むようなデザインにしました。</p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
}

export default TwitterHeader