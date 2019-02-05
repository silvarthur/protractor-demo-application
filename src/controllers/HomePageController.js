class HomePageController {
    constructor() {}

    logout() {
        setTimeout(() => {
            let pathToTheViewsFolder = location.pathname.split("/").slice(0,-1).join("/");

            location.href="file://" + pathToTheViewsFolder + "/login_page.html";
        }, 2000);
    }
}