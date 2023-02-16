//Step-1: add click handler
document.getElementById('btn-submit').addEventListener('click', function(){
    //Step-2: get email address
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //Step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    // Step-4: Varify password
    if(email === 'a@baap.com' && password ==="secret"){
        window.location.href = 'bank.html';
        // console.log("valid");
    }else{
        alert("Invalid user");
    }

})