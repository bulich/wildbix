<template lang="pug">
drag-resize( :w="'auto'" :h="'auto'"
  :isActive="true" v-on:resizing="resize" v-on:dragging="resize")
  component(:is="type" :props="props")
</template>

<script>
import VueDragResize from 'vue-drag-resize';
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
    DragResize: VueDragResize
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
  methods: {
  },
  created() {
    this.currProps = this.props;
  }
};
</script>
