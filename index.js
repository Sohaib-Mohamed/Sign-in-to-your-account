let form = document.getElementById('form');
let names = document.getElementById('name');
let errorname = document.getElementById('errorname');
let password = document.getElementById('password');
let errorpassword = document.getElementById('errorpassword');

form.addEventListener('submit', function(event) {

    let hasError = false;

    errorname.innerHTML = "";
    errorpassword.innerHTML = "";

    if (names.value.trim() === "") {
        hasError = true;
        errorname.innerHTML = "Name is required";
    } else if (names.value.trim().length < 3) {
        hasError = true;
        errorname.innerHTML = "Name must be at least 3 characters long";
    }

    if (password.value.trim() === "") {
        hasError = true;
        errorpassword.innerHTML = "Password is required";
    }

    if (hasError) {
        event.preventDefault();
    }
});
