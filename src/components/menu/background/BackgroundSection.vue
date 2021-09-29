<template lang="pug">
.text-xl Фон
  file-upload
  hr.my-6
  position-select
  hr.my-6
  color-select
</template>

<script>
import FileUpload from './FileUpload.vue';
import PositionSelect from './PositionSelect.vue';
import ColorSelect from './ColorSelect.vue';

export default {
  name: 'BackgroundSection',
  components: {
    FileUpload,
    PositionSelect,
    ColorSelect
  },
};
</script>
