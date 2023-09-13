import React from 'react'
import Profile from './Profile'
import Header from './Header'
import '../App.css';

const HomePage = () => {
  return (
    <div>
      <div className='header-back'></div>
      <div className="container">
        <div className='custom-container'>
          <Header />
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default HomePage