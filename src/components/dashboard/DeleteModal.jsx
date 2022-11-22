import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../redux/features/document/documentAction";
const DeleteModal = ({ commentId, postId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteComment({ postId, commentId }));
  };
  return (
    <>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Confirm Deletion</h3>
          <p className="py-4">
            <span className="font-semibold">
              The comment will be deleted immediately
            </span>
            <br />
            Are you sure you want to continue?
          </p>
          <div className="modal-action">
            <label
              for="delete-modal"
              className="btn btn-sm mt-2 flex gap-2 border-none bg-gray-600 px-7 text-white hover:bg-gray-700"
            >
              Cancel
            </label>
            <label
              onClick={handleDelete}
              for="delete-modal"
              className="btn btn-sm mt-2 flex gap-2 border-none bg-red-600 px-7 text-white hover:bg-red-700"
            >
              Yes, delete it
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
