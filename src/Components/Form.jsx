import React from 'react'
//importar emailjs del modulo
import emailjs from "@emailjs/browser"
const Form = () => {

//inicializar emailjs con la public key
emailjs.init("0prUY5C31-o_Df6RE")

// destinatario si es uno solo
const emailTo = "mica.spadavecchia@gmail.com";

const handleSubmit = (evt) => {
    evt.preventDefault()

    //primer parametro la key del servicio(gmail), segundo parametro la key del mail template, tercer parametro cuerpo del mail
    emailjs.send('service_1ix1fkb', 'template_3z4oowm', {
        to: emailTo, // Dirección de correo electrónico de destino
        from_name: document.getElementById("contact-form")['user_name'].value,
        message_html: document.getElementById("contact-form")['message'].value,
      })
        .then(function() {
          console.log('Second email sent successfully to ' + emailTo);
        }, function(error) {
          console.log('Failed to send the second email...', error);
        });
}


  return (
    <form id="contact-form" onSubmit={handleSubmit} value={Math.random() * 100000 | 0}>
    <input type="hidden" name="contact_number"/>
    <label>Name</label>
    <input type="text" name="user_name"/>
    <label>Email</label>
    <input type="email" name="user_email"/>
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send"/>
</form>
  )
}

export default Form