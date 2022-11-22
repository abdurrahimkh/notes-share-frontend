const Steps = () => {
  return (
    <div className="mx-auto bg-blue-100 px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-2xl">
        <p className="text-center text-2xl font-bold tracking-widest text-gray-900 md:text-4xl">
          4 Easy Steps
        </p>
        <div className="flex">
          <div className="mr-6 flex flex-col items-center">
            <div className="h-10 w-px opacity-0 sm:h-full" />
            <div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                1
              </div>
            </div>
            <div className="h-full w-px bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
            <div className="sm:mr-5">
              <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24">
                <img
                  className="text-deep-blue-accent-400 h-12 w-12 sm:h-16 sm:w-16"
                  src="https://cdn-icons-png.flaticon.com/512/5721/5721113.png"
                />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">
                Create Account
              </p>
              <p className="text-sm text-gray-700">
                One of the most important things to do when you start using
                Notes Share is to create an account. This will allow you to
                upload your notes and access other students from any device.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-6 flex flex-col items-center">
            <div className="h-10 w-px bg-gray-300 sm:h-full" />
            <div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                2
              </div>
            </div>
            <div className="h-full w-px bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
            <div className="sm:mr-5">
              <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24">
                <img
                  className="text-deep-blue-accent-400 h-12 w-12 sm:h-16 sm:w-16"
                  src="https://cdn-icons-png.flaticon.com/512/1066/1066646.png"
                />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">Login</p>
              <p className="text-sm text-gray-700">
                As a user, you can share your notes with others by logging in to
                your account. You can find updates on the latest notes shared by
                other users and create a new note for others to see.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-6 flex flex-col items-center">
            <div className="h-10 w-px bg-gray-300 sm:h-full" />
            <div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                3
              </div>
            </div>
            <div className="h-full w-px bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
            <div className="sm:mr-5">
              <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24">
                <img
                  className="text-deep-blue-accent-400 h-12 w-12 sm:h-16 sm:w-16"
                  src="https://cdn-icons-png.flaticon.com/512/1043/1043123.png"
                />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">
                Upload Notes/Ask Question
              </p>
              <p className="text-sm text-gray-700">
                Upload your notes that other students can take benefit of it .
                Ask any question you have and our best students will provide you
                with the best answer or notes possible.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-6 flex flex-col items-center">
            <div className="h-10 w-px bg-gray-300 sm:h-full" />
            <div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                4
              </div>
            </div>
            <div className="h-full w-px opacity-0" />
          </div>
          <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
            <div className="sm:mr-5">
              <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24">
                <img
                  className="text-deep-blue-accent-400 h-12 w-12 sm:h-16 sm:w-16"
                  src="https://cdn-icons-png.flaticon.com/512/4015/4015632.png"
                />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">
                Download Notes
              </p>
              <p className="text-sm text-gray-700">
                Download Notes that you can continue your learning journy even
                if you are offline. Download Notes easy to download notes with
                just one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
