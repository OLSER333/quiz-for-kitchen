import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'

import ProgressBar from '../ProgressBar/ProgressBar'
import UsualQuizView from '../quizPageViews/UsualQuizView'
import RangePageView from '../quizPageViews/RangePageView'
import ResultPageView from '../quizPageViews/ResultPageView'
import CallBackPageView from '../quizPageViews/CallBackPageView'

const QuizPage = ({
  data,
  quizPagesLength,
  curPage,
  onCurPage,
  onQuizResults,
  quizResults,
}) => {
  const duration = 300

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  useEffect(() => {
    setInProp(true)
  }, [])

  const [inProp, setInProp] = useState(false)

  const nodeRef = React.useRef(null)

  return (
    <>
      <Transition in={inProp} timeout={duration} nodeRef={nodeRef}>
        {(state) => (
          <div
            ref={nodeRef}
            className={'quiz_page '}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
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
            {data.type === 'callback' && (
              <CallBackPageView
                data={data.questions}
                id={data.id}
                quizResults={quizResults}
                onCurPage={(newPage) => onCurPage(newPage)}
                onQuizResults={(newValue) => onQuizResults(newValue)}
              />
            )}
            {data.type === 'results' && (
              <ResultPageView quizResults={quizResults} />
            )}
          </div>
        )}
      </Transition>
    </>
  )
}

export default QuizPage
