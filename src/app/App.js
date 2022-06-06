import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/UI/navBar'
import ContainerWrapper from './components/common/container'
import Users from './layouts/users'
import UseCallbackExample from './layouts/useCallback'
import MemoExample from './layouts/memo'
import UseMemoExample from './layouts/useMemo'
import CloneElementExample from './components/examples/cloneElement/cloneElementExample'
import HOCLayout from './layouts/hoc'
import ReactChildren from './layouts/reactChildren'
import UseRefExample from './layouts/useRef'
import Main from './layouts/main'

function App() {
  return (
    <>
      <NavBar/>
      <ContainerWrapper>
        <Switch>
          <Route path="/users/:userId?" component={Users}/>
          <Route path="/useCallback" component={UseCallbackExample}/>
          <Route path="/memo" component={MemoExample}/>
          <Route path="/useMemo" component={UseMemoExample}/>
          <Route
            path="/cloneElement"
            component={CloneElementExample}
          />
          <Route path="/hoc" component={HOCLayout}/>
          <Route path="/children" component={ReactChildren}/>
          <Route path="/useRef" component={UseRefExample}/>
          <Route path="/" exact component={Main}/>
          <Redirect to="/"/>
        </Switch>
      </ContainerWrapper>
    </>
  )
}

export default App
