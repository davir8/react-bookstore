import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  padding: 15px 40px;
  background-color: #549ae6;
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  box-shadow: 0px 5px 15px 0px rgba(50, 50, 50, 0.41);

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.41);
  }
`;
