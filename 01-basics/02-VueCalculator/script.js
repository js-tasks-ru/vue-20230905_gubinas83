import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = defineComponent({
  data() {
    return {
      firstOperand: null,
      secondOperand: null,
      operation: null,
    };
  },
  computed: {
    result() {
      if (!this.firstOperand || !this.secondOperand || !this.operation) {
        return;
      }
      let result;
      switch (this.operation) {
        case 'subtract':
          result = this.firstOperand - this.secondOperand;
          break;
        case 'multiply':
          result = this.firstOperand * this.secondOperand;
          break;
        case 'divide':
          result = this.firstOperand / this.secondOperand;
          break;
        default:
          result = this.firstOperand + this.secondOperand;
          break;
      }
      return result;
    },
  },
  methods: {
    handleOperatorChange(evt) {
      this.operation = evt.target.value;
    },
  },
});
const app = createApp(RootComponent);
app.mount('#app');
