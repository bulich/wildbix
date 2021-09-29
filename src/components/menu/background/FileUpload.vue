<template lang="pug">
image-file(label="Загрузить фон" @updated="setBackground" @cleared="removeBackground")
</template>

<script>
import ImageFileLInput from '@/components/form/ImageFileInput.vue';

export default {
  name: 'FileUpload',
  components: {
    'image-file': ImageFileLInput,
  },
  methods: {
    setBackground(value) {
      if (!value) return;
      this.$store.commit('updateBackground', { backgroundImage: `url(${value})` });
    },
    removeBackground() {
      this.$store.commit('updateBackground', { backgroundImage: null });
    },
  },
};
</script>
