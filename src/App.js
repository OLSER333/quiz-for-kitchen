import React, { useState } from 'react'

import QuizPage from './components/QuizPage/QuizPage'
// import DeleteMe from './components/DeleteMe'

const App = () => {
  const [quizPages] = useState([
    {
      id: 0,
      type: 'usual',
      header: 'Какой стиль кухни вам нравится?',
      questions: [
        { label: 'Классика' },
        { label: 'Современная классика' },
        { label: 'Минимализм' },
        { label: 'Другое или еще не знаю' },
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
      header: 'Выберите материал столешницы',
      questions: [
        { label: 'Натуральный камень' },
        { label: 'Искусственный камень' },
        { label: 'Пластик' },
        { label: 'Другое или еще не знаю' },
      ],
    },
    {
      id: 3,
      type: 'usual',
      header: 'Выберите материал фасадов',
      questions: [
        { label: 'МДФ эмаль' },
        { label: 'ЛДСП' },
        { label: 'Пластик' },
        { label: 'МДФ пленка' },
      ],
    },
    {
      id: 4,
      type: 'range',
      header: 'Укажите примерную длину кухонного гарнитура (м)',
    },

    {
      id: 5,
      type: 'usual',
      header: 'Как с вами связаться?',
      questions: [
        { label: 'WhatsApp' },
        { label: 'Telegram' },
        { label: 'По телефону' },
      ],
    },

    {
      id: 6,
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
        {/*<DeleteMe />*/}
        <h1 onClick={() => console.log('results', quizResults)}>Norm</h1>
        <div className="quiz__form">
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
        </div>
      </div>
    </>
  )
}

export default App
