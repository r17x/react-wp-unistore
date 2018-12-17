import React, {Component} from 'react'
import {bool, array} from 'prop-types'
/**
import {Provider} from './Components/Utils'
import {default as asyncComponent} from 'react-loadable'
import {asyncComponent} from './Components/Utils'
/* don't import Antd like this
import {Layout, Affix} from 'antd'
import {Navbar} from './Components/Navbar'
/* Lazy-Import
const Layout = asyncComponent({
  importComponent: () => import('antd/lib/layout'),
})
**/

import Layout from 'antd/lib/layout'
import MainRouter from './Routers'
import {MenuList} from './Routers/routers'
import Drawer from './Components/Drawer'

const {
  Footer,
} = Layout

/**
 * App is Main component render in Index.js
 */
class App extends Component {
    static propTypes = {
      loading: bool,
      postLoading: bool,
      drawer: bool,
      posts: array,
      categories: array,
      pages: array,
      menuList: array,
    }
  static defaultProps = {
    loading: true,
    postLoading: true,
    drawer: false,
    posts: [],
    categories: [],
    pages: [],
    menuList: [],
  }

  constructor(props) {
    super(props)
    this.props.setMenu(MenuList)
  }

  async componentDidMount() {
    await Promise.all([
      this.props.getPosts(),
      this.props.getCategories(),
      this.props.getPages(),
    ])
  }

  render() {
    const drawer = {
      visible: this.props.drawer,
      onClose: ()=> this.props.setDrawer(),
    }
    return (
      <Layout theme="dark" >
        <MainRouter/>
        <Footer className="footer">
        </Footer>
        <Drawer {...drawer} />
      </Layout>
    )
  }
}

export default App
