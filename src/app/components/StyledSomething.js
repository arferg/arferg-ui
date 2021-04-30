import styled from "styled-components";

export const SomethingContainer = styled.div`
    color: red;
    font-size: 25px;
`

export const Test = styled.div`
    color: ${props => props.primary ? "palevioletred" : "orange"};
`