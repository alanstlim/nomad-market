import THEMES from './theme';
type Theme = typeof THEMES;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type ThemeColors = keyof typeof THEMES.colors;

export default THEMES;
