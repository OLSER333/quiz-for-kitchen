import React, { useEffect, useState } from 'react'

import imgPath from '../../img/bg-result.png'
import { maskInput } from '../../utils'

const ResultPageView = ({ quizResults }) => {
  useEffect(() => {
    maskInput()
  }, [])

  async function sendToPhpMailer(e) {
    e.preventDefault()
    // console.log('interesting', e.target)
    // let dataForSend = [...quizResults]
    // console.log('try toooo', dataForSend)
    // dataForSend = dataForSend.join('\n\n')

    // const data = JSON.stringify({ name: 'Alyosha', phone: '+71235556677' })
    // console.log('jsoned DATA', data)
    const data = new FormData()
    data.set('name', userName)
    data.set('phone', userPhone)
    // слайды с нуля
    quizResults.forEach((el, idx) => {
      data.set(`slide${idx}`, el)
      console.log(data.get(`slide${idx}`))
    })
    console.log('what is data?', data.get('name'), data.get('phone'))

    //
    // formData
    fetch('/mail.php', {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          console.log('all ok', response)
        }
      })
      .catch((err) => {
        console.log('err', err)
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
        <p className="policy-txt">
          C политикой конфиденцеальности вы можете ознакомиться, перейдя по
          <a className="green-txt">&#32;ссылке</a>
        </p>
      </div>
    </>
  )
}

export default ResultPageView
