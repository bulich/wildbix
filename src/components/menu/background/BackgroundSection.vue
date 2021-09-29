<template lang="pug">
.text-xl Фон
  image-url(label="URL изображения" @updated="setBackground" @cleared="removeBackground")
  hr.mt-6
  image-file(label="Файл изображения" @updated="setBackground" @cleared="removeBackground")
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
    setBackground(value) {
      if (!value) return;
      this.$store.commit('setBackgroundImage', `url(${value})`);
    },
    removeBackground() {
      this.$store.commit('removeBackgroundImage');
    },
  },
};
</script>
