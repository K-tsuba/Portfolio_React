import React from 'react'
import Header from './Header'

const Thanks = () => {
  return (
    <div>
      <div className='header-back'></div>
      <div className="container">
        <div className='custom-container'>
          <Header />
          <div className='text-center mt-5 p-4 form-width'>
            <img src="../thanks.png" alt="thanks" width="300" height="250" />
            <h4 className='py-4'>お問い合わせありがとうございます。入力が完了いたしました。</h4>
            <h5 className=''>お問い合わせ内容については、順次対応させていただきます。</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thanks