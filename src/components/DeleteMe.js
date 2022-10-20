// import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser'
//
// const DeleteMe = () => {
//   const form = useRef()
//
//   const sendEmail = (e) => {
//     e.preventDefault()
//
//     // eslint-disable-next-line import/no-named-as-default-member
//     emailjs
//       .sendForm(
//         'service_xatpbap',
//         'template_rpemdub',
//         form.current,
//         'fPQvBdi_HBTIv0MXD'
//       )
//       .then(
//         (result) => {
//           console.log(result.text)
//         },
//         (error) => {
//           console.log(error.text)
//         }
//       )
//   }
//
//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   )
// }
//
// export default DeleteMe
