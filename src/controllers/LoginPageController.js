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
                let pathToTheViewsFolder = location.pathname.split("/").slice(0,-1).join("/");

                location.href="file://" + pathToTheViewsFolder + "/home_page.html";
            }, 5000);
        }
    }
}