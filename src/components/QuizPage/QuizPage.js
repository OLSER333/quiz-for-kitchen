import React from 'react'

import ProgressBar from '../ProgressBar/ProgressBar'
import UsualQuizView from '../quizPageViews/UsualQuizView'
import RangePageView from '../quizPageViews/RangePageView'
import ResultPageView from '../quizPageViews/ResultPageView'

const QuizPage = ({
  data,
  quizPagesLength,
  curPage,
  onCurPage,
  onQuizResults,
  quizResults,
}) => {
  return (
    <div className="quiz_page">
      {data.type !== 'results' && (
        <ProgressBar length={quizPagesLength} curPage={curPage} />
      )}
      <div className="header-quiz_page">{data.header}</div>
      {data.type === 'usual' && (
        <UsualQuizView
          data={data.questions}
          id={data.id}
          quizResults={quizResults}
          onCurPage={(newPage) => onCurPage(newPage)}
          onQuizResults={(newValue) => onQuizResults(newValue)}
        />
      )}
      {data.type === 'range' && (
        <RangePageView
          id={data.id}
          quizResults={quizResults}
          onCurPage={(newPage) => onCurPage(newPage)}
          onQuizResults={(newValue) => onQuizResults(newValue)}
        />
      )}
      {data.type === 'results' && <ResultPageView quizResults={quizResults} />}
    </div>
  )
}

export default QuizPage
