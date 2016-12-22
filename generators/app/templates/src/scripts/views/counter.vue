<template>
    <flex direction="column">
        <navbar>
            <router-link :to="{path: '/'}">返回</router-link>
            <h5 slot="body">Counter</h5>
        </navbar>
        <flex-item>
            <h1>counter</h1>
            <p>
                Clicked: {{ count }} times
            </p>
            <p>
                doubleTimes: {{ doubleCount }}
            </p>
            <p>
                <btn theme="primary" @click="increment">加</btn>
                <btn theme="secondary" @click="decrement">减</btn>
                <btn theme="default" @click="reset">重置</btn>
            </p>
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
