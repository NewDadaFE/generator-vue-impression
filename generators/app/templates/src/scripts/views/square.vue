<template>
    <flex direction="column">
        <navbar>
            <router-link :to="{path: '/'}">
                <icon name="chevron-left" size="lg" left />
                返回
            </router-link>
            <h5 slot="body">Square</h5>
        </navbar>
        <flex-item>
            <group-title>Square</group-title>
            <group>
                <cell>
                    <strong>number</strong>: {{ number }}
                </cell>
                <cell>
                    <strong>square</strong>: {{ square }}
                </cell>
                <cell>
                    <btn theme="primary" size="sm" @click="plus"><icon name="plus" size="lg" /></btn>
                    <btn theme="secondary" size="sm" @click="minus"><icon name="minus" size="lg" /></btn>
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
                number: state => state.square.number,
            }),
            ...mapGetters(['square']),
        },
        methods: {
            ...mapActions(['plus', 'minus', 'reset']),
        },
        mounted() {
            console.log(this);
        },
    };
</script>
