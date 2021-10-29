import {
  Container,
  Nav,
  NavLogo,
  Join,
  SignIn,
  Section,
  Hero,
  Form,
  Google,
} from "./LoginElements";

const Login = () => {
  return (
    <Container>
      <Nav>
        <NavLogo to="/">
          <img src="../../images/login-logo.svg" alt="logo" />
        </NavLogo>
        <div>
          <Join to="/">Join now</Join>
          <SignIn to="/">Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="logo" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="google" />
            Sign up with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
