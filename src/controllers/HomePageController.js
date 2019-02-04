class HomePageController {
    constructor() {}

    logout() {
        setTimeout(() => {
            location.href="file:///home/local/CONDUCTOR/arthur.antunes/Documentos/projects/example_application/src/views/login_page.html";
            console.log("Bye bye!");
        }, 2000);
    }
}