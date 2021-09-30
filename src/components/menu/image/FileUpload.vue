<template lang="pug">
image-file(label="Загрузить изображение" @updated="addImage"
  :showClearBtn="false")
div.text-red-500 {{image}}
</template>

<script>
import ImageFileLInput from '@/components/form/ImageFileInput.vue';

export default {
  name: 'FileUpload',
  data: () => ({
    image: null
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
