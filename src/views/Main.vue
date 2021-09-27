<template lang="pug">
.flex.h-full
  .w-60.h-full.overflow-y-auto.flex-shrink-0
    app-menu
  .flex-grow.h-full.bg-gray-100
    app-scene
</template>

<script>
import AppMenu from '@/components/menu/AppMenu.vue';
import AppScene from '@/components/scene/AppScene.vue';

export default {
  name: 'main',
  components: {
    AppMenu,
    AppScene,
  },
};
</script>
