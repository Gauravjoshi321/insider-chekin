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

export default Row;