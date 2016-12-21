<template>
    <div>
        <h1>counter</h1>
        <p>
            Clicked: {{ count }} times
        </p>
        <p>
            doubleTimes: {{ doubleCount }}
        </p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
        <p>
            <button @click="reset">reset</button>
        </p>
    </div>
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
