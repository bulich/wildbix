<template lang="pug">
.scene-area.bg-gray-200.relative Edit Area
  background-layer
</template>

<script>
import BackgroundLayer from '@/components/layers/BackgroundLayer.vue';

export default {
  name: 'SceneArea',
  components: {
    BackgroundLayer,
  },
};
</script>

<style lang="scss">
  .scene-area {
    width: 480px;
    height: 640px;
  }
</style>
