class LoginPageController {
    constructor() {
        this._userEmail = document.querySelector("#email-field");
        this._userPassword = document.querySelector("#email-field");
    }

    get email() {
        return this._userEmail;
    }

    get password() {
        return this._userPassword;
    }

    login() {
        if(this._userEmail.value === "" || this._userPassword.value === "") {
            alert("Os campos de e-mail e senha devem estar preenchidos!")
        } else {
            setTimeout(() => {
                location.href="file:///home/local/CONDUCTOR/arthur.antunes/Documentos/projects/example_application/src/views/home_page.html";
                console.log("Welcome!")
            }, 5000);
        }
    }
}