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
    <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: 0 }}
        className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
      >
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Contact Us
          </h1>
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Name
            </span>
            <input
              className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="John Doe"
              {...register("name", {
                required: "Enter a name",
                pattern: {
                  value: /^[a-zA-Z]/,
                  message: "Invalid Name",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-2">{errors.name.message}</p>
            )}
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Email
            </span>
            <input
              className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
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
              <p className="text-red-600 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Message
            </span>
            <textarea
              className="block border rounded h-24 resize-none p-1 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
              placeholder="Your Message"
              {...register("message", {
                required: "Enter Your Message",
                maxLength: {
                  value: 500,
                },
              })}
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-2">
                {errors.message.message}
              </p>
            )}
          </label>
          <button
            disabled={!isValid}
            type="submit"
            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple disabled:bg-gray-500 hover:cursor-pointer"
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
