<template>
    <div>
        图书：<input type="text" class="form-control" ref="query" value="肖申克的救赎">
        <button class="btn" @click="searchHandle">搜索</button>
        <div v-if="!books || books.length < 1">加载中...</div>
        <book-card v-for="book in books" :book="book" />
    </div>
</template>

<script>
    import URL from '../constants/URL';
    import BookCard from '../components/BookCard';

    export default {
        components: {
            BookCard,
        },
        data() {
            return {
                books: [],
            };
        },
        methods: {
            searchHandle() {
                let query = this.$refs.query.value;

                this.$http.get(`${URL.SEARCH}?q=${query}`).then(response => {
                    this.books = response.body.books;
                });
            },
        },
        mounted() {
            this.searchHandle();
        },
    };
</script>
