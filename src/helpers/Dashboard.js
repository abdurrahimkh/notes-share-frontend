// Dashboard Documents Logic
export const getSameValKey = (arry, key) => {
  const set = new Set();
  arry.forEach(item => {
    set.add(item[key]);
  });

  return [...set];
};

export const sortData = (arry, keys, key) => {
  const map = {};
  keys.forEach(key => {
    map[key] = [];
  });

  arry.forEach(item => {
    map[item[key]].push(item);
  });

  return map;
};
