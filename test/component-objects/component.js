export default class Component {

    constructor(host) {
        const selectors = [];
        // Crawl back to the browser object, and cache all selectors
        while (host.elementId && host.parent) {
            selectors.push(host.selector);
            host = host.parent;
        }
        selectors.reverse();
        this.selectors_ = selectors;
    }

    get host() {
        // Beginning with the browser object, reselect each element
        return this.selectors_.reduce((element, selector) => element.$(selector), browser);
    }
}