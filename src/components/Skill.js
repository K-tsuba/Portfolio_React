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
            <div className="col-12">
                <h1 className=''>SKILLS</h1>
            </div>
            
            <div className="col-12 text-center mb-3">
              <h4 className='mt-4'>プログラミング言語 / フレームワーク</h4>
              <div className='skill-border'></div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/php.png" alt="php" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>PHP</div>
              <div className='my-2'>2年</div>
              <div className='my-2'>スクールでPHPは学習し、2チャンネルの簡易版メッセージアプリや在庫管理ツールなどをPHPを使って作成しました。他にはPaizaの練習問題をPHPで解いていた時期もあり、Bレベルは問題なくできます。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/laravel.png" alt="laravel" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Laravel</div>
              <div className='my-2'>1半-2年</div>
              <div className='my-2'>簡易版投稿ツールの作成などを通して、学習し、自分でアプリを作成するときはLaravelをバックエンドの言語として使っています。一人で問題なく成果物を作成できるレベルです。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/java.png" alt="java" width="150" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Java</div>
              <div className='my-2'>4か月</div>
              <div className='my-2'>Javaカリキュラムで基本的なことを学んで、ブラックジャックや在庫管理ツール、Yahoo APIを作成できるので、基礎的なレベルは理解しているレベルです。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/javascript.png" alt="javascript" width="170" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Javascript</div>
              <div className='my-2'>2年半</div>
              <div className='my-2'>スクールでJavascriptは学習し、自作アプリケーションを作成するときもJavascriptを使っており、一人で問題なく成果物を作成できるレベルです。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/react.png" alt="react" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>React</div>
              <div className='my-2'>3カ月</div>
              <div className='my-2'>このポートフォリオはReactを使用して書いており、まだまだ基礎的な部分も学習段階のレベルです。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/sql.png" alt="sql" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>SQL</div>
              <div className='my-2'>2年</div>
              <div className='my-2'>データベースはMysqlに触れることが多く、自分のアプリを作成するときもMysqlを使っており、問題なく使うことができるレベルです。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/html.png" alt="html" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>HTML</div>
              <div className='my-2'>2年半</div>
              <div className='my-2'>問題なく使用できるレベルです。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/css.png" alt="css" width="80" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>CSS</div>
              <div className='my-2'>2年</div>
              <div className='my-2'>すごい細かいデザインなどは調べれば実装でき、それ以外のある程度のデザインであれば問題なく書けるレベルです。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/bootstrap.jpg" alt="bootstrap" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Bootstrap</div>
              <div className='my-2'>1年半</div>
              <div className='my-2'>問題なく使用できるレベルです。</div>
            </div>
          
            <div className="col-12 text-center mb-3">
              <h4 className='mt-5'>クラウドプラットフォーム / バージョン管理</h4>
              <div className='skill-border'></div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/aws.png" alt="aws" width="140" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>AWS</div>
              <div className='my-2'>半年</div>
              <div className='my-2'>運用・保守のプロジェクトを通して、EC2やS3、RDS、CloudWatch、Elastic Beanstalkなどを触れて、理解しているレベルです。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/github.png" alt="github" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Github</div>
              <div className='my-2'>2年</div>
              <div className='my-2'>複数人で開発を行ってGithubを使用する経験はあまりないのですが、個人でアプリを作るときには使用しているので、ある程度は使えるレベルです。</div>
            </div>

            <div className="col-12 text-center mb-3">
              <h4 className='mt-5'>エディタ</h4>
              <div className='skill-border'></div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/cloud9.jpg" alt="cloud9" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Cloud9</div>
              <div className='my-2'>1年半</div>
              <div className='my-2'>スクールでコードを書くときはCloud9を使用できたので、使っていたのと、その後に無料枠で1年間自己学習をするときに使っていました。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/vscode.jpg" alt="vscode" width="100" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Vitual Studio Code</div>
              <div className='my-2'>1年</div>
              <div className='my-2'>最近はVSCodeを使用しており、自分でコードを書くときと仕事でも使用しています。</div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/eclipse.png" alt="eclipse" width="120" height="80" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Eclipse</div>
              <div className='my-2'>4カ月</div>
              <div className='my-2'>Javaを学習するときに使用しました。</div>
            </div>
          
            <div className="col-12 text-center mb-3">
              <h4 className='mt-5'>デザイン</h4>
              <div className='skill-border'></div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='d-flex justify-content-center align-items-center h-100'>
                <img src="../skills_img/canva.jpg" alt="canva" width="130" height="100" />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 col-12 my-3">
              <div className='my-2'>Canva</div>
              <div className='my-2'>1カ月</div>
              <div className='my-2'>プレゼンの資料を作成するときに使用したり、Canvaを使ってデザインをすることはまだ初心者レベルです。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill