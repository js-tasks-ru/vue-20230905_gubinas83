<template>
  <div class="toasts">
    <UiToast v-for="toast in toasts" :key="toast.id" :message="toast.message" :className="toast.className" :icon="toast.icon" />
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: { UiIcon, UiToast },

  data(){
    return {
      toasts: [],
      count: 0
    }
  },

  methods: {
    success(msg) {
      const currentId = ++this.count;
      this.toasts.push({
        id: currentId,
        message: msg ?? 'Sample Message',
        className: 'toast_success',
        icon: 'check-circle'
      });
      console.log(this.toasts)

      setTimeout(() => {
        this.toasts = this.toasts.filter((toast) => toast.id !== currentId);
      }, 5000);
    },

    error(msg){
      const currentId = ++this.count;
      this.toasts.push({
        id: currentId,
        message: msg ?? 'Sample Message',
        className: 'toast_error',
        icon: 'alert-circle'
      });

      setTimeout(() => {
        this.toasts = this.toasts.filter((toast) => toast.id !== currentId);
      }, 5000);
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

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

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
