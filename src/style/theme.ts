export const theme = {
  colors: {
    primary: "#0076D6",
    primaryLight: "#DFF1FF",
    primaryDark: "#002F70",
    secondary: "#F06800",
    secondaryLight: "#FDEFE3",
    secondaryDark: "#E7230D",
    brandLightOrange: "#F29016",
    brandLightBlue: "#0076D6",
    loyaltyBlue: "#285DA6",
    black: "#393939",
    gold: "#BF9B30",
    darkGold: "#937210",
    lightBlue: "#7DC5EF",
    white: "#FFF",
    warning: "#FFC122",
    errorDark: "#CD1B18",
    successDark: "#048108",
    darkPurple: "#4B0675",
    lightPurple: "#AB52E1",
    grey: {
      100: "#E1E1E1",
      200: "#A8A8A8",
      300: "#707070",
    },
    text: "#282828",
    error: {
      100: "#FFE5E5",
      200: "#CC0000",
      300: "#CD1B18",
    },
    success: {
      100: "#E5FFE8",
      200: "#048108",
    },
  },
  radii: [4, 8, 12, 50, 100],
  fontSizes: {
    xxs: 0.62,
    xs: 0.875,
    sm: 1.125,
    md: 1.375,
    l: 1.625,
    lg: 2,
    xl: 2.25,
    xxl: 2.625,
    xxxl: 3,
  },
};

export type FontSize = keyof typeof theme.fontSizes;
export type AppColors = keyof typeof theme.colors;
