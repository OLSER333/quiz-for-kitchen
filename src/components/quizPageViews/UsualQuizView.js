import ButtonsBlock from '../ButtonsBlock/ButtonsBlock'

const UsualQuizView = ({ data, id, quizResults, onCurPage, onQuizResults }) => {
  function importAll(r) {
    let images = {}
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item)
    })
    return images
  }

  const images = importAll(
    require.context('../../img', false, /\.(png|jpe?g|svg)$/)
  )

  return (
    <>
      <div className="questions">
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
                <img
                  className="usual-page-img"
                  src={images[`q-${id}-${idx}.png`]}
                  alt={el.label}
                />
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
    </>
  )
}

export default UsualQuizView
