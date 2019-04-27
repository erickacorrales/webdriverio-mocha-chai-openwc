import LandingPage from '../page-objects/landing.page';
import { expect } from 'chai';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        LandingPage.open();
        expect(LandingPage.getTitle()).to.contain('my-app');
        expect(LandingPage.subtitle.getText()).to.contain('open-wc')
    });
});