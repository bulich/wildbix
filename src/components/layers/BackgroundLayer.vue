<template lang="pug">
.absolute.z-1.inset-0(:style="styleObj")
</template>

<script>
export default {
  name: 'BackgroundLayer',
  computed: {
    styleObj() {
      console.log(this.$store.getters.backgroundStyles);
      return this.$store.getters.backgroundStyles;
    },
  },
};
</script>
