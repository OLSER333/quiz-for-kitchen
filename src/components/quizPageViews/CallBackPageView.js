import React from 'react'

import imgPath from '../../img/bg-callback.png'
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock'

const CallBackPageView = ({
  data,
  id,
  quizResults,
  onCurPage,
  onQuizResults,
}) => {
  return (
    <>
      <div className="quest3 quest3_callback">
        <img src={imgPath} className="img100" alt="Обратная связь" />
        <div className="questions questions__callback">
          {data.map((el, idx) => {
            return (
              <label className="questions__label" key={idx}>
                <div className="img-input">
                  <input
                    onChange={(e) => onQuizResults(e.target.value)}
                    type="radio"
                    name={`${id}`}
                    value={el.label}
                    checked={el.label === quizResults[id]}
                  />
                  <span className="radio">✓</span>
                </div>
                <div className="text-input">{el.label}</div>
              </label>
            )
          })}
        </div>
        <ButtonsBlock
          hasData={quizResults[id]}
          onCurPage={(newPage) => onCurPage(newPage)}
          id={id}
        />
      </div>
    </>
  )
}

export default CallBackPageView
