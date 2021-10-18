<template lang="pug">
drag-resize(
        :w="300"
        h="auto"
        :x="0"
        :y="0"
        :draggable="true"
        :resizable="true"
        :rotatable="true"
)
  component(:is="type" :props="props")
</template>

<script>
// Vue 2 component immport
import vueDragResizeRotate from '@gausszhou/vue-drag-resize-rotate/src/components//vue-drag-resize-rotate/index.vue';
import ImageType from './types/ImageType.vue';

export default {
  name: 'InteractiveLayer',
  data: () => ({
    currProps: null
  }),
  props: {
    props: Object
  },
  components: {
    DragResize: vueDragResizeRotate
  },
  computed: {
    type() {
      const { type } = this.props;
      switch (type) {
        case 'image':
          return ImageType;
        default:
          return 'image';
      }
    }
  },
  methods: {},
  created() {
    this.currProps = this.props;
  }
};
</script>
