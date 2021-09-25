import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import { StyledInputButton } from "./style";
import { bindActionCreators } from "redux";
import React from "react";

export interface IKeyButtonProps {
  value: string;
  isBigger?: boolean;
  textColor?: string;
  bgColor?: string;
  shadowColor?: string;
  handleClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const KeyButton = ({
  value,
  isBigger,
  textColor,
  bgColor,
  shadowColor,
  handleClick,
}: IKeyButtonProps) => {
  const dispatch = useDispatch();

  const { input } = bindActionCreators(actionCreators, dispatch);

  return (
    <StyledInputButton
      isBigger={isBigger}
      textColor={textColor}
      bgColor={bgColor}
      shadowColor={shadowColor}
      value={value}
      onClick={!handleClick ? () => input(value) : handleClick}
    />
  );
};

export default KeyButton;
