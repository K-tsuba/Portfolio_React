import React, { useState } from 'react'
import '../App.css';
import { Modal } from 'react-bootstrap';

const Profile = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='row py-5'>
        <div className="col-12 text-center mb-3">
          <h3 className='mt-4'>PROFILE</h3>
          <div className='title-border'></div>
        </div>

        <div className="col-lg-12 col-md-12 col-xs-12 col-12 pt-5">
          <div className='d-flex justify-content-center align-items-center h-100'>
            <img src="/timeme_img/timeme_6.png" alt="プロフィール写真" onClick={handleShow} className="rounded-circle" style={{ width: '250px', height: '250px' }} />
          </div>
        </div>

        <Modal size="lg" show={show} onHide={handleClose} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className='text-center'>
            <img src="/timeme_img/timeme_6.png" alt="プロフィール写真" className="rounded-circle" style={{ width: '350px', height: '350px' }} />
          </Modal.Body>
        </Modal>
      </div>

      <div className='work-width py-5'>
        <div className='row'>
          <div className="col-lg-12 col-md-12 col-xs-12 col-12">
            <p>こんにちは。椿康平と申します。1999年6月22日生まれ。</p>
            <div>大学在学中にオンラインプログラミングスクール「CodeCamp」を卒業。</div>
            <p>スクールではWeb制作のコースを受講し、フロントエンド言語はJavascriptを学習し、バックエンド言語はphpを学習しました。</p>
            <p>その後は、フレームワーク言語の学習やアプリの作成などを通して、プログラミングが好きになり、現在はエンジニアとして働いています。</p>
            <p>資格は、TOEIC625点を保持。</p>
            <p>工学院大学建築学部卒業。趣味は、海外ドラマや映画を見ることが好き。最近はボルタリングにはまっています。</p>
            <div>普段からコードを書いていることからロジカルに考えることには長けていると思うので、問題解決能力は高いと思います。コーディングやデザインスキルを用いて、問題を一緒に解決することができるのが私の強みです。</div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center mb-3">
        <h3 className='mt-4'>EDUCATION / WORK HISTORY</h3>
        <div className='title-border'></div>
      </div>
      <div className='work-width py-5'>
        <table className="table">
          <tr>
            <td className='py-2'>2020 / 2 - 2020 / 7</td>
            <td>オンラインプログラミングスクール「CodeCamp」</td>
          </tr>
          <tr>
            <td className='py-2'>2019 / 4 - 2023 / 3</td>
            <td>工学院大学建築学部</td>
          </tr>
          <tr>
            <td className='py-2'>2023 / 4 - </td>
            <td>グルーヴ・ギア株式会社</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Profile