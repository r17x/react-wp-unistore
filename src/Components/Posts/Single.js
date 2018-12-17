import React, {Component} from 'react'
import {string} from 'prop-types'
import Card from 'antd/lib/card'
import toHTML from 'react-html-parser'
import moment from 'moment'

const {Meta} = Card

export default class SinglePost extends Component {
  static propTypes = {
    title: string.isRequired,
    content: string.isRequired,
    date: string.isRequired,
  }

  render() {
    const {title, content, date} = this.props
    return (
      <Card>
        <Meta description={moment(date).fromNow()}/>
        <h2>{title}</h2>
        {toHTML(content)}
      </Card>
    )
  }
}
