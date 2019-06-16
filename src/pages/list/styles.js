import styled, { css } from 'styled-components';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.main`
  padding: 20px 200px 0px 200px;
  height: -moz-calc(100% - 60px);
  height: -webkit-calc(100% - 60px);
  height: calc(100% - 80px);
  overflow-y: auto;

  @media (max-width: 700px) {
    padding: 20px 0 0;
  }

  ${Spinner} {
    font-size: 48px;
  }

  ${props => props.loading
    && css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-right: 10px;
      margin-bottom: 20px;
      list-style: none;
      width: 170px;
      height: 230px;
      overflow: hidden;

      &:hover {
        box-shadow: 0px 5px 15px 0px rgba(50, 50, 50, 0.41);
      }

      button {
        width: 100%;
        height: 100%;
        border: none;
      }

      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s;
      }
    }
  }
`;

export const SubHeader = styled.div`
  padding: 0 200px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    padding: 20px 0 0;
  }

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
    }
  }

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
    font-size: 16px;
  }
`;
