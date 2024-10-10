// create one form with regex validations of username , email, password . use error messages and also success messages
document.getElementById("passwordform").addEventListener("submit" , function (event) {
    let validpassword = true ;
    const paspattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const password = document.getElementById("password").value;
    const passwor_error = document.getElementById("passworderror");
if (!paspattern.test(password)) {
    passwor_error.textContent = "invalid passowrd"
     validpassword = false ;

} else {
    passwor_error.textContent = 'success'
}
    if(!validpassword){
        event.preventDefault();
    }
})
document.getElementById("passwordform").addEventListener("submit" , function (event) {
    let validemail = true ;
    const emailpattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/   ;
    const email = document.getElementById("email").value;
    const email_error = document.getElementById("email_error");
if (!emailpattern.test(email)) {
    email_error.textContent = "invalid email"
     validemail = false ;

} else {
    email_error.textContent = 'success'
}
    if(!validemail){
        event.preventDefault();
    }
})

document.getElementById("passwordform").addEventListener("submit" , function (event) {
    let validusername = true ;
    const usernamepattern = /^[a-zA-Z]{2,}\d*$/;
    const text_username = document.getElementById("text_usarname").value;
    const text_usarname_error = document.getElementById("text_usarname_error");
if (!usernamepattern.test(text_username)) {
    text_usarname_error.textContent= "invalid username"
     validusername = false ;

} else {
   text_usarname_error.textContent = 'success'
}
    if(!validusername){
        event.preventDefault();
    }
})