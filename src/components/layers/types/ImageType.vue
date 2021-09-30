<template lang="pug">
img.img(:src="source")
</template>

<script>
export default {
  name: 'InteractiveLayer',
  props: {
    props: Object
  },
  computed: {
    source() {
      return this.props.content;
    }
  }
};
</script>

<style lang="scss">
  .img {
    width: 100% !important;
    height: auto !important;
  }
</style>
