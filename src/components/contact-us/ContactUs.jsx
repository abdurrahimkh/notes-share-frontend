import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const submitMessage = data => {
    console.log(data);
  };
  return (
    <div className="flex min-h-screen p-6 dark:bg-gray-900 md:min-h-[90vh]  md:items-center">
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: 0 }}
        className="mx-auto mt-36 h-full max-w-md flex-1 overflow-hidden rounded-lg border bg-white shadow-xl dark:bg-gray-800    md:mt-0"
      >
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Contact Us
          </h1>
          <label className="block text-sm">
            <span className="font-bold text-gray-700 dark:text-gray-400">
              Name
            </span>
            <input
              className="focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input mt-1 block w-full rounded border p-2 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              placeholder="John Doe"
              {...register("name", {
                required: "Enter a name",
                pattern: {
                  value: /^[a-zA-Z_ ]*$/,
                  message: "Invalid Name",
                },
              })}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </label>
          <label className="mt-4 block text-sm">
            <span className="font-bold text-gray-700 dark:text-gray-400">
              Email
            </span>
            <input
              className="focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input mt-1 block w-full rounded border p-2 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              placeholder="example@email.com"
              {...register("email", {
                required: "You must specify an email",
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </label>
          <label className="mt-4 block text-sm">
            <span className="font-bold text-gray-700 dark:text-gray-400">
              Message
            </span>
            <textarea
              className="focus:shadow-outline-purple dark:focus:shadow-outline-gray mt-1 block h-24 w-full resize-none rounded border p-1 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              placeholder="Your Message"
              {...register("message", {
                required: "Enter Your Message",
                maxLength: {
                  value: 500,
                },
              })}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </label>
          <button
            disabled={!isValid}
            type="submit"
            className="focus:shadow-outline-purple mt-4 block w-full rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:cursor-pointer hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-500"
            onClick={handleSubmit(submitMessage)}
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
