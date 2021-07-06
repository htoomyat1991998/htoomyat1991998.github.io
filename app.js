import { pyidaungsu } from "./js/lang.js";
import Keyboard from "./js/keyboard.js";
import "https://cdn.jsdelivr.net/npm/vue@2.6.3/dist/vue.js";

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
        key(x) {
            let key = this.keyboard.get(x);
            if (this.text.includes('\u200b\u1031')) {
                this.text = this.text.replace('\u200b\u1031', `${key}\u1031`);
            } else if (this.text.includes('\u200b\u103c')) {
                this.text = this.text.replace('\u200b\u103c', `${key}\u103c`);
            } else {
                switch (x) {
                    case 's':
                        let a = this.text[this.text.length - 1];

                        if (a == '\u1031') {
                            this.text = this.text.slice(0, -1) + '\u103b\u1031';
                            console.log(1);
                        } else {
                            this.text = this.text.slice(0, -1) + a + '\u103b';
                            console.log(2);
                        }
                        break;
                    default:
                        this.text += key;
                }
            }
            // this.bin = this.text.split('').map(n => ({
            //     char: n,
            //     code: `\\u${n.charCodeAt().toString(16)}`,
            // })); 
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
