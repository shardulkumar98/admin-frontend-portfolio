import routes from 'constant/routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'

const Routes = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ReactRoutes>
          {routes?.map((route, index) => {
            const { component: Component, path, restricted } = route
            return (
              <Route
                key={index}
                path={path}
                element={
                  // restricted && layout ? (
                  //   <PrivateRoute component={Component} />
                  // ) :
                  restricted ? (
                    <div>
                      <PrivateRoute component={Component} />
                    </div>
                  ) : (
                    <PublicRoute restricted={false} component={Component} />
                  )
                }
              />
            )
          })}
        </ReactRoutes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default Routes
