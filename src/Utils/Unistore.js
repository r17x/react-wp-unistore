import createStore from 'unistore'
import Services from '~/Services'

export const initState = {
  loading: true,
  postLoading: true,
  drawer: false,
  posts: [],
  post: {},
  categories: [],
  pages: [],
  menuList: [],
  __services: Services,
}

export const store = createStore(initState)

process.env.NODE_ENV === 'development'
    && store.subscribe( (state) => console.log(state) )

export const actions = (store) => ({
  setDrawer({drawer}) {
    return {drawer: !drawer}
  },

  async getPosts({__services}) {
    return {
      posts: await __services.getPosts(),
      postLoading: false,
    }
  },

  async getCategories({__services}) {
    return {
      categories: await __services.getCategories(),
      postLoading: false,
    }
  },

  async getPages({__services}) {
    return {
      pages: await __services.getPages(),
      postLoading: false,
    }
  },

  setMenu({menuList}, menu) {
    return {
      menuList: menuList.concat(menu),
    }
  },

  getPost({posts}, {by, value}) {
    return {
      post: posts
        .filter((post) => post[by] === value)
        .shift(),
    }
  },
})
