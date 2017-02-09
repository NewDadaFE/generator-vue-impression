<template>
    <flex direction="column">
        <navbar>
            <router-link :to="{path: '/'}">返回</router-link>
            <h5 slot="body">Help</h5>
        </navbar>
        <flex-item>
            图书：<input type="text" class="form-control" ref="query" value="肖申克的救赎">
            <button class="btn" @click="searchBookHandle">搜索</button>
            <p v-if="!books || books.length < 1">加载中...</p>
            <book-card v-for="book in books" :book="book" />
        </flex-item>
    </flex>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import BookCard from '../components/BookCard';

    export default {
        components: {
            BookCard,
        },
        computed: {
            ...mapState({
                books: state => state.search.books,
            }),
        },
        methods: {
            ...mapActions(['searchBook']),
            searchBookHandle() {
                let query = this.$refs.query.value;

                this.searchBook(query);
            },
        },
        mounted() {
            this.searchBookHandle();
        },
    };
</script>
