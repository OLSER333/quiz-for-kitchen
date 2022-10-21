import React, { useEffect, useState } from 'react'

import imgPath from '../../img/bg-result.png'
import { maskInput } from '../../utils'

const ResultPageView = ({ quizResults }) => {
  useEffect(() => {
    maskInput()
  }, [])

  const [sent, setSent] = useState(false)
  const [hasError, setHasError] = useState(false)

  async function sendToPhpMailer(e) {
    e.preventDefault()

    const data = new FormData()
    data.set('name', userName)
    data.set('phone', userPhone)
    // слайды с нуля
    const forPhp = ['style', 'type', 'countertop', 'facade', 'size', 'callback']
    for (let i = 0; i < forPhp.length; i++) {
      data.set(forPhp[i], quizResults[i])
    }
    fetch('/mail.php', {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          setSent(true)
        } else {
          setHasError(true)
        }
      })
      .catch((err) => {
        setHasError(true)
        console.log(err)
      })
  }

  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('+7 (___) ___-____')

  return (
    <>
      <div className="quest3 quest3_result">
        <img src={imgPath} className="img100" alt="площадь кухни" />
        <div className="quest3-sub-text">
          <p>
            При заказе кухни
            <span className="green-underline">&#32;подсветка в подарок</span>
          </p>
        </div>
        {!sent && !hasError && (
          <form
            onSubmit={(e) => sendToPhpMailer(e)}
            className="quiz-submit-form"
            id="quiz-submit-form"
            action="/php.mail"
          >
            <div className="quest3-userdata-inps">
              <div>
                <label htmlFor="#quiz-username">Введите имя</label>
                <input
                  onInput={(e) => setUserName(e.target.value)}
                  id="quiz-username"
                  type="text"
                  name=""
                  className="username-inp"
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div>
                <label htmlFor="#userphone">Введите телефон</label>
                <input
                  onInput={(e) => setUserPhone(e.target.value)}
                  type="tel"
                  name=""
                  className="userphone"
                  pattern="^\+7\s\(\d{3}\)\s\d{3}-\d{4}"
                  required
                  placeholder="+7 (___) ___-____"
                  data-slots="_"
                />
              </div>
            </div>
            <div className="buttons-quiz buttons-quiz_result">
              <button type="submit" className="green-btn">
                Отправить
              </button>
            </div>
          </form>
        )}

        {sent && (
          <div>
            <h1>Спасибо, мы свяжемся с вами!</h1>
          </div>
        )}
        {hasError && (
          <div>
            <h1>Что-то пошло не так, попробуйте заново!</h1>
          </div>
        )}
        <div className="wrap-txt">
          <p className="policy-txt">
            C политикой конфиденцеальности вы можете ознакомиться, перейдя по
          </p>
          <a
            href="#"
            style={{ transform: ' translateX(5px)' }}
            className="green-txt"
          >
            ссылке
          </a>
        </div>
      </div>
    </>
  )
}

export default ResultPageView
