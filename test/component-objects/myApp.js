import Component from './component.js'

export default class MyAppComponent extends Component {

    get header() {
        return this.host.shadow$('header');
    }

    get subTitle() {
        return this.host.shadow$('header h1');
    }


}