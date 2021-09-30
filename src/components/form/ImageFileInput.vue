<template lang="pug">
.mt-6
  label.block {{ label }}
    input.mt-3(type="file" :placeholder="placeholder" ref="input"
      @input="inputHandler" :class="{'border-red-600': !isValidImage}"
    )
    span.text-red-600(v-if="!isValidImage") Неверный файл
    button.block(v-if="showClearBtn" type="button" @click="clearInput" :disabled="!image") Очистить
</template>

<script>
export default {
  name: 'ImageFileInput',
  props: {
    placeholder: String,
    label: String,
    showClearBtn: {
      type: Boolean,
      default: true,
    }
  },
  data: () => ({
    image: null,
  }),
  emits: ['updated', 'cleared'],
  computed: {
    isValidImage() {
      if (this.image === null) return true;
      return this.image.type.match('image.*');
    },
  },
  methods: {
    inputHandler(event) {
      this.image = event.target.files && event.target.files[0];
      if (this.isValidImage) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          this.$emit('updated', evt.target.result);
        };
        reader.onerror = (evt) => {
          console.log(evt);
          this.$emit('updated', null);
        };
        reader.readAsDataURL(this.image);
      }
    },
    clearInput() {
      this.image = null;
      this.$refs.input.value = null;
      this.$emit('cleared');
    },
  },
};
</script>
