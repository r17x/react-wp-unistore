import React, {Component} from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import {
  ListPostsWithStore as
  ListPosts,
} from '~/Components/Posts'
import Banner from '~/Components/Posts/Banner'
const sideCol = {
  xs: {span: 12*2, order: 2},
  sm: {span: 12*2, order: 2},
  md: {span: 12*2, order: 2},
  lg: {span: 6},
  xl: {span: 6},
}
const mainCol = {
  xs: {span: 24, order: 1},
  sm: {span: 2424, order: 1},
  md: {span: 2424, order: 1},
  lg: {span: 6*2, order: 2},
  xl: {span: 6*2, order: 2},
}

/** Home Class **/
class Home extends Component {
    state = {
      source: 'http://via.placeholder.com/300x250',
    }
    /**
   * @return {element} React.element
   **/
    render() {
      return (
        <Row style={{margin: 13}} justify="center" gutter={32} type="flex">
          <Col {...sideCol}>
            <ListPosts max={5} type="horizontal" divider="Berita Terbaru"/>
          </Col>
          <Col {...mainCol}>
            <ListPosts max={3} type="carousel" divider="3 Berita Populer"/>
            <ListPosts divider="Berita"/>
          </Col>
          <Col {...sideCol}>
            <Banner src={this.state.source} />
          </Col>
        </Row>
      )
    }
}


export default Home
