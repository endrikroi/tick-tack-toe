import React, { FunctionComponent } from "react";
import { BigButton } from "./styles";

interface TableBoxProps {
  value: string;
  row: number;
  col: number;
  onClick: (row: number, col: number) => void;
}

export const TableBox: FunctionComponent<TableBoxProps> = (props) => {
  const handleClick = () => {
    props.onClick(props.row, props.col);
  };

  return (
    <BigButton onClick={props.value ? undefined : handleClick}>
      {props.value}
    </BigButton>
  );
};
