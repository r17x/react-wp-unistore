import React, {Component} from 'react'
import {bool, func} from 'prop-types'
import Drawer from 'antd/lib/drawer'

class FDrawer extends Component {
  static defaultProps = {
    visible: false,
    onClose: () => null,
    placement: 'left',
  }

  static propTypes = {
    visible: bool,
    onClose: func,
  }

  render() {
    return (
      <Drawer
        width={720}
        placement={this.props.placement}
        onClose={this.props.onClose}
        maskClosable={false}
        visible={this.props.visible}
        style={{
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: 53,
        }}
      >
    Draw on here
      </Drawer>
    )
  }
}

export default FDrawer
