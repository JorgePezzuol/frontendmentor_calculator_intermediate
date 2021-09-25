import styled from "styled-components";
import { IKeyButtonProps } from ".";

export const StyledInputButton = styled.input.attrs({
  type: "button",
})<IKeyButtonProps>`
  color: ${(props) => props.textColor ?? props.theme.keyTextColor};
  grid-column: ${(props) => (props.isBigger ? "span 2" : "span 1")};
  background: ${(props) => props.bgColor ?? props.theme.keyBgColor};
  border: 1px ${(props) => props.shadowColor ?? props.theme.keyBgShadowColor};
  padding: 15px;
  border-radius: 5px;
  font-size: ${(props) => (props.textColor ? "14px" : "22px")};
  cursor: pointer;
  height: 50px;
  -webkit-box-shadow: 0 6px 4px -4px ${(props) => props.shadowColor ?? props.theme.keyBgShadowColor};
  -moz-box-shadow: 0 6px 4px -4px ${(props) => props.shadowColor ?? props.theme.keyBgShadowColor};
  box-shadow: 0 6px 4px -4px ${(props) => props.shadowColor ?? props.theme.keyBgShadowColor};
`;
