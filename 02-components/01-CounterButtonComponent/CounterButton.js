import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: [Number, null],
      default: 0,
    },
  },
  methods: {
    handleClick() {
      this.$emit('update:count', this.count + 1);
    },
  },
  emits: ['update:count'],

  // Компонент должен иметь входной параметр и порождать событие

  template: `<button @click="handleClick" type="button">{{ count }}</button>`,
});
