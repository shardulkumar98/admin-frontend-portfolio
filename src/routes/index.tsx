import { useState } from 'react'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Spin } from 'antd'
import routes from 'constant/routes'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'

const Routes = () => {
  const [isLoading, setIsLoading] = useState(false)

  const showError = (message: string) => {
    toast.error(message)
  }

  const showSuccess = (message: string) => {
    toast.success(message)
  }

  // Global Api Error Handling & loader
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: async (error: any) => {
            setIsLoading(false)
            showError(error?.response?.data?.message)

            // if (error.config.url === `/auth/user/${userId}`) {
            //   showError(error?.response?.data?.error)
            // } else if (error.response.status === 401 && error?.response?.data?.message === 'Concurrent Login') {
            //   setModal(true)
            // } else if (
            //   error.response.status === 403 &&
            //   error?.response?.data?.message === 'Your Access Has Been Changed Please Contact Admin'
            // ) {
            //   setAccessModal(true)
            // } else {
            //   if (error?.response?.data?.message === 'User does not exist ') {
            //     showError(error?.response?.data?.message)
            //   } else {
            //     showError(error?.response?.data?.error)
            //   }
            // }
          },
          onSuccess: (data: any) => {
            setIsLoading(false)
            showSuccess(data?.message)
          },
        }),
        mutationCache: new MutationCache({
          onError: async (error: any) => {
            setIsLoading(false)
            showError(error?.response?.data?.message)
          },
          onSuccess: (data: any) => {
            showSuccess(data?.message)
            setIsLoading(false)
          },
          onMutate: () => {
            setIsLoading(true)
          },
        }),
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', right: '50%', bottom: '50%', zIndex: '9999' }}>
          <Spin size="large" />
        </div>
      )}
      <ToastContainer />
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
