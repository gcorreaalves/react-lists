import React, { useReducer, useContext, createContext } from 'react'
import PropTypes from 'prop-types'

const MenuStateContext = createContext({})
const MenuDispatchContext = createContext({})

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return true
    case 'CLOSE':
      return false
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, true)

  return (
    <MenuDispatchContext.Provider value={dispatch}>
      <MenuStateContext.Provider value={state}>
        {children}
      </MenuStateContext.Provider>
    </MenuDispatchContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}

export const MENU_CLOSE = 'CLOSE'
export const MENU_OPEN = 'OPEN'
export const MenuProvider = Provider
export const useMenuOpen = () => useContext(MenuStateContext)
export const useDispatchMenuOpen = () => useContext(MenuDispatchContext)
