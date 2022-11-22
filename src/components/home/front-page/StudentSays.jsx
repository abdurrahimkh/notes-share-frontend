import AbdulAzizPic from "../../../assets/images/abdul_aziz_avatar.jpg";
import YahyaPic from "../../../assets/images/yahya_avatar.jpg";
import AizazPic from "../../../assets/images/aizaz_avatar.jpg";
const StudentSays = () => {
  return (
    <div className=" mx-auto bg-white py-10 px-14">
      <section className="text-center text-gray-800">
        <h2 className="mb-12 text-3xl font-bold">What's Students Says</h2>

        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img src={YahyaPic} className="w-32 rounded-full shadow-lg" />
            </div>
            <h5 className="mb-4 text-lg font-bold">Yahya Khan</h5>
            <h6 className="mb-4 font-medium text-blue-600">Economics</h6>
            <p className="mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                className="inline-block w-6 pr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              A great website for finding study materials and taking exams. I
              recommend it without a doubt!
            </p>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img src={AbdulAzizPic} className="w-32 rounded-full shadow-lg" />
            </div>
            <h5 className="mb-4 text-lg font-bold">Abdul Aziz</h5>
            <h6 className="mb-4 font-medium text-blue-600">Computer Science</h6>
            <p className="mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                className="inline-block w-6 pr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              Super helpful and great summaries that are really good for
              learning. A great platform, can only recommend!
            </p>
          </div>
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={AizazPic}
                className="h-32 w-32 rounded-full object-cover shadow-lg"
              />
            </div>
            <h5 className="mb-4 text-lg font-bold">Aizaz Ali Khan</h5>
            <h6 className="mb-4 font-medium text-blue-600">Agriculture</h6>
            <p className="mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                className="inline-block w-6 pr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              Notes Share helped me a lot. I really benefited for the exams.
              There are a lot of useful studies here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentSays;
