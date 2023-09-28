<template>
  <div class="toasts">
    <UiToast v-for="toast in toasts" :key="toast.id" :message="toast.message" :class="`toast_${toast.type}`" :toastType="toast.type" />
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
        type: 'success',
        message: msg ?? 'Sample Message',
      });

      setTimeout(() => {
        this.toasts = this.toasts.filter((toast) => toast.id !== currentId);
      }, 5000);
    },

    error(msg){
      const currentId = ++this.count;
      this.toasts.push({
        id: currentId,
        type: 'error',
        message: msg ?? 'Sample Message',
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
</style>
