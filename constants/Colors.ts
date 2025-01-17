import { EAffordability, EComplexity } from "@/constants/Types";

export const ColorGroups = {
  white: '#ffffff',
  grey: {
    100: '#f5f5f5',
    200: '#e0e0e0',
    400: '#757575',
    800: '#212121',
  },
  red: {
    100: '#fcd8d8',
    200: '#e56868',
    400: '#d70a0a',
  },
  green: {
    100: '#e6f4f1',
    200: '#7ebbae',
    400: '#046750',
  },
  blue: {
    100: '#a2c5f3',
    200: '#1c3ecc',
    400: '#000165',
  },
  purple: {
    50: '#faf6ff',
    100: '#f3ebff',
    200: '#8a8ce7',
    400: '#0e118f',
  },
  pink:{
    50: '#fff5f7',
    100: '#f3d6df',
    200: '#d987b3',
    400: '#ab4673',
    800: '#7a1e4b'
  }
};

export const ComplexityColor = {
  [EComplexity.SIMPLE]: ColorGroups.green['100'],
  [EComplexity.CHALLENGING]: ColorGroups.red['100'],
  [EComplexity.HARD]: ColorGroups.red['200'],
};

export const AffordabilityColor = {
  [EAffordability.AFFORDABLE]: ColorGroups.green['100'],
  [EAffordability.PRICEY]: ColorGroups.red['100'],
  [EAffordability.LUXURIOUS]: ColorGroups.red['200'],
}