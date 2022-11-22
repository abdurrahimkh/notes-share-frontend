import React from "react";

const Stats = () => {
  return (
    <section className="bg-blue-100">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Rapidly Growing Community
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            The community is constantly growing and there are always new and
            interesting notes to be found. The community is also very friendly
            and helpful, so if you have any questions about using the site or
            finding notes, you can always ask for help.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col rounded-lg border-2 border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Users Join Daily
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                100
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border-2 border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Documents Uploads Daily
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                50
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
