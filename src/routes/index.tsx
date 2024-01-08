import { useState } from 'react'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { Spin } from 'antd'
import 'react-toastify/dist/ReactToastify.css'
import routes from 'constant/routes'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'
import { UserContext } from 'context/userInfo'

const Routes = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({})

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
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
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
      </UserContext.Provider>
    </QueryClientProvider>
  )
}

export default Routes
