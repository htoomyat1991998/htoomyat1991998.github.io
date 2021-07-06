export default class Keyboard {
    constructor(layout) {
        this.layout = layout;
    }

    get(key) {
        return this.layout[key] || key;
    }
}