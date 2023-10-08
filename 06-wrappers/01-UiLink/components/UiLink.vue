<template>
<<<<<<< HEAD
  <component :is="tag" class="link"><slot /></component>
=======
  <component :is="tag" class="link" v-bind="$attrs">
  <slot />
  </component>
>>>>>>> a908b59 (Implement UiLink)
</template>

<script>
export default {
  name: 'UiLink',
<<<<<<< HEAD
=======
  inheritAttrs: false,
>>>>>>> a908b59 (Implement UiLink)

  props: {
    tag: {
      type: [String, Object, Function],
<<<<<<< HEAD
      default: 'router-link',
    },
  },
=======
      default: 'router-link'
    }
  }
>>>>>>> a908b59 (Implement UiLink)
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
