import React from 'react'

const ButtonsBlock = ({ onCurPage, id, hasData }) => {
  return (
    <div className="buttons-quiz">
      <button
        onClick={() => onCurPage(id - 1)}
        type="button"
        className={id === 0 ? 'grey-btn disabled-btn' : 'grey-btn'}
      >
        Назад
      </button>
      <button
        onClick={() => onCurPage(id + 1)}
        type="button"
        className={hasData ? 'green-btn' : 'green-btn disabled-btn'}
      >
        Далее
      </button>
    </div>
  )
}

export default ButtonsBlock
