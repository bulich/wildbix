<template lang="pug">
label.block Градиент
template(v-for="gradient in gradients")
  input(type="radio" v-model="value" :value="gradient" @change="changeHandler")

</template>

<script>
import { gradients } from '@/mocks';

export default {
  name: 'GradientSelect',
  data: () => ({
    value: 'none',
    gradients: []
  }),
  methods: {
    changeHandler() {
      this.$store.commit('updateBackground', { backgroundImage: this.value });
    },
  },
  mounted() {
    this.gradients = gradients;
  }
};
</script>
