import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#8a0078",
  primaryBright: "#8a0078",
  primaryDark: "#8a0078",
  secondary: "#8a0078",
  success: "#00c495",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#0b2b27",
  invertedContrast: "#FFFFFF",
  input: "#ebf4ea",
  tertiary: "#EFF4F5",
  text: "#8a0078",
  textDisabled: "#BDC2C4",
  textSubtle: "#8a0078",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#bf00d6",
  textDisabled: "#666171",
  textSubtle: "#bf00d6",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
