export const generateEmptyArray = length =>
  new Array(length).fill(0).map((_, i) => i);

export const checkEquality = (str1, str2) =>
  str1.toLowerCase().trim().includes(str2.toLowerCase().trim());

export const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};