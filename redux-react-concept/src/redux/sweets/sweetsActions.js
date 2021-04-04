import { BUY_GULAB_JAMUN, BUY_JALEBI } from "./sweetsTypes";

export const buyJalebi = () => {
  return {
    type: BUY_JALEBI,
  };
};

export const buyGulabjamun = () => {
  return {
    type: BUY_GULAB_JAMUN,
  };
};
