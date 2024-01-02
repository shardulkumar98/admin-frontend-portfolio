import { useMutation } from 'react-query'
import axiosInstance from 'services/axiosInstance'

interface IParams {
  url: string
  payload?: any
  token?: boolean
}

const patch = async ({ url, payload, token = false }: IParams) => {
  let headers: any
  if (token) {
    const authToken = localStorage.getItem('_auth')
    headers = { 'Auth-token': authToken }
  }

  const { data } = await axiosInstance.patch(url, payload, { headers })
  return data
}

const usePatch = () => useMutation(patch)

export default usePatch
