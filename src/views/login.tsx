import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { DashboardRoute } from 'constant/routes'
import Button from 'components/Button/Button'
import TextInput from 'components/FormElements/Input'
import { loginSchema } from 'validation'
import usePost from 'hooks/usePost'
import { APIS } from 'constant/apis'
import { UserContext } from 'context/userInfo'
import { MainContainer, Wrapper, Heading, InputWrapper, InputContainer, Error } from 'styles/views/login'

interface IData {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const { mutateAsync } = usePost()
  const { setUserInfo } = useContext(UserContext)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      const res = await mutateAsync({
        url: `${APIS.LOGIN}`,
        payload: data,
      })
      if (res?.data?.token) {
        localStorage.setItem('token', res?.data?.token)
        // localStorage.setItem('user', res?.data?.userInfo?.firstName)
        navigate(`${DashboardRoute.path}`)
        setUserInfo(res?.data?.userInfo)
      }
    } catch (error) {
      // console.log('error :>> ', error)
    }
  }

  return (
    <MainContainer>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Heading>Log In</Heading>
        <InputWrapper>
          <InputContainer>
            <TextInput placeholder="Email" name="email" control={control} />
            <Error>{errors.email?.message}</Error>
          </InputContainer>
          <InputContainer>
            <TextInput placeholder="Password" name="password" control={control} type="password" />
            <Error>{errors?.password?.message}</Error>
          </InputContainer>
        </InputWrapper>
        <Button label="Submit" type="submit" />
      </Wrapper>
    </MainContainer>
  )
}

export default Login
