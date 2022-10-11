import React from 'react'

import ProgressBar from '../ProgressBar/ProgressBar'
// import ButtonsBlock from '../ButtonsBlock/ButtonsBlock'

const QuizPage = ({ data }) => {
  return (
    <div className="quiz_page">
      {data.type !== 'results' && <ProgressBar />}
      <div className="header-quiz_page">{data.header}</div>
      {/*<div className="questions"></div>*/}
      {/*<ButtonsBlock />*/}
    </div>
  )
}

export default QuizPage
