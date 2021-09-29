<template lang="pug">
label.block Градиент
</template>

<script>
import { gradients } from '@/mocks';

export default {
  name: 'GradientSelect',
  data: () => ({
    value: 'center center',
  }),
  methods: {
    changeHandler() {
      this.$store.commit('updateBackground', { backgroundPosition: this.value });
    },
  },
  mounted() {
    this.gradients = gradients;
  }
};
</script>
