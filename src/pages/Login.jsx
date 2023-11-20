import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 25px;
  background-color: var(--color-grey-50);
`;

// const StyledP = styled.p`
//   font-size: 14px;
//   text-align: center;
// `;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h2" className="text-center">
        Log in to your account
      </Heading>
      <LoginForm />

      {/* <StyledP>*Created by stay at home inc.</StyledP> */}
    </LoginLayout>
  );
}

export default Login;
