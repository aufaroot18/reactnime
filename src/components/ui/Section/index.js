import styled from "@emotion/styled";

const Section = styled.section`
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
`;

export default Section;
