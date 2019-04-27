import Page from './page';
class LandingPage extends Page {

    open() {
        browser.url('https://open-wc-starter-app.netlify.com/');
    }

    getTitle() {
        return browser.getTitle();
    }

    get app() {
        // my-app lives in the document's light DOM
        return browser.$('my-app');
    }

    get header() {
        // the username input is inside app-login's shadow DOM
        return this.app.shadow$('header');
    }

    get subtitle(){
        return this.app.shadow$('header h1');
    }

}

export default new LandingPage();