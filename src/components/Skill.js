import React from 'react'
import Header from './Header'
import '../App.css';

const Skill = () => {
  return (
    <div>
      <div className='header-back'></div>
      <div className="container">
        <div className='custom-container'>
          <Header />
          <div className='row py-5'>
            
            <div className="col-12 text-center mb-4">
              <h4 className='mt-4'>プログラミング言語 / フレームワーク</h4>
              <div className='title-border'></div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/php.png" alt="php" width="80" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>PHP</div>
              <div className=''>2年</div>
              <div className=''>スクールでPHPは学習し、2チャンネルの簡易版メッセージアプリや在庫管理ツールなどをPHPを使って作成しました。他にはPaizaの練習問題をPHPで解いていた時期もあり、Bレベルは問題なくできます。</div>
            </div>
            
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/laravel.png" alt="laravel" width="80" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Laravel</div>
              <div className=''>1半-2年</div>
              <div className=''>簡易版投稿ツールの作成などを通して、学習し、自分でアプリを作成するときはLaravelをバックエンドの言語として使っています。一人で問題なく成果物を作成できるレベルです。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/java.png" alt="java" width="120" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Java</div>
              <div className=''>4か月</div>
              <div className=''>Javaカリキュラムで基本的なことを学んで、ブラックジャックや在庫管理ツール、Yahoo APIを作成できるので、基礎的なレベルは理解しているレベルです。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/javascript.png" alt="javascript" width="150" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Javascript</div>
              <div className=''>2年半</div>
              <div className=''>スクールでJavascriptは学習し、自作アプリケーションを作成するときもJavascriptを使っており、一人で問題なく成果物を作成できるレベルです。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/react.png" alt="react" width="80" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>React</div>
              <div className=''>3カ月</div>
              <div className=''>このポートフォリオはReactを使用して書いており、まだまだ基礎的な部分も学習段階のレベルです。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/sql.png" alt="sql" width="80" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>SQL</div>
              <div className=''>2年</div>
              <div className=''>データベースはMysqlに触れることが多く、自分のアプリを作成するときもMysqlを使っており、問題なく使うことができるレベルです。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/html.png" alt="html" width="80" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>HTML</div>
              <div className=''>2年半</div>
              <div className=''>問題なく使用できるレベルです。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/css.png" alt="css" width="60" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>CSS</div>
              <div className=''>2年</div>
              <div className=''>すごい細かいデザインなどは調べれば実装でき、それ以外のある程度のデザインであれば問題なく書けるレベルです。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/bootstrap.jpg" alt="bootstrap" width="70" height="70" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Bootstrap</div>
              <div className=''>1年半</div>
              <div className=''>問題なく使用できるレベルです。</div>
            </div>
          
            <div className="col-12 text-center mb-4">
              <h4 className='mt-5'>クラウドプラットフォーム / バージョン管理</h4>
              <div className='title-border'></div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/aws.png" alt="aws" width="90" height="70" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>AWS</div>
              <div className=''>半年</div>
              <div className=''>運用・保守のプロジェクトを通して、EC2やS3、RDS、CloudWatch、Elastic Beanstalkなどを触れて、理解しているレベルです。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/github.png" alt="github" width="80" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Github</div>
              <div className=''>2年</div>
              <div className=''>複数人で開発を行ってGithubを使用する経験はあまりないのですが、個人でアプリを作るときには使用しているので、ある程度は使えるレベルです。</div>
            </div>

            <div className="col-12 text-center mb-4">
              <h4 className='mt-5'>エディタ</h4>
              <div className='title-border'></div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/cloud9.jpg" alt="cloud9" width="80" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Cloud9</div>
              <div className=''>1年半</div>
              <div className=''>スクールでコードを書くときはCloud9を使用できたので、使っていたのと、その後に無料枠で1年間自己学習をするときに使っていました。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/vscode.jpg" alt="vscode" width="80" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Vitual Studio Code</div>
              <div className=''>1年</div>
              <div className=''>最近はVSCodeを使用しており、自分でコードを書くときと仕事でも使用しています。</div>
            </div>

            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/eclipse.png" alt="eclipse" width="100" height="70" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Eclipse</div>
              <div className=''>4カ月</div>
              <div className=''>Javaを学習するときに使用しました。</div>
            </div>

            <div className="col-12 text-center mb-4">
              <h4 className='mt-5'>デザイン</h4>
              <div className='title-border'></div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/canva.jpg" alt="canva" width="90" height="70" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-4 skill-box">
              <div className='language'>Canva</div>
              <div className=''>1カ月</div>
              <div className=''>プレゼンの資料を作成するときに使用したり、Canvaを使ってデザインをすることはまだ初心者レベルです。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill