<template lang="pug">
.mt-6
  label.block {{ label }}
    input.mt-3(type="text" :value="value" :placeholder="placeholder"
      @input="$emit('updated', $event.target.value)"
    )
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: String,
    placeholder: String,
    label: String,
  },
  emits: ['updated'],
};
</script>
