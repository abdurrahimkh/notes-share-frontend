import AdminAvatar from "../../../assets/images/Admin_Pic.png";
import SideMenu from "../template/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  adminEmailUpdate,
  adminPasswordUpdate,
} from "../../../redux/features/auth/authAction";
import { useRef } from "react";

function InputLabel({ title }) {
  return (
    <label className="mb-1  block font-medium text-gray-700">{title}</label>
  );
}

const Settings = () => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.user._id);
  const emailRef = useRef();
  const passwordRef = useRef();
  const changeEmail = () => {
    dispatch(adminEmailUpdate({ id, email: emailRef.current.value })).then(
      () => (emailRef.current.value = "")
    );
  };
  const changePassword = () => {
    dispatch(
      adminPasswordUpdate({ id, password: passwordRef.current.value })
    ).then(() => (passwordRef.current.value = ""));
  };
  return (
    <div className="grid h-full grid-cols-6 gap-0 md:grid-cols-10">
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <SideMenu />
      </div>
      <div className="col-span-5 h-full md:col-span-9 lg:col-span-8">
        <div className="relative">
          <div className="flex h-screen flex-col overflow-y-auto">
            <div className="flex-shrink-0 p-5">
              <div className="grid gap-4 lg:grid-cols-5">
                <div className="order-2 lg:order-1 lg:col-span-3">
                  <div className="rounded-md bg-white shadow">
                    <div>
                      <div className="grid gap-4 px-5 py-4 lg:grid-cols-2">
                        <h2 className="col-span-2 text-xl font-semibold text-gray-600">
                          Edit Information
                        </h2>
                        <p className="whitespace-nowrap text-sm text-gray-400">
                          Enter new email or password to change
                        </p>
                        <div className="col-span-2">
                          <InputLabel title="New Email" />
                          <input
                            className="admin-input"
                            ref={emailRef}
                            placeholder="abcxyz@email.com"
                          />
                        </div>
                        <div className="flex  rounded-b-md py-1 ">
                          <button className="admin-btn" onClick={changeEmail}>
                            Change Email
                          </button>
                        </div>
                        <div className="col-span-2">
                          <InputLabel title="New Password" />
                          <input
                            ref={passwordRef}
                            className="admin-input"
                            type="password"
                            placeholder="*********"
                          />
                        </div>
                        <div className="flex  rounded-b-md  py-1 ">
                          <button
                            className="admin-btn"
                            onClick={changePassword}
                          >
                            Change Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 lg:col-span-2">
                  <div className="rounded-md bg-white shadow">
                    <form>
                      <div className="flex flex-col items-center px-5 py-4">
                        <h2 className="col-span-2 self-start text-xl font-semibold text-gray-600">
                          Profile
                        </h2>
                        <img
                          className="h-32 w-32 rounded-full"
                          src={AdminAvatar}
                          alt="admin_profile_pic"
                        />
                        <h4 className="mt-2 text-lg font-medium">Admin</h4>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
