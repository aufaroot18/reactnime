import { css } from "@emotion/react";
import styled from "@emotion/styled";

const PaginationItem = styled.li`
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 500;

  ${({ link }) =>
    link &&
    css`
      cursor: pointer;
      color: #06d6a0;
    `}
`;

export default PaginationItem;
