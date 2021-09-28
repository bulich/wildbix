<template lang="pug">
.absolute.z-0.inset-0(:style="styleObj")
  p {{styleObj}}
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
