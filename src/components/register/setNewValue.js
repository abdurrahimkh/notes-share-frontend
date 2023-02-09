import axios from 'axios';

export const fetchValues = async ({ setUniversities }) => {
  const res = await fetch('import.meta.env.VITE_REACT_API/api/documents/values', {
    method: 'post',
  });
  const result = await res.json();
  setUniversities(result.universities);
};

export const setNewValue = async value => {
  await axios({
    method: 'put',
    url: 'import.meta.env.VITE_REACT_API/api/users/addvalue',
    data: {
      newValue: value,
    },
  });
};
