import axios from "axios";

export const fetchValues = async ({ setUniversities }) => {
  const res = await fetch("http://localhost:8000/api/documents/values", {
    method: "post",
  });
  const result = await res.json();
  setUniversities(result.universities);
};

export const setNewValue = async value => {
  await axios({
    method: "put",
    url: "http://localhost:8000/api/users/addvalue",
    data: {
      newValue: value,
    },
  });
};
