<template>
  <div
    class="input-group"
    :class="{
      'input-group_icon': $slots['left-icon'] || $slots['right-icon'],
      'input-group_icon-left': $slots['left-icon'],
      'input-group_icon-right': $slots['right-icon'],
    }"
  >
    <div v-if="$slots['left-icon']" class="input-group__icon">
      <slot name="left-icon" />
    </div>

    <component
      :is="multiline ? 'textarea' : 'input'"
      ref="input"
      class="form-control"
      :class="{
        'form-control_rounded': rounded,
        'form-control_sm': small,
      }"
      v-bind="$attrs"
      :value="modelValue"
      @[updateEvent]="$emit('update:modelValue', $event.target.value)"
    />

    <div v-if="$slots['right-icon']" class="input-group__icon">
      <slot name="right-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  inheritAttrs: false,

  props: {
    modelValue: {
      type: String,
    },

    modelModifiers: {
      default: () => ({
        lazy: false,
      }),
    },

    rounded: {
      type: Boolean,
      default: false,
    },

    small: {
      type: Boolean,
      default: false,
    },

    multiline: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue'],

  computed: {
    updateEvent() {
      return this.modelModifiers.lazy ? 'change' : 'input';
    },
  },

  methods: {
    focus() {
      this.$refs['input'].focus();
    },
  },
};
</script>
