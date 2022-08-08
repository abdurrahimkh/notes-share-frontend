import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { questionDetails } from "../../redux/features/questions/questionAction";

const QuestionDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, eachQuestion } = useSelector(state => state.questions);
  console.log(eachQuestion);

  useEffect(() => {
    dispatch(questionDetails(id));
  }, []);

  return (
    <>
      <div class="py-5 px-10 lg:px-64">
        <div class="flex flex-col justify-between rounded-lg border-2 bg-white p-4 leading-normal   ">
          <div class="mb-4">
            <div class="mb-2 text-2xl font-bold text-gray-900">
              {eachQuestion.title}
            </div>
            <p class="text-base text-gray-700">{eachQuestion.description}</p>
          </div>
          <div class="flex items-center">
            <img
              class="mr-4 h-10 w-10 rounded-full"
              src={eachQuestion?.postedBy?.pic}
              alt="Avatar of Writer"
            />
            <div class="text-sm">
              <p class="leading-none text-gray-900">
                {eachQuestion?.postedBy?.name}
              </p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
      <div class="py-2 px-10 lg:px-64">
        <form class="rounded-lg border-2 bg-white p-2 ">
          <div class="-mx-3 mb-6 ">
            <h2 class="px-4 pt-3 pb-2 text-lg font-semibold text-gray-800">
              Your Answer
            </h2>
            <div class="mb-2 mt-2 w-full px-3 md:w-full">
              <textarea
                class="h-20 w-full resize-none rounded border border-gray-400 bg-gray-100 py-2 px-3 font-medium leading-normal placeholder-gray-700 focus:bg-white focus:outline-none"
                name="body"
                placeholder="Type...."
                required
              ></textarea>
            </div>
            <div class="divider px-3">(Optional)</div>
            <div class=" flex w-full  px-3 md:w-full">
              <div class=" flex flex-col items-center gap-5 text-gray-700 md:flex-row  lg:space-x-64">
                <input
                  class="block cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 lg:px-5"
                  id="file_input"
                  type="file"
                />
                <input
                  type="submit"
                  class="mr-1 rounded-lg border border-gray-400 bg-white py-1 px-4 font-medium tracking-wide text-gray-700 hover:bg-gray-100 "
                  value="Post Answer"
                />
              </div>
              <div></div>
            </div>
          </div>
        </form>
      </div>
      {eachQuestion?.answers?.map(answer => (
        <div>
          <div class="py-1 px-10 lg:px-64">
            {/* <!--Card 1--> */}

            <div class="flex flex-col justify-between rounded-lg border bg-white p-4 leading-normal   ">
              <div class="mb-4">
                <div class="mb-2   text-gray-900">{answer.text}</div>
                <p class="text-base text-gray-700">
                  {eachQuestion.description}
                </p>
              </div>
              <div class="flex items-center">
                <img
                  class="mr-4 h-10 w-10 rounded-full"
                  src={eachQuestion?.postedBy?.pic}
                  alt="Avatar of Writer"
                />
                <div class="text-sm">
                  <p class="leading-none text-gray-900">
                    {eachQuestion?.postedBy?.name}
                  </p>
                  <p class="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuestionDetails;
