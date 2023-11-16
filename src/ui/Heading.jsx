import styled, { css } from "styled-components";

// const color = css`color: white`

const Heading = styled.h1`
${props => props.as === 'h1' && css`
    font-size: 30px;
    font - weight: 200;
    color: ${props.color};
`}
${props => props.as === 'h2' && css`
    font-size: 25px;
    font - weight: 150;
    color: ${props.color}
`}
${props => props.as === 'h3' && css`
    font-size: 20px;
    font - weight: 100;
    color: ${props.color}
`}
`;

Heading.defaultProps = {
    // color: "green"
}

export default Heading;