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
          <div className='row justify-content-around py-5'>
            
            <div className="col-12 text-center mb-4">
              <h4 className='mt-4'>PROGRAMING LANGUAGES / FRAMEWORK</h4>
              <div className='title-border'></div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/php.png" alt="php" width="80" height="80" />
              </div>
              <div className='mt-2 language'>PHP</div>
              <div className='mt-2'>2年</div>
              <div className='float-start mt-4'>
                <div className='skill-explanation'>
                  スクールでPHPは学習し、2チャンネルの簡易版メッセージアプリや在庫管理ツールなどをPHPを使って作成しました。他にはPaizaの練習問題をPHPで解いていた時期もあり、Bレベルは問題なくできます。  
                </div>
              </div>
            </div>
           
            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/laravel.png" alt="laravel" width="80" height="80" />
              </div>
              <div className='mt-2 language'>Laravel</div>
              <div className='mt-2'>1半-2年</div>
              <div className='float-start mt-4'>
                <div className='skill-explanation'>
                  簡易版投稿ツールの作成などを通して、学習し、自分でアプリを作成するときはLaravelをバックエンドの言語として使っています。一人で問題なく成果物を作成できるレベルです。    
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/java.png" alt="java" width="120" height="100" />
              </div>
              <div className='mt-2 language'>Java</div>
              <div className='mt-2'>4か月</div>
              <div className='float-start mt-4'>
                <div className='skill-explanation'>
                  Javaカリキュラムで基本的なことを学んで、ブラックジャックや在庫管理ツール、Yahoo APIを作成できるので、基礎的なレベルは理解しているレベルです。  
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/javascript.png" alt="javascript" width="130" height="100" />
              </div>
              <div className='mt-2 language'>Javascript</div>
              <div className='mt-2'>2年半</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  スクールでJavascriptは学習し、自作アプリケーションを作成するときもJavascriptを使っており、一人で問題なく成果物を作成できるレベルです。
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/react.png" alt="react" width="80" height="80" />
              </div>
              <div className='mt-2 language'>React</div>
              <div className='mt-2'>3カ月</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  このポートフォリオはReactを使用して書いており、まだまだ基礎的な部分も学習段階のレベルです。
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/sql.png" alt="sql" width="80" height="80" />
              </div>
              <div className='mt-2 language'>SQL</div>
              <div className='mt-2'>2年</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  データベースはMysqlに触れることが多く、自分のアプリを作成するときもMysqlを使っており、問題なく使うことができるレベルです。
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/html.png" alt="html" width="80" height="80" />
              </div>
              <div className='mt-2 language'>HTML</div>
              <div className='mt-2'>2年半</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  問題なく使用できるレベルです。
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/css.png" alt="css" width="60" height="80" />
              </div>
              <div className='mt-2 language'>CSS</div>
              <div className='mt-2'>2年</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  すごい細かいデザインなどは調べれば実装でき、それ以外のある程度のデザインであれば問題なく書けるレベルです。
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/bootstrap.jpg" alt="bootstrap" width="70" height="70" />
              </div>
              <div className='mt-2 language'>Bootstrap</div>
              <div className='mt-2'>1年半</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  問題なく使用できるレベルです。
                </div>
              </div>
            </div>
          
            <div className="col-12 text-center mb-4">
              <h4 className='mt-5'>CLOUD PLAT FORM / VERSION CONTROL SYSTEM</h4>
              <div className='title-border'></div>
            </div>
            
            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/aws.png" alt="aws" width="90" height="70" />
              </div>
              <div className='mt-2 language'>AWS</div>
              <div className='mt-2'>半年</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  運用・保守のプロジェクトを通して、EC2やS3、RDS、CloudWatch、Elastic Beanstalkなどを触れて、理解しているレベルです。
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/github.png" alt="github" width="80" height="80" />
              </div>
              <div className='mt-2 language'>Github</div>
              <div className='mt-2'>2年</div>
              <div className='float-start mt-2'> 
                <div className='skill-explanation'>
                  複数人で開発を行ってGithubを使用する経験はあまりないのですが、個人でアプリを作るときには使用しているので、ある程度は使えるレベルです。
                </div>
              </div>
            </div>

            <div className="col-12 text-center mb-4">
              <h4 className='mt-5'>EDITOR</h4>
              <div className='title-border'></div>
            </div>
            
            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/cloud9.jpg" alt="cloud9" width="80" height="80" />
              </div>
              <div className='mt-2 language'>Cloud9</div>
              <div className='mt-2'>1年半</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  スクールでコードを書くときはCloud9を使用できたので、使っていたのと、その後に無料枠で1年間自己学習をするときに使っていました。
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/vscode.jpg" alt="vscode" width="80" height="80" />
              </div>
              <div className='mt-2 language'>Vitual Studio Code</div>
              <div className='mt-2'>1年</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  最近はVSCodeを使用しており、自分でコードを書くときと仕事でも使用しています。
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/eclipse.png" alt="eclipse" width="100" height="70" />
              </div>
              <div className='mt-2 language'>Eclipse</div>
              <div className='mt-2'>4カ月</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  Javaを学習するときに使用しました。
                </div>
              </div>
            </div>

            <div className="col-12 text-center mb-4">
              <h4 className='mt-5'>DESIGN</h4>
              <div className='title-border'></div>
            </div>
            
            <div className="col-lg-3 col-md-5 col-xs-10 col-10 my-4 mx-1 p-4 skill-box">
              <div className='float-end p-2'>
                <img src="../skills_img/canva.jpg" alt="canva" width="90" height="70" />
              </div>
              <div className='mt-2 language'>Canva</div>
              <div className='mt-2'>1カ月</div>
              <div className='float-start mt-2'>
                <div className='skill-explanation'>
                  プレゼンの資料を作成するときに使用したり、Canvaを使ってデザインをすることはまだ初心者レベルです。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill