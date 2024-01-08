import { createContext } from 'react'

interface IUserContext {
  userInfo: any
  setUserInfo: any
}

const defaultValues = {
  userInfo: null,
  setUserInfo: () => null,
}

const UserContext = createContext<IUserContext>(defaultValues)

export { UserContext }
