<template>
    <div>
        <h1>square</h1>
        <p>
            number: {{ number }}
        </p>
        <p>
            square: {{ square }}
        </p>
        <p>
            <button @click="plus">+</button>
            <button @click="minus">-</button>
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
                number: state => state.square.number,
            }),
            ...mapGetters(['square']),
        },
        methods: {
            ...mapActions(['plus', 'minus', 'reset']),
        },
    };
</script>
