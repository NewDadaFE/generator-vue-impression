<template>
  <button class="button" :disabled="loading || disabled" :class="{
      [`btn-${type}`]: type,
      [`btn-${size}`]: size
    }" @click="$emit('click')">
    <img v-if="loading" class="btn-loading" src="@/app/images/oval.svg" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return ['primary', 'default'].indexOf(value) > -1;
      },
    },
    size: {
      type: String,
      default: 'md',
    },
    disabled: Boolean,
    loading: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  padding: 0 10px;
  border-radius: 4px;
  height: 40px;
  line-height: 40px;
  user-select: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-appearance: none;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.7;
  }

  .btn-loading {
    width: 16px;
    height: auto;
    vertical-align: text-bottom;
  }
}

.btn-primary {
  background-color: rgba(#0078ef, 0.7);
  color: #fff;

  &:active:not(:disabled) {
    background-color: rgba(#0078ef, 1);
  }
}
</style>
