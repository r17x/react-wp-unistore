import {Home} from '../Pages'
import {Blog} from '../Pages'

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    exact: true,
    icon: '',
  },
  {
    name: 'berita',
    path: '/berita',
    component: Blog,
    exact: true,
    icon: '',
  },
  {
    name: '',
    path: '/berita/:slug',
    component: Blog,
    exact: true,
    icon: '',
  },
]
