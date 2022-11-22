import React from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/features/document/documentAction";
import LoaderSm from "../loader/LoaderSm";
import DeleteModal from "./DeleteModal";

const Comments = ({ id, comments }) => {
  const dispatch = useDispatch();
  const textRef = useRef();
  const currentUser = useSelector(state => state.auth.user._id);
  const { commentLoading } = useSelector(state => state.documents);

  const handleComment = () => {
    if (!textRef.current.value) {
      return toast.error("Add some text");
    }
    dispatch(addComment({ id, text: textRef.current.value })).then(
      () => (textRef.current.value = "")
    );
  };

  return (
    <div>
      <div className="mx-auto mb-2 flex max-w-2xl items-center justify-center rounded-lg border shadow-lg">
        <div className="w-full max-w-xl rounded-lg bg-white px-4 ">
          <div className="-mx-3 mb-2 flex flex-wrap">
            <h2 className="px-4 pt-1  text-lg text-gray-800">
              Add a new comment
            </h2>
            <div className="mb-2 mt-2 w-full px-3 md:w-full">
              <textarea
                ref={textRef}
                className="h-20 w-full resize-none rounded border border-gray-400 bg-gray-100 py-2 px-3 font-medium leading-normal placeholder-gray-700 focus:bg-white focus:outline-none"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="flex w-full items-start justify-center px-3 md:w-full ">
              <div className="-mr-1 ">
                {commentLoading ? (
                  <LoaderSm />
                ) : (
                  <button
                    disabled={commentLoading}
                    onClick={handleComment}
                    className="rounded bg-blue-600 px-5 py-2  text-white"
                  >
                    Comment
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {comments?.length > 0 && (
        <div className="mx-auto max-w-2xl">
          <div className=" rounded-lg border bg-white p-1 shadow-md  sm:p-3">
            <div className="flow-root">
              <ul role="list" className=" ">
                {comments?.map(comment => (
                  <li key={comment._id} className="">
                    <div className="mb-1 flex items-center space-x-4 rounded-lg border p-2">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={comment?.postedBy?.pic}
                          alt="avatar"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-500">
                          {comment.postedBy?.name}
                        </p>
                        <p className=" text-sm text-gray-500">
                          {comment?.text}
                        </p>
                      </div>
                      <label
                        for="delete-modal"
                        className="inline-flex items-center text-base font-semibold text-gray-900"
                      >
                        <DeleteModal commentId={comment._id} postId={id} />
                        {currentUser === comment.postedBy._id && (
                          <i className="bi bi-x text-lg hover:cursor-pointer"></i>
                        )}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
