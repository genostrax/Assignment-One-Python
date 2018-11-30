function validateForm() {
    var name = document.forms["registerForm"]["name"].value;
    var email = document.forms["registerForm"]["email"].value;
    var tel = document.forms["registerForm"]["tel"].value; 
    
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (email.length < 5) {
        alert("Email character length should be greater than 5");
        return false;
    }
    else if ((tel.length < 10) || (tel.length > 10)) {
        alert("Phone number should be 10");
        return false;
    }
    else {
        alert("Registration Successful");
        return true;
    }
}
