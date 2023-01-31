import { createContext } from 'react'

type UserContextType = {
    user?: {  id: string },
    userRoles?: string[],
    signOut: () => void,
    signIn: (email: string, password: string) => void,
    userLoaded: boolean
}
const UserContext = createContext<UserContextType>({} as UserContextType)

export default UserContext
