import React from 'react';
import CountdownTimer from './CountdownTimer'
import './App.css';
import bottomImage from '/Users/sarahribeiro/my-app/src/assets/bottom-image.svg'
import topImage from '/Users/sarahribeiro/my-app/src/assets/top-image.svg'
import rocket from './assets/rocket.svg'

const Element = () => {
  const THREE_DAYS_IN_MS = 9 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS

  return (
    <div>
      <img src={topImage} className="top-image" alt='top'></img>
      <div className="content">
        <h1>READY TO LAUNCH IN...</h1>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className="description">
          <p className="subscribe">Inscreva-se para saber mais sobre o lançamento</p>
          <button className='button'>Inscreva-se</button>
        </div>
      </div>
      <img className='rocket' src={rocket} alt='rocket'></img>
      <img className='bottom-image' src={bottomImage} alt='bottom'></img>
    </div>
  )
}

export default Element;