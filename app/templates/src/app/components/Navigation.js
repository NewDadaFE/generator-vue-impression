import * as R from 'ramda'
import { Tabbar, TabbarItem } from 'vue-impression'

export default {
  name: 'Navigation',

  data() {
    return {
      pages: [
        {
          id: 'bws',
          title: '帮我送',
          route: { name: 'BWS' },
        },
        {
          id: 'bwm',
          title: '帮我买',
          route: { name: 'BWM' },
        },
      ],
    }
  },

  computed: {
    defaultPage() {
      return R.pipe(R.head, R.prop('id'))(this.pages)
    },
  },

  methods: {
    go(id) {
      const getRoute = R.pipe(R.find(R.propEq('id', id)), R.prop('route'))

      this.$router.push(getRoute(this.pages))
    },
  },

  render() {
    return (
      <Tabbar activeKey={this.defaultPage} onChange={this.go}>
        {this.pages.map(page => (
          <TabbarItem eventKey={page.id}>{page.title}</TabbarItem>
        ))}
      </Tabbar>
    )
  },
}
