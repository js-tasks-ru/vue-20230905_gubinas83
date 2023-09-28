<template>
  <div class="toast">
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
    toastType: {
      type: String
    },
  },

  components: { UiIcon },

  computed: {
    icon() {
      let iconType;
      switch (this.toastType) {
        case 'error':
        iconType = 'alert-circle';
          break;
        default:
        iconType = 'check-circle';
          break;
      }
      return iconType;
    }
  }
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
.toast__icon {
  margin-right: 12px;
}
</style>
