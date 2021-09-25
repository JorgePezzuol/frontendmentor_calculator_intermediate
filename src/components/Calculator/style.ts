import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 450px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: ${(props) => props.theme.displayTextColor};
`;

export const ThemePicker = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 8px;
`;

export const ThemePreview = styled.div<{ bgColor: string }>`
  padding: 10px;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #000;
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 10px;
  padding: 35px 25px 35px 25px;
  color: ${(props) => props.theme.displayTextColor};
  background: ${(prop) => prop.theme.displayBgColor};
`;

export const KeypadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 25px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.keypadBgColor};
`;
