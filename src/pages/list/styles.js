import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 200px 0px 200px;
  height: -moz-calc(100% - 60px);
  height: -webkit-calc(100% - 60px);
  height: calc(100% - 80px);
  overflow-y: scroll;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s;
      }
    }
  }
`;
