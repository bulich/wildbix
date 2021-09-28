<template lang="pug">
.text-xl Фон
  image-url(label="URL изображения" @updated="setBackground")
  image-file(label="Файл изображения" @updated="setBackground")
</template>

<script>
import ImageURLInput from '@/components/form/ImageURLInput.vue';
import ImageFileLInput from '@/components/form/ImageFileInput.vue';

export default {
  name: 'BackgroundSection',
  data: () => ({

  }),
  components: {
    'image-url': ImageURLInput,
    'image-file': ImageFileLInput,
  },
  methods: {
    setBackgroundFromUrl(value) {
      if (!value) return;
      this.$store.commit('setBackgroundImage', `url(${value})`);
    },
  },
};
</script>
