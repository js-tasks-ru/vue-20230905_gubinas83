import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: [Number, null],
      required: true,
    },
  },
  methods: {
    handleClick() {
      let result = this.count ? this.count : 0;
      this.$emit('update:count', ++result);
    },
  },
  emits: ['update:count'],

  // Компонент должен иметь входной параметр и порождать событие

  template: `<button @click="handleClick" type="button">{{ count ?? 0 }}</button>`,
});
