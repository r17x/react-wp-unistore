import React from 'react'
import {string, number, oneOfType} from 'prop-types'
import {array, bool} from 'prop-types'
import Skeleton from 'antd/lib/skeleton'
import List from 'antd/lib/list'
import Avatar from 'antd/lib/avatar'
import Icon from 'antd/lib/icon'

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{
      marginRight: 8,
      color: type === 'caret-down'
        ? '#f5222d'
        : '#52c41a'}} />
    {`Rp ${text} `}
  </span>
)

IconText.propTypes = {
  type: string.isRequired,
  text: oneOfType([
    string,
    number,
  ]).isRequired,
}

/**
 * List Transaction Component
 */
export default class ListTransaction extends React.Component {
  static defaultProps = {
    data: [],
    loading: true,
  }

  static propTypes = {
    data: array,
    loading: bool,
  }

  static getDerivedStateFromProps(props, state) {
    if ('data' in props && props.data !== state.data) {
      return {data: props.data.reverse(), loading: false}
    }
    return null
  }

  state = {
    loading: true,
    data: [],
  }

  render() {
    const {loading, data} = this.state
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{
                        backgroundColor: item.type === 'income'
                          ? '#389e0d'
                          : '#cf1322',
                        verticalAlign: 'middle',
                      }}
                      size="large"
                    >
                      {item.type}
                    </Avatar>
                  }
                  title={<IconText type={item.type ==='income' ? 'caret-up' : 'caret-down'} text={item.amount} />}
                  description={item.description || <a>add description</a>}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    )
  }
}
