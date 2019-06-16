import styled, { css } from 'styled-components';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  height: -moz-calc(100% - 60px);
  height: -webkit-calc(100% - 60px);
  height: calc(100% - 60px);

  ${Spinner} {
    font-size: 48px;
  }

  ${props => props.loading
    && css`
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  .bookContainer {
    padding: 0px 200px;
    display: flex;

    img {
      margin-bottom: 20px;
      width: 170px;
      height: 230px;
      box-shadow: 0px 5px 15px 0px rgba(50, 50, 50, 0.41);
    }

    .info {
      height: 230px;
      margin-left: 30px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        margin-bottom: 5px;
        font-size: 24px;
      }

      .authors {
        font-size: 14px;
        color: #646363;
      }

      .price {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #353535;

        strong {
          margin-right: 20px;
        }
      }

      .pages {
        font-size: 14px;
        color: #646363;
      }

      .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }

  .description {
    flex: 1;
    padding: 40px 200px 20px 200px;
    background-color: #fff;
    color: #333;
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  border: none;
  outline: none;
  padding: ${props => (props.secondary ? '10px 10px' : '15px 44px')};
  font-size: ${props => (props.secondary ? '24px' : '12px')};
  background-color: ${props => (props.secondary ? '#E05567' : '#549ae6')};
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  box-shadow: 0px 5px 15px 0px rgba(50, 50, 50, 0.41);

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.41);
  }

  &:first-child {
    margin-right: 10px;
  }
`;
