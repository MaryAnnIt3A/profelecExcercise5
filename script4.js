let password;

do {
    password = prompt("Enter password: ");
    
    if (password.length < 8) {
        console.log("Password must be at least 8 characters long. Please try again.");
    }
} while (password.length < 8);

if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    console.log("Strong Password");
} else if (password.match(/^(?=.*[a-z])|(?=.*[A-Z])/)) {
    console.log("Weak Password");
} else {
    console.log("Very Weak Password");
}
