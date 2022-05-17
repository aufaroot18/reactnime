import styled from "@emotion/styled";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => `${gap || 1}`}rem;
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
`;

export default Flex;
