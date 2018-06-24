import Root from 'src/bws/containers/Root'
import Home from 'src/bws/components/Home'

export default [
  {
    path: '/bws',
    component: Root,
    children: [
      {
        path: 'home',
        name: 'BWS',
        component: Home,
      },
    ],
  },
]
