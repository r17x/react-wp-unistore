import React, {Component} from 'react'
import './Transaction.css'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import DatePicker from 'antd/lib/date-picker'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'

const {Item} = Form

// const IconType = (props) => props.type === 'expense'
//   ? <Tooltip placement="bottomRight" title={props.type}>
//     <Icon type="down" onClick={props.onClick}/>
//   </Tooltip>
//   : <Tooltip placement="bottomRight" title={props.type}>
//     <Icon type="up" onClick={props.onClick}/>
//   </Tooltip>

const fields = {
  amount: {
    rules: [{
      required: true,
      message: 'Oops... Are You Okay?',
    }],
  },
  description: {
    rules: [{
      required: false,
      message: 'Write a better description on this transaction!',
    }],
  },
  category: {
    rules: [{
      required: false,
      message: 'Select a good category for your best transaction!',
    }],
  },
  transactionAt: {
    rules: [{
      required: false,
      message: 'Set The Date',
    }],
  },
}

class TransactionForm extends Component {
    state = {
      type: 'expense',
    }

    constructor(props) {
      super(props)
      this.handleType = this.handleType.bind(this)
    }

    handleType() {
      const {getFieldValue, setFieldsValue} = this.props.form
      const type = this.state.type === 'income' ? 'expense' : 'income'
      this.setState({
        type: type,
      })
      let category = getFieldValue('category')
      if (category === undefined || category.length === 0 ) {
        category = [type]
      } else if (
        category.length <= 1 &&
          ['expense', 'income'].includes(category[0]) ) {
        category = [type]
      }
      setFieldsValue({category})
    }

    render() {
      const {getFieldDecorator, validateFields, resetFields} = this.props.form
      const amount = getFieldDecorator('amount', fields.amount)
      // const description = getFieldDecorator('description', fields.description)
      // const category = getFieldDecorator('category', fields.category)
      const transactionAt = getFieldDecorator('transactionAt', fields.transactionAt)
      return (
        <Form
          style={{width: '100%', justifyContent: 'center', display: 'flex'}}
          layout="inline" onSubmit={
            async (e) => {
              e.preventDefault()
              this.props.submit(validateFields, this.state.type, resetFields)
            }
          }>
          <Item></Item>
          <Item>
            {amount(
              <Input
                prefix={
                  <Icon
                    style={{
                      color: this.state.type === 'income'
                        ? '#389e0d'
                        : '#cf1322',
                      fontSize: 20,
                    }}
                    type={this.state.type === 'income' ? 'up-circle' : 'down-circle'}
                    onClick={this.handleType}/>
                }
                size="large"
                autoFocus={true}
                placeholder=" Rp 10000"
                type="number"
              />
            )}
          </Item>
          <Item>
            {transactionAt(
              <DatePicker
                size="large"
                showTime={true}
                placeholder=""
              />
            )}
          </Item>
          <Item>
            <Button
              icon="dollar"
              type="primary"
              style={{display: 'none'}}
              htmlType="submit">
                Save
            </Button>
          </Item>
        </Form>
      )
    }
}

export default Form.create()(TransactionForm)
