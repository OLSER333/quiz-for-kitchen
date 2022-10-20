//old code php
// <?php
// if (isset($_POST)) {
//   $to = "oleg.g33333@gmail.com";
//   $subject = 'Subj';
//   $data = json_decode(file_get_contents('php://input'), true);
//   $message = 'Name: '.$data['name'].' Phone: '.$data['phone'];
//   $success = mail($to, $subject, $message);
//   if ($success) {
//     echo "Success!";
//   }
//   else {
//     echo "Fail";
//   }
// }
//     ?>

// import React, { useEffect, useState } from 'react'
//
// import imgPath from '../../img/q-4.png'
// import { maskInput } from '../../utils'
//
// const ResultPageView = ({ quizResults }) => {
//   useEffect(() => {
//     maskInput()
//   }, [])
//
//   async function sendToPhpMailer(e) {
//     e.preventDefault()
//     console.log('interesting', e.target)
//     let dataForSend = [userName, userPhone, ...quizResults]
//     console.log('try toooo', dataForSend)
//     dataForSend = dataForSend.join('\n\n')
//
//     let data = {
//       service_id: 'service_xatpbap',
//       template_id: 'template_rpemdub',
//       user_id: 'fPQvBdi_HBTIv0MXD',
//       template_params: {
//         from_name: 'OLEEEG',
//         message: dataForSend,
//       },
//     }
//     // fetch('https://httpbin.org/post', {
//     //   headers: {
//     //     'Accept': 'application/json',
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify({a: 1, b: 'Textual content'})
//     // });
//
//     fetch('https://api.emailjs.com/api/v1.0/email/send', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//         .then((data) => {
//           console.log('then', data)
//         })
//         .catch((err) => {
//           console.log('err', err)
//         })
//
//     // eslint-disable-next-line no-unused-vars
//     //   const res = await fetch('mail.php', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json;charset=utf-8',
//     //     },
//     //     body: dataForSend,
//     //   })
//     //     .then((data) => {
//     //       console.log('then', data)
//     //     })
//     //     .catch((err) => {
//     //       console.log('shit happens', err)
//     //       throw err
//     //     })
//   }
//
//   const [userName, setUserName] = useState('')
//   const [userPhone, setUserPhone] = useState('+7 (___) ___-____')
//
//   return (
//       <>
//         <div className="quest3">
//           <img src={imgPath} className="img100" alt="площадь кухни" />
//           <div className="quest3-sub-text">
//             <div>До конца месяца на ваш заказ</div>
//             <div className="green-sale">скидка 10%</div>
//           </div>
//           <form
//               onSubmit={(e) => sendToPhpMailer(e)}
//               className="quiz-submit-form"
//               id="quiz-submit-form"
//               action=""
//           >
//             <div className="quest3-userdata-inps">
//               <div>
//                 <label htmlFor="#quiz-username">Введите имя</label>
//                 <input
//                     onInput={(e) => setUserName(e.target.value)}
//                     id="quiz-username"
//                     type="text"
//                     name=""
//                     className="username-inp"
//                     placeholder="Иван Иванов"
//                     required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="#userphone">Введите телефон</label>
//                 <input
//                     onInput={(e) => setUserPhone(e.target.value)}
//                     type="tel"
//                     name=""
//                     className="userphone"
//                     pattern="^\+7\s\(\d{3}\)\s\d{3}-\d{4}"
//                     required
//                     placeholder="+7 (___) ___-____"
//                     data-slots="_"
//                 />
//               </div>
//             </div>
//             <div className="buttons-quiz">
//               <button type="submit" className="green-btn">
//                 Получить
//               </button>
//             </div>
//           </form>
//         </div>
//       </>
//   )
// }
//
// export default ResultPageView
