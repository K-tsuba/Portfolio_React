import React, { useState } from 'react'
import '../App.css';
import { Modal } from 'react-bootstrap';

const Profile = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row py-5'>
      
      <div className="col-12">
          <h1 className=''>PROFILE</h1>
      </div>

      <div className="col-lg-4 col-md-12 col-xs-12 col-12 pt-5">
        <div className='d-flex justify-content-center align-items-center h-100'>
          <img src="./logo192.png" alt="プロフィール写真" onClick={handleShow} />
        </div>
      </div>

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='text-center'>
          <img src="/skills_img/aws.png" alt="プロフィール写真" style={{ width: '80%' }} />
        </Modal.Body>
      </Modal>

      <div className="col-lg-8 col-md-12 col-xs-12 col-12 pt-5">
        <p>こんにちは。椿康平と申します。</p>
        <div>大学在学中にオンラインプログラミングスクール「CodeCamp」を卒業。</div>
        <p>スクールではWeb制作のコースを受講し、フロントエンド言語はJavascriptを学習し、バックエンド言語はphpを学習しました。</p>
        <p>その後は、フレームワーク言語の学習やアプリの作成などを通して、プログラミングが好きになり、現在はエンジニアとして働いています。</p>
        <p>資格は、TOEIC625点を保持。</p>
        <p>工学院大学建築学部卒業。趣味は、海外ドラマや映画を見ることが好き。最近はボルタリングにはまっています。</p>
        <div>普段からコードを書いていることからロジカルに考えることには長けていると思うので、問題解決能力は高いと思います。コーディングやデザインスキルを用いて、問題を一緒に解決することができるのが私の強みです。</div>
      </div>
    </div>
  )
}

export default Profile