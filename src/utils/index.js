export const generateEmptyArray = length =>
  new Array(length).fill(0).map((_, i) => i);

export const checkEquality = (str1, str2) =>
  str1.toLowerCase().trim().includes(str2.toLowerCase().trim());

export const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};

export const isFavorite = (list, object) => {
  const index = list.findIndex(item => item.id === object.id);
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};

export const removeDuplicates = array => {
  const seen = new Set();

  return array.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);

    return !duplicate;
  });
};