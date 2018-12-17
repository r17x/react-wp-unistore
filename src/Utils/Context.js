import React, {createContext, PureComponent} from 'react'

const AppContext = createContext()

const {Provider} = AppContext

const withContext = (Components) =>
  class withContext extends PureComponent {
    /**
     * @return {object} ContextAPI.Consumer in Children Component
     */
    render() {
      return (
        <AppContext.Consumer>
          { (data) => <Components {...data}/> }
        </AppContext.Consumer>
      )
    }
  }

export {Provider, withContext}
