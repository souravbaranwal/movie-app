
// Generates an empty array of a specified length.
export const generateEmptyArray = length =>
  new Array(length).fill(0).map((_, i) => i);


// Checks if two strings are equal after converting them to lowercase and removing leading/trailing spaces.
export const checkEquality = (str1, str2) =>
  str1.toLowerCase().trim().includes(str2.toLowerCase().trim());


// Constructs an image URL based on the provided path.
export const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};

// Checks if an object exists in a list by comparing their IDs.
export const isFavorite = (list, object) => {
  const index = list.findIndex(item => item.id === object.id);
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};


// Removes duplicate items from an array based on id
export const removeDuplicates = array => {
  const seen = new Set();

  return array.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);

    return !duplicate;
  });
};