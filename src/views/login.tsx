import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { DashboardRoute } from 'constant/routes'
import Button from 'components/Button/Button'
import TextInput from 'components/FormElements/Input'
// import { loginSchema } from "validation";
import { MainContainer, Wrapper, Heading, InputWrapper } from 'styles/views/login'
import usePost from 'hooks/usePost'
import { APIS } from 'constant/apis'

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  navigate
  // console.log('navigate :>> ', navigate)
  const { mutateAsync } = usePost()

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormData>({
    // resolver: yupResolver(loginSchema),
    // defaultValues: {
    //   email: "",
    //   password: "",
    // },
  })

  const onSubmit = async (data: any) => {
    try {
      const res = await mutateAsync({
        url: `${APIS.LOGIN}`,
        payload: data,
      })
      res
      // console.log('res :>> ', res)
    } catch (error) {
      // console.log('error :>> ', error)
    }
    // data
    // localStorage.setItem('token', 'thisismytoken')
    // navigate(`${DashboardRoute.path}`)
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
