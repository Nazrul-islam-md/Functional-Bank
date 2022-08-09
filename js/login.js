document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    // console.log(emailField.value);
    const passwordField = document.getElementById('user-password');
    // console.log(passwordField.value);
    if(emailField.value == 'nazrul@gmail.com' && passwordField.value == 'secret'){
        window.location.href = 'banking.html';
    }
})
