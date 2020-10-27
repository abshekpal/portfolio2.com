

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('message').addEventListener('blur', validateMessage);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)) {
        document.getElementById('namefeedback').innerHTML = "Name must be between 2 and 10 characters";
        name.classList.add('wrong');
        name.classList.remove('right');
    }
    else {
        document.getElementById('namefeedback').innerHTML = "";
        name.classList.remove('wrong');
        name.classList.add('right');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)) {
        document.getElementById('emailfeedback').innerHTML = "Enter valid email";
        email.classList.add('wrong');
        email.classList.remove('right');
    }
    else {
        document.getElementById('emailfeedback').innerHTML = "";
        email.classList.remove('wrong');
        email.classList.add('right');
    }
}

function validateMessage() {
    const message = document.getElementById('message');
    const re = /^[a-zA-Z0-9 ]{2,300}$/;

    if(!re.test(message.value)) {
        document.getElementById('msgfeedback').innerHTML = "Enter valid message";
        message.classList.add('wrong');
        message.classList.remove('right');
    }
    else {
        document.getElementById('msgfeedback').innerHTML = "";
        message.classList.remove('wrong');
        message.classList.add('right');
    }
}
