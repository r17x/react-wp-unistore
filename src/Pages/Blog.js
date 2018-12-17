import React, {Component} from 'react'
import Banner from '~/Components/Posts/Banner'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import {
  ListPostsWithStore as
  ListPosts,
  SinglePostWithStore as
  SinglePost,
} from '~/Components/Posts'
import {connect} from 'unistore/react'
import {actions} from '~/Utils/Unistore'

const sideCol = {
  xs: {span: 24},
  sm: {span: 24},
  md: {span: 24},
  lg: {span: 6},
  xl: {span: 6},
}

const mainCol = {
  xs: {span: 24},
  sm: {span: 24},
  md: {span: 24},
  lg: {span: 18},
  xl: {span: 18},
}

export default connect('', actions)(class Blog extends Component {
  state = {
    isSingle: false,
  }

  componentDidMount() {
    const {match} = this.props
    const isSingle = match && match.path === '/berita/:slug'
    if (isSingle) {
      this.props.getPost({by: 'slug', value: this.props.match.params.slug})
      this.setState({
        isSingle,
      })
    }
  }

  render() {
    return (
      <Row style={{margin: 13}} justify="center" gutter={32} type="flex">
        <Col {...mainCol}>{
          (this.state.isSingle &&
                <SinglePost/>
          ) ||
           ( <ListPosts divider="Berita"/> )

        }</Col>
        <Col {...sideCol}>
          <Banner/>
        </Col>
      </Row>
    )
  }
})

