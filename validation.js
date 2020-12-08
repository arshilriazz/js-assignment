const email = document.getElementById("email")
const error = document.getElementById("error")
const form = document.getElementById("form")

const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.((com)|(org)|(gov)|(co\.[a-z]+))$/

checkEmail = (e) => {
    message = []
    if(regexEmail.test(email.value)) {
        console.log(email.value)
        e.preventDefault()
    }
    if(!regexEmail.test(email.value)) {
        message.push('not a proper email')
    }
    if(message.length > 0) {
        error.innerHTML = message
        error.style.color = 'red'
        error.style.fontWeight = 900
        e.preventDefault()
    }
}

checkEmpty = (e) => {
    message = []
    if(email.value == 0) {
        message.push('please fill something in the email')
    }
    if(message.length > 0) {
        error.innerHTML = message
        error.style.color = 'red'
        error.style.fontWeight = 900
        e.preventDefault()
    }
}

form.addEventListener("submit", checkEmail)
form.addEventListener("submit", checkEmpty)