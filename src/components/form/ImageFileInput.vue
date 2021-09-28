<template lang="pug">
.mt-6
  label.block {{ label }}
    input.mt-3(type="file" :placeholder="placeholder"
      @input="inputHandler"
    )
</template>

<script>
export default {
  name: 'ImageFileInput',
  props: {
    placeholder: String,
    label: String,
  },
  data: () => ({
    value: null,
  }),
  emits: ['updated'],
  methods: {
    inputHandler(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          this.value = evt.target.result;
          this.$emit('updated', this.value);
        };
        reader.onerror = (evt) => {
          console.log(evt);
          this.$emit('updated', null);
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>
