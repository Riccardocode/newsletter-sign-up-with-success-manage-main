const emailPatterns = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
const mainContainer = document.getElementById("main-container");
const feedbackMessage= document.getElementById("main-container-feedback-message");
const email = document.getElementById("email");
const invalidEmailText = document.getElementById("email-invalid-text");
const emailAddress = document.getElementById("email-address");

const handleRegistration = () =>{
    
    if (emailPatterns.test(email.value)){
        mainContainer.classList.add("hide-content");
        feedbackMessage.classList.remove("hide-content");
        emailAddress.textContent = email.value;

    }
    else{
        console.log("errore mio");
        invalidEmailText.classList.remove("hide-content");
        email.classList.add("invalid-email");
    }
}

const dismissRegistration = () =>{
    email.value='';
    email.classList.remove("invalid-email");
    feedbackMessage.classList.add("hide-content");
    mainContainer.classList.remove("hide-content");
    invalidEmailText.classList.add("hide-content");
}
