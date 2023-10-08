<template>
  <button @click="handleClick">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  data(){
    return {
      localCount: this.count,
    }
  },

   watch: {
     count: function (newValue, oldValue) {
       this.localCount = newValue;
     }
   },

  methods: {
    handleClick() {
      this.localCount += 1;;
      this.$emit('update:count', this.localCount);
    },
  },
  emits: ['update:count'],
};
</script>
