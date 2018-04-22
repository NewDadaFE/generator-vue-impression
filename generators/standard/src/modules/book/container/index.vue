<template>
  <flex direction="column">
    <navbar>
      <router-link :to="{path: '/'}">
        <icon name="chevron-left" size="lg" left /> 返回
      </router-link>
      <h4 slot="body">搜索书籍</h4>
    </navbar>
    <flex-item>
      <search-input />
      <search-result />
    </flex-item>
  </flex>
</template>

<script>
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'

export default {
  components: {
    SearchInput,
    SearchResult,
  }
}
</script>

