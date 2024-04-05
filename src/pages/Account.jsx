import styled, { css } from "styled-components";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
// import Row from "../ui/Row";

const Row = styled.div`
${props => props.type === 'horizontal' && css`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`}

${props => props.type === 'vertical' && css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`}
`;

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
