<template lang="pug">
img(:src="source")
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
