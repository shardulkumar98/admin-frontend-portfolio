import { useQuery } from 'react-query'
import axiosInstance from 'services/axiosInstance'

const useGet = (key: string, url: string, configs?: any) => {
  const get = async () => {
    let headers: any
    const token = localStorage.getItem('_auth')
    if (configs.token)
      headers = {
        'Auth-token': token,
      }

    const { data } = await axiosInstance.get(url, { headers })
    return data
  }

  const defaultConfig = {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
    ...configs,
  }
  return useQuery(key, get, defaultConfig)
}

export default useGet
