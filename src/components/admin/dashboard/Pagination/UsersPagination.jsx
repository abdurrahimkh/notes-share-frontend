import { useDispatch, useSelector } from "react-redux";
import {
  userPrevPage,
  usersNextPage,
} from "../../../../redux/features/document/documentSlice";

const UsersPagination = () => {
  const dispatch = useDispatch();
  const { currentUserActivePage, filterUsers, showUsersPerPage } = useSelector(
    state => state.documents
  );

  return (
    <div className="btn-group m-2  justify-end ">
      <button
        className="btn btn-sm"
        disabled={currentUserActivePage <= 1}
        onClick={() => dispatch(userPrevPage())}
      >
        «
      </button>
      <button className="btn btn-sm">
        Page {currentUserActivePage} of{" "}
        {Math.ceil(filterUsers.length / showUsersPerPage)}
      </button>
      <button
        className="btn btn-sm"
        disabled={
          currentUserActivePage >=
          Math.ceil(filterUsers.length / showUsersPerPage)
        }
        onClick={() => dispatch(usersNextPage())}
      >
        »
      </button>
    </div>
  );
};

export default UsersPagination;
