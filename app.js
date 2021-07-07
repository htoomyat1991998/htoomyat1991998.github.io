import { pyidaungsu } from "./js/lang.js";
import Keyboard from "./js/Keyboard.js";
import "https://cdn.jsdelivr.net/npm/vue@2.6.3/dist/vue.js";

const IGNORE_INPUT_KEYS = ['Enter', 'Backspace', 'Delete'];

const app = new Vue({
    data: {
        text: '',
        key: null,
        keyCode: null,
        keyboard: null,
        bin: [],
    },
    methods: {
        // 
    },
    watch: {
        key(input) {
            let key = this.keyboard.get(input);
            if (IGNORE_INPUT_KEYS.includes(key)) return;
            if (this.text.includes('\u200b\u1031')) {
                this.text = this.text.replace('\u200b\u1031', `${key}\u1031`);
            } else if (this.text.includes('\u200b\u103c')) {
                this.text = this.text.replace('\u200b\u103c', `${key}\u103c`);
            } else {
                let char = this.text[this.text.length - 1] || '';
                switch (input) {
                    case 's':
                        if (char == '\u1031') {
                            if (key == '\u103b') {
                                console.log(this.text.slice(0, -2));
                                this.text = this.text.slice(0, -2) + '\u103b\u103e\u1031';
                            } else {
                                this.text = this.text.slice(0, -1) + `${key}\u1031`;
                            }
                        } else {
                            this.text = this.text.slice(0, -1) + char + '\u103b';
                        }
                        break;
                    case 'S':
                        if (char == '\u1031') {
                            this.text = this.text.slice(0, -1) + '\u103e\u1031';
                        } else {
                            this.text += key;
                        }
                        break;
                    default:
                        this.text += key;
                }
            }
        }
    },
    computed: {
        // 
    },
    beforeMount() {
        this.keyboard = new Keyboard(pyidaungsu);

        window.addEventListener('keypress', (event) => {
            this.key = event.key;
            this.keyCode = event.keyCode;
        });

        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'Backspace':
                case 'Delete':
                    this.text = this.text.slice(0, -1);
                    break;
            }
        });
    }
}).$mount('.container');
