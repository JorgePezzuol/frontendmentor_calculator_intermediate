import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    primary: string;
    mainBgColor: string;
    keypadBgColor: string;

    displayBgColor: string;

    keyBgColor: string;
    keyBgShadowColor: string;
    keyTextColor: string;

    delResetKeyColor: string;
    delResetKeyShadowColor: string;

    equalKeyColor: string;
    equalKeyShadowColor: string;

    delEqualResetKeyColor: string;

    displayTextColor: string;
  }
}
