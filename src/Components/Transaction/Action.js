import React, {PureComponent} from 'react'
import moment from 'moment'
import {toNumber} from 'lodash'

class Action extends PureComponent {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
  }

  save(validate, type, resetFields) {
    const {data} = this.props
    validate((err, fieldsValues) => {
      if (err) return
      const {amount, description, category, transactionAt} = fieldsValues
      this._onSet = this.props.set('data', [
        ...data,
        {
          amount: toNumber(amount) || 0,
          description: description || '',
          category: category || '',
          transactionAt: transactionAt || moment(),
          type: type,
          status: 'local',
        },
      ])
      resetFields()
    })
  }

  componentWillUnmount() {
    if (this._onSet && 'cance' in this._onSet) this._onSet.cancel()
  }

  render() {
    const {Element} = this.props
    return (
      <Element submit={this.save}/>
    )
  }
}
export default Action
