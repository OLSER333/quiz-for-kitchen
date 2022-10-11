import React from 'react'

const UsualQuizView = () => {
  const imgArr = ['q1-1', 'q1-2', 'q1-3', 'q1-4']

  function importAll(r) {
    let images = {}
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item)
    })
    return images
  }

  const images = importAll(
    require.context('./img', false, /\.(png|jpe?g|svg)$/)
  )

  return (
    <div>
      <label className="quest">
        <div className="img-input">
          <input type="radio" name="stil" value="Классический" />
          <span className="radio">✓</span>
          {/*<Image path={`./img/${imgArr[0]}.svg`} />*/}
          <img src={images[`${imgArr[0]}.png`]} />
        </div>
        <div className="text-input">Классический</div>
      </label>
      <label className="quest">
        <div className="img-input">
          <input type="radio" name="stil" value="Модерн" />
          <span className="radio">✓</span>
          <img src="../public/img/q1-2.svg" />
        </div>
        <div className="text-input">Модерн</div>
      </label>
      <label className="quest">
        <div className="img-input">
          <input type="radio" name="stil" value="Минимализм" />
          <span className="radio">✓</span>
          <img src="../public/img/q1-3.svg" />
        </div>
        <div className="text-input">Минимализм</div>
      </label>
      <label className="quest">
        <div className="img-input">
          <input type="radio" name="stil" value="Прованс" />
          <span className="radio">✓</span>
          <img src="../public/img/q1-4.svg" />
        </div>
        <div className="text-input">Прованс</div>
      </label>
    </div>
  )
}

export default UsualQuizView
