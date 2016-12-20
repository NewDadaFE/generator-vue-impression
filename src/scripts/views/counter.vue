<template>
    <div>
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
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapState({
                count: state => state.count.count,
            }),
            ...mapGetters(['doubleCount']),
        },
        methods: {
            ...mapActions(['increment', 'decrement']),
        },
    };
</script>
