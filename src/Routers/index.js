import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
  config,
  withSubRoutes,
} from './routers'
import {MenuList as Menus} from '~/Components/Navbar'
import {actions} from '~/Utils/Unistore'
import Icon from 'antd/lib/icon'
import Layout from 'antd/lib/layout'
import {connect} from 'unistore/react'
const {Header, Content} = Layout

const DrawerMenu = connect('drawer', actions)(({drawer, setDrawer})=>
  <Icon
    type={
      (drawer && 'menu-unfold') || 'menu-fold'
    }
    className="menu-drawer"
    onClick={
      () => setDrawer()
    }/>
)
/**
 * Main Routers Of Application
 * @params {object} props
 * @params {object} store
 * @return {object} Router Element
 */
export const MainRouter = () => {
  return (
    <Router>
      <Fragment>
        <Header theme="dark" className="header">
          {false && <DrawerMenu/> }
          <Menus/>
        </Header>
        <Content className="content">
          {config.map((route, key) => {
            return route.routes && route.routes.length > 0
              ? (<withSubRoutes
                {...route}
                key={`route:${route.name}:${key}`}
              />)
              : (<Route key={`route:${route.name}:${key}`} {...route} />)
          })}
        </Content>
      </Fragment>
    </Router>
  )
}

export default MainRouter
