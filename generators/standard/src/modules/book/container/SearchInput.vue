<template>
  <search
    class="search"
    :loading="loading"
    placeholder="请输入图书名称"
    :value="keyword"
    @change="handleInputChange"
    @click="handleSearchBook" />
</template>

<script>
import { mapActions } from 'vuex';
import Search from '@/app/component/SearchInput';

export default {
  components: {
    search: Search,
  },

  data() {
    return {
      keyword: '肖申克的救赎',
      loading: false,
    }
  },

  mounted() {
    this.handleSearchBook(this.keyword)
  },

  methods: {
    ...mapActions('book', ['searchBook']),

    handleInputChange(value) {
      this.keyword = value
    },

    handleSearchBook() {
      this.loading = true;
      this.searchBook(this.keyword).then(() => {
        this.loading = false;
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  padding: 10px;
}
</style>

