<template lang="pug">
div
  input
</template>

<script>
import ImageFileLInput from '@/components/form/ImageFileInput.vue';

export default {
  name: 'Text input',
  data: () => ({
    text: null
  }),
  components: {
    'image-file': ImageFileLInput,
  },
  methods: {
    addImage(value) {
      if (!value) return;
      this.$store.commit('addElement', {
        type: 'image',
        x: 50,
        y: 50,
        content: value
      });
    },
  },
};
</script>
