<template>
    <flex direction="column">
        <navbar>
            <router-link :to="{path: '/'}">返回</router-link>
            <h5 slot="body">Square</h5>
        </navbar>
        <flex-item>
            <h1>square</h1>
            <p>
                number: {{ number }}
            </p>
            <p>
                square: {{ square }}
            </p>
            <p>
                <btn theme="primary" @click="plus">加</btn>
                <btn theme="secondary" @click="minus">减</btn>
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
                number: state => state.square.number,
            }),
            ...mapGetters(['square']),
        },
        methods: {
            ...mapActions(['plus', 'minus', 'reset']),
        },
        mounted() {
            console.log(this);
        }
    };
</script>
