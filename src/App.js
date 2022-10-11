import React, { useState } from 'react'

import QuizPage from './components/QuizPage/QuizPage'

const App = () => {
  //types: usual, range, last
  const [quizPages] = useState([
    {
      id: 0,
      type: 'usual',
      header: 'Какой стиль кухни вам нравится?',
      questions: [
        { label: 'Классический' },
        { label: 'Модерн' },
        { label: 'Минимализм' },
        { label: 'Прованс' },
      ],
    },
    {
      id: 1,
      type: 'usual',
      header: 'Какой тип кухни вас интерисует?',
      questions: [
        { label: 'Прямая' },
        { label: 'Угловая' },
        { label: 'С островом' },
        { label: 'П-образная' },
      ],
    },
    {
      id: 2,
      type: 'usual',
      header: 'Выберите материал столешницы?',
      questions: [
        { label: 'Еровцовый' },
        { label: 'Жидкий гранит' },
        { label: 'ДСП' },
        { label: 'Другое' },
      ],
    },
    {
      id: 3,
      type: 'range',
      header: 'Укажите площадь кухни (м)',
    },
    {
      id: 4,
      type: 'results',
      header: 'Чтобы получить результат опроса, заполните форму',
    },
  ])
  const [curPage, setCurPage] = useState(0)
  const [quizResults, setQuizResults] = useState([])
  // Array(arraySize).fill(value)

  function changeCurPage(newCurPage) {
    setCurPage(newCurPage)
  }

  function changeQuizResults(id, newValue) {
    console.log('I here', id, newValue)
    const list = [...quizResults]
    list[id] = newValue
    setQuizResults(list)
  }

  return (
    <>
      <div className="quiz-block">
        <h1 onClick={() => console.log('results', quizResults)}>Norm</h1>
        <form action="" className="quiz__form">
          {quizPages.map((el) => {
            return curPage === el.id ? (
              <QuizPage
                data={el}
                key={el.id}
                curPage={curPage}
                quizResults={quizResults}
                quizPagesLength={quizPages.length}
                onCurPage={(newCurPage) => changeCurPage(newCurPage)}
                onQuizResults={(newValue) => changeQuizResults(el.id, newValue)}
              />
            ) : null
          })}
        </form>
      </div>
    </>
  )
}

export default App
