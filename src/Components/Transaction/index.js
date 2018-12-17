import React from 'react'
import Skeleton from 'antd/lib/skeleton'
import {asyncComponent, withContext} from '../Utils'
import Action from './Action'

/** Uncomenting this 2 line if you want disable
*** Async Component Load
import Form from './Form'
import List from './List'
**/

const LoadingForm = () => (
  <Skeleton
    active
    title={false}
    paragraph={{
      rows: 2,
      width: ['100%', '100%', '100%', '100%'],
    }}/>
)

const LoadingList = () => (
  <Skeleton
    avatar
    active
    title={true}
    paragraph={{rows: 10}}
  />
)

const Form = asyncComponent({
  importComponent: () => import('./Form'),
  Loading: LoadingForm,
})

const List = asyncComponent({
  importComponent: () => import('./List'),
  Loading: LoadingList,
})

const FormWithAction = (props) => (
  <Action Element={Form} {...props}/>
)

const FormWithContext = withContext(FormWithAction)

const ListWithContext = withContext(List)

/** Export
 Form : Transaction Form (Pure with ant form)
 FormWithAction : Form with Action
 FormWithContext: FormWithAction with ContextAPI
 List : Transaction List Component
 ListTransaction : List Transaction with  ContextAPI
**/

export {
  Form,
  FormWithAction,
  FormWithContext,
  List,
  ListWithContext,
}
