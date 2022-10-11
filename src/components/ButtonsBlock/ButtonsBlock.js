import React from 'react'

const ButtonsBlock = ({ onCurPage, id }) => {
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
        className="green-btn"
      >
        Далее
      </button>
    </div>
  )
}

export default ButtonsBlock
