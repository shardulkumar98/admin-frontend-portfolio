import Dashboard from 'pages/dashboard'
import CategoryUploads from 'views/categoryUploads'
import Login from 'views/login'
import Uploads from 'views/uploads'

interface IRoute {
  path: string
  restricted: boolean
  component: () => any
  exact: boolean
}

export const LoginRoute = {
  component: Login,
  path: '/',
  exact: true,
  restricted: false,
}

export const DashboardRoute = {
  component: Dashboard,
  path: '/dashboard',
  exact: true,
  restricted: true,
}

export const UploadsRoute = {
  component: Uploads,
  path: '/uploads',
  exact: true,
  restricted: true,
}

export const CategoryUploadsRoute = {
  component: CategoryUploads,
  path: '/category-uploads',
  exact: true,
  restricted: true,
}

const ROUTES: IRoute[] = [LoginRoute, DashboardRoute, UploadsRoute, CategoryUploadsRoute]

export default ROUTES
