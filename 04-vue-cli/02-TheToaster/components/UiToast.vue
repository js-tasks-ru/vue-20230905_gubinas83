<template>
  <div class="toast" :class="className">
      <UiIcon class="toast__icon" :icon="icon" />
      <span>{{ message }}</span>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToast',

  props: {
    message: {
      type: String
    },
    className: {
      type: String
    },
    icon: {
      type: String
    }
  },

  components: { UiIcon },
};
</script>

<style></style>
