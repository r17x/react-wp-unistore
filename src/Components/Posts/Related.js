import React, {Component} from 'react'
import {array, bool, string, shape} from 'prop-types'
import {Link} from 'react-router-dom'
import Skeleton from 'antd/lib/skeleton'
import Carousel from 'antd/lib/carousel'
import List from 'antd/lib/list'
import Card from 'antd/lib/card'
import Avatar from 'antd/lib/avatar'
import {textOnly} from '~/Utils'

const link = 'berita'
const {Meta} = Card
const getObjects = (n) => (object) => object.slice(0, n)

/**
 * List Posts
 */
const renderItem = (
  {avatar, title, slug, description, content, thumbnail},
  loading=false) => (
  <Skeleton key={`skeleton:${title.rendered}`} title={false} loading={loading} active={true}>
    <List.Item key={title.rendered}>
      <Card
        hoverable
        cover={<img alt={title.rendered} src={thumbnail} />}
      >
        <Meta
          title={title.rendered}
          description={textOnly(content.rendered, 50)}/>
      </Card>
    </List.Item>
  </Skeleton>
)

renderItem.propTypes = {
  ...shape({
    avatar: string,
    title: string,
    slug: string,
    description: string,
    content: string,
    thumbnail: string,
  }),
  loading: bool,
}

export default class RelatedPosts extends Component {
  static defaultProps = {
    posts: [],
    loading: true,
    max: -1,
  }

  static propTypes = {
    posts: array,
    loading: bool,
  }

  render() {
    const {posts, loading, max} = this.props
    const list = {
      grid: {gutter: 16, column: max},
      dataSource: posts.slice(0, max),
      renderItem: (item) => renderItem(item, loading),
    }
    return <List {...list} />
  }
}


