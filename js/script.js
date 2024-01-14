let nombre = document.getElementById('name')
let email = document.getElementById('email')
let message = document.getElementById('message')


emailjs.init('GNHhN0JFMI6szuwn-')

function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_mwu7ild', 'template_p7xtpao', e.target).then((result) => {
        console.log(result.text)
        alert("Mensaje enviado con éxito.")
        nombre.value = ""
        email.value = ""
        message.value = ""
    }, (error) => {
        console.log(error.text)
        alert("Ocurrió un error al enviar el mensaje.")
    })
}