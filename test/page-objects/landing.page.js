import Page from './page';
class LandingPage extends Page {

    open() {
        super.open('https://webdriver.io');
    }

}

export default new LandingPage();