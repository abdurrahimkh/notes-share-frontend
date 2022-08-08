import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/features/questions/questionAction";
import QuestionCard from "./QuestionCard";
import Loader from "../loader/Loader";
const QuestionsList = () => {
  const dispatch = useDispatch();
  const { isLoading, questions } = useSelector(state => state.questions);
  console.log(questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <div>
      <div className="container p-5">
        {isLoading ? (
          <Loader />
        ) : (
          questions?.map(question => {
            return <QuestionCard key={question._id} question={question} />;
          })
        )}
      </div>
    </div>
  );
};

export default QuestionsList;
