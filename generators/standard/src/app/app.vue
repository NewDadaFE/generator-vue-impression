<template>
  <flex direction="column">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </flex>
</template>

<script>
import { iOS } from './utils/native';

export default {
  data() {
    return {
      transitionName: '',
    };
  },
  watch: {
    $route(to, from) {
      if (!iOS) return;

      if (to.meta.level > from.meta.level) {
        this.transitionName = 'left';
      } else {
        this.transitionName = 'right';
      }
    },
  },
};
</script>

<style lang="scss">
@import './styles/app.scss';
</style>
