const THEMES = {
  colors: {
    primary: "#AEC741",
    secondary: "#554791",
    backgroundLight: "#FFF",
    backgroundDark: "#F7F8FA",
    shadow: "rgb(0, 0, 0, 0.1)",
  },
};

type Theme = typeof THEMES;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export type ThemeColors = keyof typeof THEMES.colors;

export default THEMES;
