import MyAppComponent from '../component-objects/myApp.js'
class MyAppPage  {

    open() {
        browser.url('https://open-wc-starter-app.netlify.com/');
    }

    getTitle() {
        return browser.getTitle();
    }

    get app() {
        return browser.$('my-app');
    }

    get myAppComponent() {
        // return a new instance of our login component object
        return new MyAppComponent(this.app);
    }

}

export default new MyAppPage();