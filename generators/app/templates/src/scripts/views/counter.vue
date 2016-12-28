<template>
    <flex direction="column">
        <navbar>
            <router-link :to="{path: '/'}">
                <icon name="chevron-left" size="lg" left />
                返回
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
    </flex>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    import Counter from '../components/Counter';

    export default {
        components: {
            Counter,
        },
        computed: {
            ...mapState({
                count: state => state.count.count,
            }),
            ...mapGetters(['doubleCount']),
        },
        methods: {
            ...mapActions(['increment', 'decrement', 'reset']),
        },
    };
</script>
