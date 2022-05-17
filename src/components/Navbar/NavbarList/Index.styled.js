import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledNavbarList = styled.ul`
  list-style: none;
  width: 100%;

  // ACTIVE STATE
  ${({ active }) => css`
    display: ${active ? "block" : "none"};
  `}

  @media screen and (min-width: 768px) {
    & {
      display: flex;
      margin-top: 0;
      width: auto;
    }
  }
`;

export default StyledNavbarList;
