import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { DashboardRoute } from 'constant/routes'
import Button from 'components/Button/Button'
import TextInput from 'components/FormElements/Input'
// import { loginSchema } from "validation";
import { MainContainer, Wrapper, Heading, InputWrapper } from 'styles/views/login'
import usePost from 'hooks/usePost'
import { APIS } from 'constant/apis'
import { useContext } from 'react'
import { UserContext } from 'context/userInfo'

interface FormData {
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
    // formState: { errors },
  } = useForm<FormData>({
    // resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      const res = await mutateAsync({
        url: `${APIS.LOGIN}`,
        payload: data,
      })
      if (res?.data?.token) {
        localStorage.setItem('token', res?.data?.token)
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
          <TextInput placeholder="Email" name="email" control={control} />
          <TextInput placeholder="Password" name="password" control={control} />
        </InputWrapper>
        <Button label="Submit" type="submit" />
      </Wrapper>
    </MainContainer>
  )
}

export default Login
