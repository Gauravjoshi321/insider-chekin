import Heading from "../ui/Heading";
// import Row from "../ui/Row";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import styled, { css } from "styled-components";

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

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row >
  )
}

export default Settings;
