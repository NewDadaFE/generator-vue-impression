<template>
  <div>
    <p :show="!books || books.length < 1">加载中...</p>
    <book-card v-for="book in books" :book="book" :key="book.id" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BookCard from '../component/BookCard';

export default {
  components: {
    BookCard,
  },

  computed: {
    ...mapState('book', {
      books: book => book.books,
    }),
  },
}
</script>

