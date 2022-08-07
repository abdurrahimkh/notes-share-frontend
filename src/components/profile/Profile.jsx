import { useParams } from "react-router-dom";
import { useUserProfileQuery } from "../../redux/features/document/documentApi";
import { iconRender } from "../../helpers/IconRender";
import Loader from "../loader/Loader";

const Profile = () => {
  const { id } = useParams();
  const { data, isFetching } = useUserProfileQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  return (
    <>
      {isFetching ? (
        <div className=" flex h-[calc(100vh_-_6rem)] items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="container  mx-auto my-5 p-4">
          <div className="no-wrap md:-mx-3 md:ml-2 md:flex md:gap-12 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12  ">
              <div>
                <img
                  src={data?.user.pic}
                  alt="user_profile_pic"
                  className="w-full rounded-lg object-cover object-center shadow-md"
                />

                <div className="relative -mt-8 px-4  ">
                  <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="flex items-baseline">
                      <span className="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">
                        New
                      </span>
                      <div className="ml-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
                        {data.documents.length} documents
                      </div>
                    </div>

                    <h4 className="mt-1 truncate text-xl font-semibold uppercase leading-tight">
                      {data?.user.name}
                    </h4>

                    <div className="mt-1">
                      <span className="text-sm text-gray-600">
                        {data?.user.username}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-md font-semibold text-teal-600">
                        {data?.user.institute}
                      </span>
                      <span className="text-sm text-gray-600">
                        {/* (based on 234 ratings) */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of profile card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-3/5 ">
              {/* <!-- Profile tab -->
                <!-- About Section --> */}
              <i className="bi bi-info-square "></i>
              <span className="ml-2 text-xl font-light tracking-widest ">
                INFORMATION
              </span>
              <div className="mt-2  rounded-md md:border  md:shadow-md ">
                <table className="table w-full border  shadow-md   ">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td className="text-gray-500 ">{data?.user.name}</td>
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <td className="text-gray-500">{data?.user.gender}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td className="text-gray-500">{data?.user.email}</td>
                    </tr>
                    <tr>
                      <th>Field Of Study</th>
                      <td className="text-gray-500">
                        {data?.user.fieldofstudy}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div className="rounded-sm bg-white py-3 shadow-sm">
                <i className="bi bi-file-earmark-medical text-xl"></i>
                <span className="mb-2 ml-2 text-xl font-light tracking-widest">
                  Uploaded Documents
                </span>
                <hr />
                <div className="flex flex-wrap gap-5 p-2">
                  {data?.documents.length > 0 ? (
                    data?.documents.map(doc => (
                      <div
                        key={doc._id}
                        className="w-38 card card-compact border bg-base-100 shadow-lg"
                      >
                        <figure>
                          <img
                            className="mt-2 h-12 w-12"
                            src={iconRender(doc.filetype)}
                            alt="document"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="text-lg font-bold">{doc.title}</h2>
                          <div className="flex items-center justify-center gap-2"></div>
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
                    ))
                  ) : (
                    <span className="mx-auto mt-2 text-xl font-bold">
                      😕 No Documents Uploaded Yet
                    </span>
                  )}
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
