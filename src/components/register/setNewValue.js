import axios from "axios";

export const fetchValues = async ({ setUniversities }) => {
  const res = await fetch(
    "https://notes-share-fyp.herokuapp.com/api/documents/values",
    {
      method: "post",
    }
  );
  const result = await res.json();
  setUniversities(result.universities);
};

export const setNewValue = async value => {
  await axios({
    method: "put",
    url: "https://notes-share-fyp.herokuapp.com/api/users/addvalue",
    data: {
      newValue: value,
    },
  });
};
