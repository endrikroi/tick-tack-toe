import styled from "styled-components";

export const CenteredContainer = styled.div`
  text-align: center;
`;

export const Title = styled.header`
  color: black;
  text-align: center;
  font-size: 30px;
`;

export const TicTacTable = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TitTacRow = styled.div`
  display: flex;
`;

export const BigButton = styled.div`
  width: 100px;
  height: 100px;
  background-color: #7ac2c2;
  color: black;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
`;

export const MarginedDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ResetButton = styled.button`
  font-size: 20px;
  background-color: #7ac2c2;
`;
