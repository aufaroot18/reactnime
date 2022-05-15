import styled from "@emotion/styled";

const Box = styled.div`
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
`;

export default Box;
