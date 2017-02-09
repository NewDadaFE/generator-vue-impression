<template>
    <div>
        图书：<input type="text" class="form-control" ref="query" value="肖申克的救赎">
        <button class="btn" @click="searchHandle">搜索</button>
        <p v-if="!books || books.length < 1">加载中...</p>
        <book-card v-for="book in books" :book="book" />
    </div>
</template>

<script>
    import BookCard from '../components/BookCard';
    import { searchBook } from '../actions/search';

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
            // 图书搜索
            searchHandle() {
                let query = this.$refs.query.value;

                searchBook(query).then(params => {
                    if(params.flag) {
                        this.books = params.books;
                    }
                });
            },
        },
        mounted() {
            this.searchHandle();
        },
    };
</script>
