<template>
  <div class="search">
    <div class="input">
      <input
        type="text"
        :value="value"
        :placeholder="placeholder"
        @input="handleChange" />
    </div>
    <btn
      class="button"
      :loading="loading"
      type="primary"
      @click="handleClick">搜 索</btn>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'search',
  components: {
    btn: Button,
  },
  props: {
    value: String,
    placeholder: {
      type: String,
      default: '请输入搜索关键词',
    },
    loading: Boolean
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.value, e);
    },
    handleClick(e) {
      this.$emit('click', this.keyword, e)
    },
  },
}
</script>


<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
}

.input {
  flex: 1;
  position: relative;
  padding-left: 30px;
  padding-right: 10px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  box-sizing: border-box;

  input {
    border-radius: 4px;
    font-size: 16px;
    outline: 0;
    border: 0;
    width: 100%;
    height: 100%;
    user-select: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    height: 14px;
    width: 14px;
    transform: translateY(-50%);

    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEvElEQVRoQ9VaXXbaRhT+7gzvpSuIs4LGx/JjjDiBvgavoHgFwSswXkHwCoJXEPpayEG4j5EPZAUhKyh9t+b2jBDUkmYkIatA580H6ep+9+eb+2PCC88f0/kbKdR7Zn4DoB6KI7hgrAAs9J9MvCDQQio5azZPly/8ZOx1KiNs/OdXlwL6DUAHFCldUBAzLwSJkVDivgowOwGIFL8JLVzBIVBfKHHXbJ5qb5U6hQDoMBEUfKxK8ZimjBURDd41zm7LIMgFEFn9866hsrMyDE+yvNzVG5kAJjP/A4BBnjLM+BsED+AwaQWJpdIJzapOoDoYLgi/5MvhBXPt6tfmaSinyLECmHj+JxC6OULuQRi1LpxR3sem03ldSdVRrLoEalifZ6wUy2ZREEYA44fHHjF/zFDqXirZL8siUVgOrF5hrCTL0yLyUwAmD34HjM8m5cNQkdxpvz338ixe5Pfx7GufQDfmb/GixrVmXk7EAERsMzUmLOObYtkt6toiAPQz2mCsMCTCT6l3GKOW61xmyYoBmHi+Vj7N8YxvkqWbZ42iSief04YjCjwjCMJlVo5tAYRxqWiaFK7Dhlm6VVs++Z0vD49dZv5k8MKy5TqvbcbZArBaP8cCZa1uem8y8zVla+qOHSK6endxNjS9EwKwogfuWw0nj0qrxICJ5y9BeBUTyrB6IQQwmfkanS7OYkcq+boIlVWJwGZMFtw0sd8agOf/ZWCevVt/YwijF4C7VsPppcLLlrzYY+wnlTLmgiWMyHSZaOZpu866OTnACe8jEcyLhLQG4CVrEwZ+bzeczgF0335y7Pmr5L1gygMLAL5tN877BwVgMKyJTmni+d9BOHmuLOM4AZj0osnM56SlbZS1T48Yc9NgWCOAQzLQlkoNt7LZA56/SNbl/6sQMrPQkeaA4Tam8cwfEfA+nsSHp1FTdWCmUUv7KJX8+b+q//PIwFYdmHSi6XR+Eojge0rokZUStst1U8ylEhkMr+U6zTxrVf27nl4EFMxTdxPRdfviLDXi2ZTTxkbiEPeBrdG3lfYhAGsY7dkLkfV1ZRArJBk8azfOjfPYf1tKS1PDFtdVHTpRX2IcpmU1VlsAGv0TBcsyk4EqwGTMiDIbq9hYxSpkx3HfroAyenLktbXpyZyhtAgV0mNwQde26cCuSm+e/zJ7vGGwsXTPmkZs3k8BiBJJ02p8MhC9weBBTdVuX3rJRd/RMW9rnIw9cKonNlkuc1K28QbRoMx2JZxSC/WBmXu2ncMuHaF1vJ4LIgICYMSCR7Wgphd4xlVRSBDyqUGKtLUz92pa+ZqS3aIezlxwRMPeYZHlRJQnegMZ20IyuE5EeoNZ5GzDJryb1mstPS1fQuDaNCPNXTGF1hPBMFmxFtGm6DN6CiIE9TYEYSsnAPRaDefuudxcAFu20MNXxX1bchdV1vBcallinVWtw3bYcp0rKwvlKRJydjVArFueTAAJEIU9kAQWfUTHZ8EF3noRKIhGIhBe3szV1CnGdIg8URrAc2E64Z5qTyfEVI/+5WD9M4kVSIUbx13XUlEeeFkEonv3SgDkhV3Z33NB6OqgrPB9vZcJgvHj6AFoQ9mo/OhDKEUcei3LpDdGKxY01C3mPzs1vDz4s7SrAAAAAElFTkSuQmCC');
  }

  &:focus {
    border-color: rgba(#0078ef, 0.5);
  }
}

.button {
  transition: all 500ms;
  width: 90px;
  margin-left: 10px;
}
</style>
