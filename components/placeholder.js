import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f4b042;
  height: ${({height}) => height};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Placeholder = ({ height, placeholderText }) => (
  <Container height={height}>{placeholderText}</Container>
);

export default Placeholder;
