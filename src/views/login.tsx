import { useForm } from "react-hook-form";
import Button from "components/Button/Button";
import TextInput from "components/FormElements/Input";
import {
  MainContainer,
  Wrapper,
  Heading,
  InputWrapper,
} from "styles/views/login";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log("errors :>> ", errors);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <MainContainer>
      <Wrapper>
        <Heading>Log In</Heading>
        <InputWrapper onSubmit={onSubmit}>
          <TextInput placeholder="Email" name="email" control={control} />
          <TextInput placeholder="Password" name="password" control={control} />
        </InputWrapper>
        <Button label="Log In" type="submit" />
      </Wrapper>
    </MainContainer>
  );
};

export default Login;
