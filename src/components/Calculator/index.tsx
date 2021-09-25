import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import {
  Container,
  Header,
  ThemePicker,
  ThemePreview,
  Display,
  KeypadContainer,
} from "./style";
import KeyButton from "../KeyButton";
import { dark } from "../../styles/themes/dark";
import { light } from "../../styles/themes/light";
import { violet } from "../../styles/themes/violet";
import { useTheme } from "../../styles/theme";

const Calculator = () => {
  const { changeTheme, theme } = useTheme();

  const calcState = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();

  const { calculate, del, reset } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <Container>
      <Header>
        calc
        <ThemePicker>
          THEME
          <ThemePreview
            bgColor={dark.primary}
            onClick={() => changeTheme("dark")}
          />
          <ThemePreview
            bgColor={light.primary}
            onClick={() => changeTheme("light")}
          />
          <ThemePreview
            bgColor={violet.primary}
            onClick={() => changeTheme("violet")}
          />
        </ThemePicker>
      </Header>
      <Display>
        {calcState.result > 0 ? calcState.result : calcState.inputs}
      </Display>
      <KeypadContainer>
        <KeyButton value="7" />
        <KeyButton value="8" />
        <KeyButton value="9" />
        <KeyButton
          value="DEL"
          handleClick={del}
          textColor={theme.delEqualResetKeyColor}
          bgColor={theme.delResetKeyColor}
          shadowColor={theme.delResetKeyShadowColor}
        />
        <KeyButton value="4" />
        <KeyButton value="5" />
        <KeyButton value="6" />
        <KeyButton value="+" />
        <KeyButton value="1" />
        <KeyButton value="2" />
        <KeyButton value="3" />
        <KeyButton value="-" />
        <KeyButton value="." />
        <KeyButton value="0" />
        <KeyButton value="/" />
        <KeyButton value="x" />
        <KeyButton
          value="RESET"
          handleClick={reset}
          textColor={theme.delEqualResetKeyColor}
          isBigger
          bgColor={theme.delResetKeyColor}
          shadowColor={theme.delResetKeyShadowColor}
        />
        <KeyButton
          value="="
          handleClick={calculate}
          textColor={
            theme.title === "violet"
              ? "hsl(198, 20%, 13%)"
              : theme.delEqualResetKeyColor
          }
          isBigger
          bgColor={theme.equalKeyColor}
          shadowColor={theme.equalKeyShadowColor}
        />
      </KeypadContainer>
    </Container>
  );
};

export default Calculator;
