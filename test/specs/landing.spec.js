import MyAppPage from '../page-objects/myApp.page';
import { expect } from 'chai';

describe('Open WC landing page', () => {
    it('should have the right title', () => {
        MyAppPage.open();
        expect(MyAppPage.getTitle()).to.contain('my-app');
        expect(MyAppPage.myAppComponent.subTitle.getText()).to.contain('open-wc')
    });
});