import { get } from '@/app/utils/request'

// 搜索图书
export const searchBook = ({ commit }, query) => {
  return get(`/v2/book/search?q=${query}`).then(result => {
    commit(searchBook.name, result.books)
  })
}
