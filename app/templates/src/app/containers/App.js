import Navigation from '../components/Navigation'

export default {
  name: 'App',

  render() {
    return (
      <div>
        <Navigation />
        <router-view />
      </div>
    )
  },
}
