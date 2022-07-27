import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useUserProfileQuery } from "../../redux/features/document/documentApi";
import UserDocuments from "./UserDocuments";
import { iconRender } from "../dashboard/IconRender";

const Profile = () => {
  const { id } = useParams();
  // const id = useSelector(state => state.auth.user._id);
  const { data, isFetching } = useUserProfileQuery(id);
  console.log(data);
  return (
    <>
      {isFetching ? (
        <div className=" h-[calc(100vh_-_6rem)] flex justify-center items-center">
          <p className="btn loading">Loading </p>
        </div>
      ) : (
        <div className="container  mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2  ">
              {/* <!-- Profile Card --> */}
              <div className="bg-white p-3 border-t-4 border-blue-400    ">
                <div className="image overflow-hidden">
                  <img
                    className="h-28 w-28 md:h-56 md:w-56 mx-auto"
                    src={data?.user.pic}
                    alt="profile-photo"
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {data?.user.name}
                </h1>
                <h3 className="text-sm text-gray-600 hover:text-gray-700 leading-6">
                  {data?.user.username}
                </h3>
                <span className="text-md font-semibold text-gray-600 hover:text-gray-700 leading-6">
                  {data?.user.institute}
                </span>
              </div>
              {/* <!-- End of profile card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/12 mx-2 h-64">
              {/* <!-- Profile tab -->
                <!-- About Section --> */}
              <div className="bg-white   rounded-sm border shadow-md">
                <div className="flex flex-col p-5 space-y-4  ">
                  <div className="space-x-28">
                    <span className="font-bold text-md">Name</span>
                    <span className="text-gray-500">{data?.user.name}</span>
                  </div>
                  <hr />
                  <div className="space-x-24">
                    <span className="font-bold text-md">Gender</span>
                    <span className="text-gray-500">{data?.user.gender}</span>
                  </div>
                  <hr />
                  <div className="space-x-28">
                    <span className="font-bold text-md">Email</span>
                    <span className="text-gray-500">{data?.user.email}</span>
                  </div>
                  <hr />
                  <div className="space-x-20">
                    <span className="font-bold text-md">Field of Study</span>
                    <span className="text-gray-500">
                      {data?.user.fieldofstudy}
                    </span>
                  </div>
                  <hr />
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <p className="font-bold text-lg mb-2">Uploaded Documents</p>
                <hr />
                <div className="flex gap-5 p-2 flex-wrap">
                  {data?.documents.map(doc => (
                    <div
                      key={doc._id}
                      className="card card-compact border w-38 bg-base-100 shadow-lg"
                    >
                      <figure>
                        <img
                          className="w-12 h-12 mt-2"
                          src={iconRender(doc.filetype)}
                          alt="document"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="font-bold text-lg">{doc.title}</h2>
                        <div className="flex gap-2 justify-center items-center"></div>
                        <div className="card-actions justify-end">
                          <div className="flex gap-6 ">
                            <div className="flex items-center ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                              </svg>
                              <span>10</span>
                            </div>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
