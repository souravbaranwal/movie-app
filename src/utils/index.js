export const generateEmptyArray = length =>
  new Array(length).fill(0).map((_, i) => i);