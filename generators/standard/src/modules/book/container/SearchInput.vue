<template>
  <div>
    <span>图书：</span>
    <input
      type="text"
      class="form-control"
      @inputchange="handleInputChange"
      :value="keyword">
    <button class="btn" @click="handleSearchBook">搜索</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      keyword: '肖申克的救赎',
    }
  },

  mounted() {
    this.handleSearchBook(this.keyword)
  },

  methods: {
    ...mapActions('book', ['searchBook']),

    handleInputChange(e) {
      this.keyword = e.target.value
    },

    handleSearchBook() {
      this.searchBook(this.keyword);
    },
  },
}
</script>

