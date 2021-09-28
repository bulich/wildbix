<template lang="pug">
.mt-6
  label.block {{ label }}
    input.mt-3(type="text" v-model="value" :placeholder="placeholder"
      @input="inputHandler"
    )
</template>

<script>
export default {
  name: 'ImageURLInput',
  props: {
    placeholder: String,
    label: String,
  },
  data: () => ({
    value: null,
  }),
  emits: ['updated'],
  computed: {
    isValidURL() {
      let result = null;
      try {
        result = new URL(this.value).href;
      } catch (_) {
        return false;
      }
      return (result.match(/\.(jpeg|jpg|gif|png)$/) != null);
    },
  },
  methods: {
    inputHandler() {
      if (this.isValidURL) {
        this.$emit('updated', this.value);
      } else {
        this.$emit('updated', null);
      }
    },
  },
};
</script>
