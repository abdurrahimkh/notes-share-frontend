import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import RatingModel from "./RatingModel";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useDispatch, useSelector } from "react-redux";
import { documentDetails } from "../../redux/features/document/documentAction";
import Comments from "./Comments";
import ViewModal from "./ViewModal";
import { iconRender } from "../../helpers/IconRender";
import LoaderSm from "../loader/LoaderSm";

const EachDocument = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    eachDocument: data,
    isLoading,
    rateLoading,
  } = useSelector(state => state.documents);

  useEffect(() => {
    dispatch(documentDetails(id));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-[89vh] justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <section className="mb-48 bg-gray-100 p-6 text-gray-800 md:mb-0">
            <div className=" mx-auto flex flex-col gap-6 text-center md:flex-row ">
              <div className="mt-10 w-full rounded-md bg-white px-6 py-3 sm:mt-0 sm:px-12 md:px-4 ">
                <span className="mb-2 block rounded-lg bg-yellow-100 text-indigo-600">
                  {data?.subject}
                </span>
                <h1 className="text-2xl font-extrabold text-gray-900">
                  {data?.title}
                </h1>
                <span>Description:</span>
                <p>{data?.description}</p>

                <div className="divider"></div>
                <div>
                  <Comments id={id} comments={data?.comments} />
                </div>
              </div>
              <div className="h-56 w-full rounded-md bg-gray-100 md:h-0  xl:col-span-3">
                <div className="card card-side bg-base-100 shadow-xl">
                  <div className="my-auto mx-12 hidden h-32 w-32 md:block">
                    <img src={iconRender(data?.filetype)} alt="file" />
                  </div>
                  <div className="card-body">
                    <label for="view-model" className="btn btn-info">
                      View Document
                    </label>
                    <ViewModal url={data?.url} />
                    <a
                      href={
                        data?.url?.slice(0, 51) +
                        "fl_attachment/" +
                        data?.url?.slice(51)
                      }
                      className="btn btn-success"
                    >
                      Download Document
                    </a>
                    <div className="flex   gap-14 rounded-lg border bg-white p-2">
                      <div>
                        <img
                          className="ml-3 h-20 w-20"
                          src={data?.postedBy?.pic}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm">Uploaded By</span>
                        <span className="font-bold tracking-wider">
                          {data?.postedBy?.name}
                        </span>
                        <span> {data?.createdAt?.slice(0, 10)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="mt-3 flex flex-col items-center ">
                  <div className="flex items-center rounded-lg border border-gray-400 p-3">
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={data?.ratings}
                      readOnly={true}
                    />
                    <p className="ml-2 text-sm font-medium text-gray-500">
                      {data?.noOfReviews} total
                    </p>
                  </div>
                  {rateLoading ? (
                    <div className="mt-2">
                      <LoaderSm />
                    </div>
                  ) : (
                    <label
                      for="rating-modal"
                      className="mt-2 rounded  rounded-bl-3xl rounded-br-3xl bg-blue-600 px-10 py-2  text-white hover:cursor-pointer"
                    >
                      <RatingModel docId={data?._id} />
                      <i className="bi bi-hand-thumbs-up-fill mr-1 text-orange-400 "></i>
                      Rate it!
                    </label>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EachDocument;
