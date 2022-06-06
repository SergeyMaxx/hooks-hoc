import React, {useCallback, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const LofOutButton = ({onLogOut}) => {
  useEffect(() => {
    console.log('render button')
  })

  return (
    <button className={'btn btn-primary mx-2'} onClick={onLogOut}>
      onLogOut
    </button>
  )
}

LofOutButton.propType = {
  onLogOut: PropTypes.func
}

function areEqual(prevState, nextState) {
  return prevState.onLogOut !== nextState.onLogOut
}

const MemoizedLogOutButton = React.memo(LofOutButton, areEqual)

const MemoWithUseCallbackExample = () => {
  const [state, setState] = useState(false)
  const handleLogOut = useCallback(() => {
    localStorage.removeItem('auth')
  }, [])

  return (
    <>
      <button className={'btn btn-primary mx-2'} onClick={() => setState(!state)}>
        initial rerender
      </button>
      <MemoizedLogOutButton onLogOut={handleLogOut}/>
    </>
  )
}

export default MemoWithUseCallbackExample
