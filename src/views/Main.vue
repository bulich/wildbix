<template lang="pug">
.flex.h-full
  .w-60.h-full.overflow-y-auto.flex-shrink-0
    app-editor
  .flex-grow.h-full.bg-gray-100
    app-scene
</template>

<script>
import AppEditor from '@/components/editor/AppEditor.vue';
import AppScene from '@/components/scene/AppScene.vue';

export default {
  name: 'main',
  components: {
    AppEditor,
    AppScene,
  },
};
</script>
