import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useDispatch } from "react-redux";
import { addRating } from "../../redux/features/document/documentAction";
const RatingModel = ({ docId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <input type="checkbox" id="rating-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-black">
          <h3 className="text-lg font-bold">Rating</h3>
          <p className="py-4">
            <span className="font-semibold">How useful was this document?</span>
            <br />
            click on a star to rate it :
          </p>
          <div className="flex items-center justify-center">
            <Rating
              style={{ maxWidth: 200 }}
              value={0}
              onChange={selectedValue => {
                dispatch(
                  addRating({ documentId: docId, rating: selectedValue })
                );
              }}
            />
          </div>
          <div className="modal-action">
            <label
              for="rating-modal"
              className="btn btn-sm mt-2 flex gap-2 border-none bg-gray-600 px-7 text-white hover:bg-gray-700"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingModel;
