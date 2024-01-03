import { Navigate } from 'react-router-dom'
import { LoginRoute } from 'constant/routes'
import { isLogin } from 'utils'

export const PublicRoute = ({ component: RouteComponent, restricted }: any) => {
  if (isLogin() && !restricted) {
    return <Navigate to={LoginRoute?.path} />
  }

  return <RouteComponent />
}

export default PublicRoute
