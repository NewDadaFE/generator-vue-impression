<template>
  <flex direction="column" class="container">
    <navbar>
      <router-link :to="{path: '/'}">
        <icon name="chevron-left" size="lg" left /> 返回
      </router-link>
      <h5 slot="body">Counter</h5>
    </navbar>
    <flex-item>
      <counter
        :count="count"
        :doubleCount="doubleCount"
        :increment="increment"
        :decrement="decrement"
        :reset="reset" />
    </flex-item>

    <group>
            <cell>
                <timeline>
                    <timeline-item>
                        <strong class="text-primary">已签收</strong>
                    </timeline-item>
                    <timeline-item>快递到达泉州</timeline-item>
                    <timeline-item>快递到达福州</timeline-item>
                    <timeline-item>交付快递</timeline-item>
                    <timeline-item>订单已生成</timeline-item>
                </timeline>
            </cell>
        </group>
  </flex>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Counter from './component/Counter';

export default {
  components: {
    Counter,
  },
  computed: {
    ...mapState({
      count: state => state.count.count,
    }),
    ...mapGetters('count', ['doubleCount']),
  },
  methods: {
    ...mapActions('count', ['increment', 'decrement', 'reset']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 667px;
  width: 100vw;
  padding: 10px;
}
</style>

