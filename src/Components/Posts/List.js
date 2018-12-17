import React, {Component, Fragment} from 'react'
import {array, bool, string, shape} from 'prop-types'
import {Link} from 'react-router-dom'
import Skeleton from 'antd/lib/skeleton'
import Divider from 'antd/lib/divider'
import Carousel from 'antd/lib/carousel'
import List from 'antd/lib/list'
import Icon from 'antd/lib/icon'
// import Avatar from 'antd/lib/avatar'
import moment from 'moment'
import {textOnly} from '~/Utils'

const link = 'berita'
const getObjects = (n) => (object) => object.slice(0, n)
const dates = (date) => (
  <span>
    <Icon type="calendar"/> {moment(date).fromNow()}
  </span>
)

/**
 * List Posts
 */
const renderItem = (
  {avatar, title, slug, description, content, thumbnail, date},
  type, loading=false) => {
  const list = type === 'vertical'
    ? {
      key: title.rendered,
      actions: [dates(date)],
      extra: <img width={272} alt={title.rendered} src={thumbnail}/>,
    } : {
      key: title.rendered,
      actions: [],
      extra: null,
    }
  const meta = type === 'vertical'
    ? {
      title: (
        <strong>
          <Link to={`${link}/${slug}`}>{title.rendered}</Link>
        </strong>
      ),
      description: textOnly(content.rendered, 200, ''),
    } : {
      title: (
        <strong>
          <Link to={`${link}/${slug}`}>{title.rendered}</Link>
        </strong>
      ),
      description: dates(date),
    }
  const skeleton = {
    key: `skeleton:${title.rendered}`,
    title: false,
    loading: loading,
    active: true,
  }
  return (
    <Skeleton {...skeleton}>
      <List.Item {...list} >
        <List.Item.Meta {...meta}/>
      </List.Item>
    </Skeleton>
  )
}

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

export default class ListPosts extends Component {
  static defaultProps = {
    posts: [],
    loading: true,
    max: -1,
    type: 'vertical',
  }

  static propTypes = {
    posts: array,
    loading: bool,
  }

  render() {
    const {posts, loading, max, type, divider} = this.props
    const list = {
      itemLayout: type,
      dataSource: max !== -1 ? posts.slice(0, max) : posts,
      pagination: false,
      renderItem: (item) => renderItem(item, type, loading),
    }
    return (
      <Fragment>
        <Divider>{divider}</Divider>
        {(type === 'carousel' &&
        <Carousel autoplay>
          {getObjects(max+1)(posts).map((item) => renderItem(item, type, loading))}
        </Carousel>)
        || <List {...list} />}

      </Fragment>
    )
  }
}

