import styled from 'styled-components';

export const Container = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #9494945e;

  .actions {
    width: 170px;

    button {
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 24px;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid #9494945e;

    svg {
      font-size: 24px;
    }

    input {
      margin-left: 5px;
      background-color: transparent;
      border: none;
      outline: none;
      width: 100%;
    }
  }
`;
