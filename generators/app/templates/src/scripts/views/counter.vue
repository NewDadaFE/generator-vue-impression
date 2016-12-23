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
            <group-title>Counter</group-title>
            <group>
                <cell>
                    Clicked: {{ count }} times
                </cell>
                <cell>
                    doubleTimes: {{ doubleCount }}
                </cell>
                <cell>
                    <btn theme="primary" size="sm" @click="increment"><icon name="plus" size="lg"/></btn>
                    <btn theme="secondary" size="sm" @click="decrement"><icon name="minus" size="lg" /></btn>
                    <btn theme="default" size="sm" slot="footer" @click="reset">RESET</btn>
                </cell>
            </group>
        </flex-item>
    </flex>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
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
