import UserAvater from "../template/profile.png";
import { BriefcaseIcon } from "@heroicons/react/outline";
import SideMenu from "../template/SideMenu";
import NavBar from "../template/NavBar";

let defaultInputClass =
  "border p-2 w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 ";

let defaultButtonClass =
  "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md";

function InputLabel({ title }) {
  return (
    <label className="block  font-medium text-gray-700 mb-1">{title}</label>
  );
}

function SimpleInput({ type, placeholder }) {
  return (
    <input
      type={type}
      className={defaultInputClass}
      placeholder={placeholder}
    />
  );
}

const Settings = () => {
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
              <div className="grid lg:grid-cols-5 gap-4">
                <div className="order-2 lg:order-1 lg:col-span-3">
                  <div className="shadow rounded-md bg-white">
                    <form>
                      <div className="grid lg:grid-cols-2 gap-4 px-5 py-4">
                        <h2 className="col-span-2 text-xl text-gray-600 font-semibold">
                          Edit Information
                        </h2>
                        <p className="text-gray-400 whitespace-nowrap text-sm">
                          Enter new email or password to change
                        </p>
                        <div className="col-span-2">
                          <InputLabel title="Email" />
                          <SimpleInput
                            type="text"
                            placeholder="example@domain.com"
                          />
                        </div>
                        <div className="col-span-2">
                          <InputLabel title="Password" />
                          <SimpleInput type="password" placeholder="*******" />
                        </div>
                      </div>
                      <div className="flex flex-row-reverse bg-gray-50 rounded-b-md py-1 px-2">
                        <input
                          type="submit"
                          className={defaultButtonClass}
                          value="Change"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="order-1 lg:order-2 lg:col-span-2">
                  <div className="shadow rounded-md bg-white">
                    <form>
                      <div className="flex flex-col items-center px-5 py-4">
                        <h2 className="col-span-2 text-xl self-start text-gray-600 font-semibold">
                          Profile
                        </h2>
                        <img
                          className="rounded-full w-32 h-32"
                          src={UserAvater}
                          alt=""
                        />
                        <h4 className="text-lg font-medium mt-2">Admin</h4>
                        <div className="flex items-center text-gray-500">
                          <BriefcaseIcon className="w-4 h-4" />
                          <span className="text-sm ml-1">Super User</span>
                        </div>
                        <p className="w-full text-sm text-gray-500 text-center italic mt-2 p-3 rounded border-2 border-dashed">
                          Never mind your happiness; do your duty.
                        </p>
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
