import {asyncComponent} from '~/Utils'

export const Home = asyncComponent({
  importComponent: ()=> import('~/Pages/Home'),
})

export const Blog = asyncComponent({
  importComponent: ()=> import('~/Pages/Blog'),
})

