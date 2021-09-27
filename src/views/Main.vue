<template lang="pug">
.container-fluid
  .row
    .col-3
      editor-nav
    .col-9 2
</template>

<script>
import EditorNav from '@/components/editor/EditorNav.vue';

export default {
  name: 'main',
  components: {
    EditorNav,
  },
};
</script>
