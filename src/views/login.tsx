import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { DashboardRoute } from "constant/routes";
import Button from "components/Button/Button";
import TextInput from "components/FormElements/Input";
// import { loginSchema } from "validation";
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
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // resolver: yupResolver(loginSchema),
    // defaultValues: {
    //   email: "",
    //   password: "",
    // },
  });

  console.log("errors :>> ", errors);

  const onSubmit = (data: any) => {
    console.log(data);
    localStorage.setItem("token", "thisismytoken");
    navigate(`${DashboardRoute.path}`);
  };

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
  );
};

export default Login;
