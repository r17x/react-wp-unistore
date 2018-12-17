import React from 'react'

import {Layout} from 'antd'

const {Footer} = Layout

const {REACT_APP_WEBSITE_NAME, REACT_APP_VERSION} = process.env

const Footers = () => (
  <Footer style={{textAlign: 'center'}}>
    <strong>{REACT_APP_WEBSITE_NAME}</strong> - Copyright &copy;
    {` ${new Date().getFullYear()} `}
    <span className="pull-right hidden-xs">
      {REACT_APP_WEBSITE_NAME} - v{REACT_APP_VERSION}
    </span>
  </Footer>
)

export default Footers
