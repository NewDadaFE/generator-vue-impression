import Root from 'src/bwm/containers/Root'
import Home from 'src/bwm/components/Home'

export default [
  {
    path: '/bwm',
    component: Root,
    children: [
      {
        path: 'home',
        name: 'BWM',
        component: Home,
      },
    ],
  },
]
