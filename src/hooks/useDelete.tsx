import { useMutation } from 'react-query'
import axiosInstance from 'services/axiosInstance'

interface IParams {
  url: string
  payload?: any
  token?: boolean
}

const del = async ({ url, payload, token = false }: IParams) => {
  let headers: any
  if (token) {
    const authToken = localStorage.getItem('_auth')
    headers = { 'Auth-token': authToken }
  }

  const { data } = await axiosInstance.delete(url, {
    headers,
    data: payload,
  })
  return data
}

const useDelete = () => useMutation(del)

export default useDelete
