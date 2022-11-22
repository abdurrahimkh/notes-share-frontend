import { useNavigate, useParams } from "react-router-dom";
import { useUserProfileQuery } from "../../redux/features/document/documentApi";
import { iconRender } from "../../helpers/IconRender";
import Loader from "../loader/Loader";
import DeleteDocumentModel from "./DeleteDocumentModel";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isFetching, refetch } = useUserProfileQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const _id = useSelector(state => state.auth.user._id);

  return (
    <>
      {isFetching ? (
        <div className=" flex h-[calc(100vh_-_6rem)] items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="container mx-auto  my-5 p-4 ">
          <div className="no-wrap md:-mx-3 md:ml-2 md:flex md:gap-12 lg:ml-20  ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 lg:mt-10  lg:w-64 ">
              <div>
                <img
                  src={data?.user.pic}
                  alt="user_profile_pic"
                  className="w-full rounded-lg object-cover object-center shadow-md"
                />

                <div className="relative -mt-8 px-4  ">
                  <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="flex items-baseline">
                      {data?.documents.length < 5 ? (
                        <span className="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold  uppercase tracking-wide text-teal-800">
                          New
                        </span>
                      ) : (
                        <i className="bi bi-stars text-lg text-orange-400"></i>
                      )}
                      <div className="ml-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
                        {data?.documents.length} documents
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
            <div className="ml-5 mt-3 md:mt-0 md:ml-0 md:w-[64%] ">
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
                    <tr>
                      <th>Join Date</th>
                      <td className="text-gray-500">
                        {data?.user.createdAt.slice(0, 10)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div className="rounded-sm   shadow-sm">
                <i className="bi bi-file-earmark-medical text-xl"></i>
                <span className="mb-2 ml-2 text-xl font-light tracking-widest">
                  Uploaded Documents
                </span>
                <hr />
                <div className="flex flex-wrap gap-5 px-2 py-1">
                  {data?.documents.length > 0 ? (
                    data?.documents.map(doc => (
                      <div
                        key={doc._id}
                        className="card card-compact  w-44 border  bg-white shadow-lg "
                      >
                        <figure>
                          <img
                            onClick={() =>
                              navigate(`/dashboard/document/${doc._id}`)
                            }
                            className="mt-2 h-12 w-12 hover:cursor-pointer "
                            src={iconRender(doc.filetype)}
                            alt="document"
                          />
                        </figure>
                        <div className="card-body">
                          <h2
                            onClick={() =>
                              navigate(`/dashboard/document/${doc._id}`)
                            }
                            className="text-lg font-bold hover:cursor-pointer hover:underline"
                          >
                            {doc.title}
                          </h2>
                          <div className="flex items-center justify-center gap-2"></div>
                          <div className="card-actions justify-end">
                            <div className="flex gap-6 ">
                              <span>{doc.subject}</span>
                              {doc?.postedBy?._id === _id && (
                                <label for="delete-document-modal">
                                  <DeleteDocumentModel
                                    docId={doc?._id}
                                    refetch={refetch}
                                  />
                                  <i className="bi bi-trash text-lg hover:cursor-pointer"></i>
                                </label>
                              )}
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
