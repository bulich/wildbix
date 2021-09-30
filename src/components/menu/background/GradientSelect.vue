<template lang="pug">
label.block Градиент
.flex.mt-6
  .flex-1
    label.block.w-8.h-8 Нет
      input.hidden(type="radio" v-model="value" :value="null" @change="changeHandler")
  .flex-1(v-for="gradient in gradients")
    label.block.w-8.h-8(:style="'background:'+gradient")
      input.hidden(type="radio" v-model="value" :value="gradient" @change="changeHandler")

</template>

<script>
import { gradients } from '@/mocks';

export default {
  name: 'GradientSelect',
  data: () => ({
    value: null,
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
