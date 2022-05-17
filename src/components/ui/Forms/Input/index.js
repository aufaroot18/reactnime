import styled from "@emotion/styled";

const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  border: 1px solid #64748b;
  outline: none;
  color: #64748b;
  margin-bottom: 0.5rem;

  &:focus {
    border: 1px solid #06d6a0;
  }
`;

export default Input;
