import React, { useReducer, useContext, createContext } from 'react'

interface IAction {
  type: 'OPEN' | 'CLOSE'
}

const reducer = (state: boolean, action: IAction) => {
  switch (action.type) {
    case 'OPEN':
      return true
    case 'CLOSE':
      return false
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const MenuStateContext = createContext(false)
const MenuDispatchContext = createContext(action => console.log(action))

const Provider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, true)

  return (
    <MenuDispatchContext.Provider value={dispatch}>
      <MenuStateContext.Provider value={state}>
        {children}
      </MenuStateContext.Provider>
    </MenuDispatchContext.Provider>
  )
}

export const MENU_CLOSE = 'CLOSE'
export const MENU_OPEN = 'OPEN'
export const MenuProvider = Provider
export const useMenuOpen = (): boolean => useContext(MenuStateContext)
export const useDispatchMenuOpen = (): React.Dispatch<IAction> =>
  useContext(MenuDispatchContext)
