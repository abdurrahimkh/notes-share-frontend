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

export const handleFieldChange = (selectedOption, setApproved) => {
  fetch(
    `http://localhost:8000/api/documents/search?field=${selectedOption.value.toLowerCase()}`
  )
    .then(res => res.json())
    .then(result => setApproved(result));
};

export const handleSubjectChange = (selectedOption, setApproved) => {
  fetch(
    `http://localhost:8000/api/documents/search?subject=${selectedOption.value}`
  )
    .then(res => res.json())
    .then(result => setApproved(result));
};
