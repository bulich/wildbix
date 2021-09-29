<template lang="pug">
label.block Цвет фона
  input.block(type="color" v-model="value" @input="changeHandler")
button.block(type="button" @click="clearColor") Убрать фон
</template>

<script>
export default {
  name: 'ColorSelect',
  data: () => ({
    value: null,
  }),
  methods: {
    changeHandler() {
      this.$store.commit('updateBackground', { backgroundColor: this.value });
    },
    clearColor() {
      this.value = null;
      this.$store.commit('updateBackground', { backgroundColor: null });
    }
  },
};
</script>
