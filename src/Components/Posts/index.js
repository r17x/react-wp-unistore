import React from 'react'
import ListPosts from './List'
import SinglePost from './Single'
import {withContext} from '~/Utils'
import {connect} from 'unistore/react'
export const ListPostsWithContext = withContext(ListPosts)
export const ListPostsWithStore = connect('posts, postLoading')(
  ({posts, postLoading, max, match, type, divider}) =>
    <ListPosts
      posts={posts}
      loading={postLoading}
      max={max}
      match={match}
      type={type}
      divider={divider}
    />
)
export const SinglePostWithStore = connect('post')(
  ({post}) => {
    const {title, content, date} = post
    return <SinglePost date={date} title={title.rendered} content={content.rendered}/>
  })
