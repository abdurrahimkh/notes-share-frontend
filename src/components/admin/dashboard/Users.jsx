import QuickStackCard from "./QuickStackCard";
import UsersTable from "./UsersTable";
import { allUsers } from "../../../redux/features/document/documentAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../template/SideMenu";
import UserFilter from "./Filter/UserFilter";
import { userPagination } from "../../../redux/features/document/documentSlice";
import LoaderSm from "../../loader/LoaderSm";
function Users() {
  const dispatch = useDispatch();
  const { users: usersCount, isLoading } = useSelector(
    state => state.documents
  );
  const token = useSelector(state => state.auth.user.token);
  useEffect(() => {
    dispatch(allUsers(token)).then(() => dispatch(userPagination()));
  }, [dispatch]);

  return (
    <div className="grid h-full grid-cols-6 gap-0 md:grid-cols-10">
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <SideMenu />
      </div>
      <div className="col-span-5 h-full md:col-span-9 lg:col-span-8">
        <div className="relative">
          <div className="flex h-screen flex-col overflow-y-auto">
            <div className="flex-shrink-0 p-5">
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <QuickStackCard
                    title="Total Users"
                    statics={usersCount && usersCount.length}
                  >
                    <i className="bi bi-people text-4xl"></i>
                  </QuickStackCard>
                </div>
                <UserFilter />
                <div>
                  {isLoading ? (
                    <div className="flex h-[50vh]   items-center justify-center">
                      <LoaderSm />
                    </div>
                  ) : (
                    <UsersTable />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
