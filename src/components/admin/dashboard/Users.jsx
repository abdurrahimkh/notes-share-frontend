import QuickStackCard from "./QuickStackCard";
import { UsersIcon } from "@heroicons/react/outline";
import UsersTable from "./UsersTable";
import { allUsers } from "../../../redux/features/document/documentAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../template/SideMenu";
import NavBar from "../template/NavBar";
function Users() {
  const dispatch = useDispatch();
  const iconClass = "w-10 h-10 text-gray-400";
  const users = useSelector(state => state.documents.users);
  const token = useSelector(state => state.auth.user.token);
  console.log(users);
  const count = users && users.filter(user => user).length;
  console.log(count);
  useEffect(() => {
    dispatch(allUsers(token));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-6 md:grid-cols-10 gap-0 h-full">
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <SideMenu />
      </div>
      <div className="col-span-5 md:col-span-9 lg:col-span-8 h-full">
        <div className="relative">
          <NavBar />
          <div className="overflow-y-auto h-screen flex flex-col">
            <div className="flex-shrink-0 p-5" style={{ marginTop: 72 }}>
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <QuickStackCard title="Total Users" statics={count && count}>
                    <UsersIcon className={iconClass} />
                  </QuickStackCard>
                </div>
                <div>
                  <UsersTable />
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
