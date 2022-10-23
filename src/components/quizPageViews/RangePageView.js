import React, { useEffect, useState } from 'react'

import imgPath from '../../img/q-3.png'
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock'
const maxRange = 1000

const RangePageView = ({ id, onCurPage, quizResults, onQuizResults }) => {
  const [needMeasurer, setNeedMeasurer] = useState(false)
  const [range, setRange] = useState('')

  let labelForResult = 'Нужен замерщик для кухонного гарнитура'

  useEffect(() => {
    if (quizResults[id] === labelForResult) {
      setNeedMeasurer(quizResults[id] || false)
    }
    setRange(quizResults[id] || '')
  }, [])

  const validInp = (val, type) => {
    switch (type) {
      case 'range':
        setNeedMeasurer(false)
        // eslint-disable-next-line no-case-declarations
        let validVal = val.replace(/\D/, '')
        if (validVal > maxRange) {
          setRange(String(maxRange))
          onQuizResults(String(maxRange))
        } else if (validVal !== quizResults[id]) {
          setRange(validVal)
          onQuizResults(validVal)
        } else if (validVal !== val) {
          setRange(validVal)
          onQuizResults(validVal)
        }
        break
      case 'radio':
        setRange('')
        if (val) {
          setNeedMeasurer(true)
          onQuizResults(labelForResult)
        } else {
          setNeedMeasurer(false)
          onQuizResults('')
        }
        break
    }
  }
  return (
    <>
      <div className="quest3">
        <img src={imgPath} className="img100" alt="площадь кухни" />
        <input
          className="range-count"
          type="number"
          min={0}
          max={maxRange}
          name="ploshad"
          placeholder="метры"
          onChange={(e) => validInp(e.target.value, 'range')}
          value={range}
        />
        <input
          onChange={(e) => validInp(e.target.value, 'range')}
          type="range"
          className="inp-range"
          name="range1"
          min={0}
          max={maxRange}
          step="1"
          value={range}
        />
        <label className="range-label">
          <div className="img-input img-input_range">
            <input
              onChange={(e) => validInp(e.target.checked, 'radio')}
              type="checkbox"
              name="range-check"
              checked={needMeasurer}
            />
            <span className="radio radio-range">✓</span>
          </div>
          Не знаю, мне нужен замерщик
        </label>
      </div>
      <ButtonsBlock
        hasData={quizResults[id]}
        onCurPage={(newPage) => onCurPage(newPage)}
        id={id}
      />
    </>
  )
}

export default RangePageView
