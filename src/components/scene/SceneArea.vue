<template lang="pug">
.scene-bg.bg-white
  .scene-area.overflow-hidden.relative(id="scene")
    background-layer
    interactive-layer(v-for="element in elements" :props="element")
</template>

<script>
import BackgroundLayer from '@/components/layers/BackgroundLayer.vue';
import InteractiveLayer from '@/components/layers/InteractiveLayer.vue';

export default {
  name: 'SceneArea',
  components: {
    BackgroundLayer,
    InteractiveLayer
  },
  computed: {
    elements() {
      return this.$store.getters.elements;
    }
  }
};
</script>

<style lang="scss">
  .scene-area {
    width: 480px;
    height: 640px;
  }
</style>
