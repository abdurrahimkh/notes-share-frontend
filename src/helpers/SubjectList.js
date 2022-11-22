import { useSelector } from "react-redux";

export const subjectsList = () => {
  const { filterFields } = useSelector(state => state.documents);
  const result = filterFields?.map(field => field?.subjects);
  let subjects = [];
  for (let i = 0; i <= result?.length; i++) {
    result[i]?.forEach(element => {
      subjects.push(element);
    });
  }
  return subjects;
};
