<template lang="pug">
.text-xl Фон
  image-url(label="URL изображения" @updated="setBackground")
</template>

<script>
import ImageURLInput from '@/components/form/ImageURLInput.vue';

export default {
  name: 'BackgroundSection',
  data: () => ({

  }),
  components: {
    'image-url': ImageURLInput,
  },
  methods: {
    setBackground(value) {
      if (!value) return;
      this.$store.commit('setBackgroundImage', `url(${value})`);
    },
  },
};
</script>
