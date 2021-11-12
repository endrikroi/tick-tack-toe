import React, { useEffect } from "react";
import {
  CenteredContainer,
  MarginedDiv,
  ResetButton,
  TicTacTable,
  Title,
  TitTacRow,
} from "./styles";
import { TableBox } from "./table-box";

const initialState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const Main = () => {
  const [boxState, setBoxState] = React.useState(initialState);

  const [next, setNext] = React.useState("X");

  const [hasWon, setHaswon] = React.useState(false);

  const handleClick = (row: number, col: number) => {
    if (hasWon) {
      return;
    }

    const newBoxState = [...boxState];

    const newRow = [...newBoxState[row]];
    newRow[col] = next;

    newBoxState[row] = newRow;

    setBoxState(newBoxState);
    if (next === "X") {
      setNext("O");
    } else {
      setNext("X");
    }
  };

  useEffect(() => {
    const hasSameInRow = (inputValue: string, row: number) => {
      return (
        boxState[row][0] === inputValue &&
        boxState[row][1] === inputValue &&
        boxState[row][2] === inputValue
      );
    };

    const hasSameInDiagonal = (inputValue: string) => {
      return (
        (boxState[0][0] === inputValue &&
          boxState[1][1] === inputValue &&
          boxState[2][2] === inputValue) ||
        (boxState[2][0] === inputValue &&
          boxState[1][1] === inputValue &&
          boxState[0][2] === inputValue)
      );
    };

    const hasdiagonalWinner = () => {
      if (hasSameInDiagonal("X") || hasSameInDiagonal("O")) {
        return true;
      }
      return false;
    };

    const hasRowWinner = () => {
      for (let i = 0; i < 3; i++) {
        if (hasSameInRow("X", i) || hasSameInRow("O", i)) {
          return true;
        }
      }
      return false;
    };

    const hasSameInCol = (col: number, inputValue: string) => {
      return (
        boxState[0][col] === inputValue &&
        boxState[1][col] === inputValue &&
        boxState[2][col] === inputValue
      );
    };

    const hasColWinner = () => {
      for (let j = 0; j < 3; j++) {
        if (hasSameInCol(j, "X") || hasSameInCol(j, "O")) {
          return true;
        }
      }
      return false;
    };

    const gameWinner = () => {
      if (hasRowWinner() || hasColWinner() || hasdiagonalWinner()) {
        alert("You are the WINNER!!!");
        setHaswon(true);
      }
    };

    gameWinner();

    const isDraw = !boxState.some((row) => row.some((col) => col === ""));
    if (isDraw) {
      alert("Nobody won! It is a draw");
    }
  }, [boxState]);

  const handleReset = () => {
    setBoxState(initialState);
    setHaswon(false);
  };
  return (
    <div>
      <MarginedDiv />
      <Title>Tic Tac Toe</Title>
      <TicTacTable>
        <TitTacRow>
          <TableBox
            value={boxState[0][0]}
            row={0}
            col={0}
            onClick={handleClick}
          />
          <TableBox
            value={boxState[0][1]}
            row={0}
            col={1}
            onClick={handleClick}
          />
          <TableBox
            value={boxState[0][2]}
            row={0}
            col={2}
            onClick={handleClick}
          />
        </TitTacRow>
        <TitTacRow>
          <TableBox
            value={boxState[1][0]}
            row={1}
            col={0}
            onClick={handleClick}
          />
          <TableBox
            value={boxState[1][1]}
            row={1}
            col={1}
            onClick={handleClick}
          />
          <TableBox
            value={boxState[1][2]}
            row={1}
            col={2}
            onClick={handleClick}
          />
        </TitTacRow>
        <TitTacRow>
          <TableBox
            value={boxState[2][0]}
            row={2}
            col={0}
            onClick={handleClick}
          />
          <TableBox
            value={boxState[2][1]}
            row={2}
            col={1}
            onClick={handleClick}
          />
          <TableBox
            value={boxState[2][2]}
            row={2}
            col={2}
            onClick={handleClick}
          />
        </TitTacRow>
      </TicTacTable>
      <CenteredContainer>
        <ResetButton onClick={handleReset}>Reset Game</ResetButton>
      </CenteredContainer>
    </div>
  );
};

export default Main;
