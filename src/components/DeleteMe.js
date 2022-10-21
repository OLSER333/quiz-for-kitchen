import { Transition } from 'react-transition-group'
import { useEffect, useState } from 'react'

function DeleteMe() {
  const duration = 3000

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

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          Im a fade Transition!
        </div>
      )}
    </Transition>
  )
}

export default DeleteMe
