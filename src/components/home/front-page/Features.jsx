import { TypeAnimation } from "react-type-animation";
const SectionTwo = () => {
  return (
    <div class="overflow-hidden bg-white p-10">
      <div class="container m-auto space-y-8 px-6 text-gray-500 md:px-12">
        <div>
          <h2 class="mt-4 text-center text-2xl font-bold text-gray-900 md:text-4xl">
            Notes Share provides verified study materials{" "}
            <br class="lg:block" hidden></br> from your course so you can study{" "}
            <TypeAnimation
              sequence={["Anytime", 2000, "Anywhere", 2000]}
              style={{ fontSize: "1em" }}
              wrapper="h3"
              repeat={Infinity}
            />
          </h2>
        </div>
        <div class="mt-16 grid divide-x divide-y overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-4">
          <div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
            <div class="relative space-y-8 p-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6672/6672119.png"
                class="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />
              <div class="space-y-2">
                <h5 class="group-hover:text-blue- text-xl font-medium text-gray-800 transition">
                  Study smarter
                </h5>
                <p class="text-sm text-gray-600">
                  No more sifting through hundreds of pages for your lecture
                  notes or assignments. Notes Share provides you with verified
                  study materials, so you can study anytime and anywhere, on any
                  device.
                </p>
              </div>
            </div>
          </div>

          <div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
            <div class="relative space-y-8 p-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4599/4599276.png"
                class="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />
              <div class="space-y-2">
                <h5 class="group-hover:text-blue- text-xl font-medium text-gray-800 transition">
                  Explore notes for your courses
                </h5>
                <p class="text-sm text-gray-600">
                  Search for the course you are in and read the latest guides
                  and insights on the topic. Study material is available in PDF,
                  DOC, PPT formats.
                </p>
              </div>
            </div>
          </div>
          <div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
            <div class="relative space-y-8 p-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1782/1782838.png"
                class="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5 class="group-hover:text-blue- text-xl font-medium text-gray-800 transition">
                  Share your notes with Othe Students
                </h5>
                <p class="text-sm text-gray-600">
                  Upload your work to Notes Share and share it with other
                  students to study online or download as PDF/Word. They will
                  also be able to leave comments on your work. Help each other
                  by sharing what you know!
                </p>
              </div>
            </div>
          </div>
          <div class="group relative bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
            <div class="relative space-y-8 rounded-lg border-dashed p-8 transition duration-300 group-hover:scale-90 group-hover:border group-hover:bg-white">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6778/6778872.png"
                class="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5 class="group-hover:text-blue- text-xl font-medium text-gray-800 transition">
                  Ask For Questions/Notes
                </h5>
                <p class="text-sm text-gray-600">
                  We all experience moments when our professor's teaching leaves
                  us with unanswered questions. It's tough to ask them in class
                  or wait for office hours, but now you can search together with
                  other students and find answers in the asnwers/notes they
                  share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
