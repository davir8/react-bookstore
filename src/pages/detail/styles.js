import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 200px 0px 200px;

  .bookContainer {
    display: flex;
    align-items: center;

    .image {
      display: flex;
      margin-right: 10px;
      margin-bottom: 20px;
      list-style: none;
      width: 170px;
      height: 230px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
    }
  }

  p {
    background-color: #fff;
    color: #333;
    width: 100%;
  }
`;
