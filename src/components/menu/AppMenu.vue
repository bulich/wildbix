<template lang="pug">
.p-3
  background-section
  hr.my-6
  image-section
  button.block.mt-6.btn.bg-green-500.w-full.p-3.text-white(
    type="button" @click="saveImage"
  ) Сохранить
</template>

<script>
import { toPng } from 'html-to-image';
import BackgroundSection from './background/BackgroundSection.vue';
import ImageSection from './image/ImageSection.vue';

export default {
  name: 'AppEditor',
  components: {
    BackgroundSection,
    ImageSection
  },
  methods: {
    saveImage() {
      const scene = document.getElementById('scene');
      toPng(scene).then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
