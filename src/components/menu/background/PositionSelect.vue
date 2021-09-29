<template lang="pug">
label.block Позиция фона
select(@change="changeHandler" v-model="value")
  option(value="center center") По центру
  option(value="center right") Справа
  option(value="center left") Слева
</template>

<script>
export default {
  name: 'PositionSelect',
  data: () => ({
    value: 'center center',
  }),
  methods: {
    changeHandler() {
      this.$store.commit('updateBackground', { backgroundPosition: this.value });
    },
  },
};
</script>
