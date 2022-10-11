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
        { label: 'Классический', imgPath: 'q-0-0' }, // либо id + idx question
        { label: 'Модерн', imgPath: 'q-0-1' },
        { label: 'Минимализм', imgPath: 'q-0-2' },
        { label: 'Прованс', imgPath: 'q-0-3' },
      ],
    },
    {
      id: 1,
      type: 'usual',
      header: 'Какой тип кухни вас интерисует?',
      questions: [
        { label: 'Прямая', imgPath: 'q-0-0' }, // либо id + idx question
        { label: 'Угловая', imgPath: 'q-0-1' },
        { label: 'С островом', imgPath: 'q-0-2' },
        { label: 'П-образная', imgPath: 'q-0-3' },
      ],
    },
    {
      id: 2,
      type: 'usual',
      header: 'Выберите материал столешницы?',
      questions: [
        { label: 'Еровцовый', imgPath: 'q-0-0' }, // либо id + idx question
        { label: 'Жидкий гранит', imgPath: 'q-0-1' },
        { label: 'ДСП', imgPath: 'q-0-2' },
        { label: 'Другое', imgPath: 'q-0-3' },
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

  return (
    <>
      <div className="quiz-block">
        <form action="" className="quiz__form">
          {quizPages.map((el) => (
            <QuizPage data={el} key={el.id} />
          ))}
        </form>
      </div>
    </>
  )
}

export default App
