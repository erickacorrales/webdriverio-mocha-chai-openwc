import LandingPage from '../page-objects/landing.page';
import { expect } from 'chai';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        LandingPage.open();
        expect(LandingPage.getTitle()).to.contain('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});