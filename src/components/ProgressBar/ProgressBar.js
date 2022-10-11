import React from 'react'

const ProgressBar = ({ length, curPage }) => {
  function getList() {
    const list = []
    for (let i = 0; i <= length - 1; i++) {
      list.push(<span className={i <= curPage ? 'activ' : null} key={i}></span>)
    }
    return list
  }
  return <div className="progress-bar">{getList()}</div>
}

export default ProgressBar
