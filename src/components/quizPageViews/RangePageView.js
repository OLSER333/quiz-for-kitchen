import React from 'react'

import ButtonsBlock from '../ButtonsBlock/ButtonsBlock'

const RangePageView = ({ id, onCurPage }) => {
  return (
    <>
      <div className="quest4">
        <img src="/img/q4.svg" className="img100" />
        <input type="number" name="ploshad" id="" />
        {/*максимальный Range 200*/}
      </div>
      <ButtonsBlock id={id} onCurPage={(newPage) => onCurPage(newPage)} />
    </>
  )
}

export default RangePageView
