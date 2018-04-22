<template>
  <div class="container">
    <p v-if="book.count">
      共搜索到了<span class="total">{{getTotal}}</span>书籍
    </p>
    <div v-for="item in book.books" :key="item.id" class="card">
      <div class="card-title">{{item.title}}-{{item.author.join('/')}}</div>
      <div>{{item.catalog}}</div>
    </div>
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
      book: book => book
    }),

    getTotal() {
      return `${this.book.count} / ${this.book.count}`
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  border-radius: 5px;

  .total {
    font-weight: bold;
    padding: 0 5px;
  }
}
.card {
  margin: 10px 0;
  padding: 10px;

  .card-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>

