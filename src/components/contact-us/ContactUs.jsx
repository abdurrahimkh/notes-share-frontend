import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { contactUs } from "../../redux/features/auth/authAction";
const ContactUs = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const submitMessage = data => {
    dispatch(
      contactUs({ name: data.name, email: data.email, message: data.message })
    );
  };
  return (
    <div className="flex min-h-screen p-6 md:min-h-[90vh] md:items-center">
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: 0 }}
        className="mx-auto mt-16 h-full max-w-md flex-1 overflow-hidden rounded-lg border border-blue-300 bg-base-100 shadow-xl md:mt-0"
      >
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700">
            Contact Us
          </h1>
          <label className="block text-sm">
            <span className="font-bold text-gray-700">Name</span>
            <input
              className="focus:shadow-outline-blue form-input mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none"
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
            <span className="font-bold text-gray-700">Email</span>
            <input
              className="focus:shadow-outline-blue form-input mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none"
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
            <span className="font-bold text-gray-700">Message</span>
            <textarea
              className="focus:shadow-outline-blue mt-1 block h-24 w-full resize-none rounded border p-1 text-sm focus:border-blue-400 focus:outline-none"
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
            className="focus:shadow-outline-blue mt-4 block w-full rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:cursor-pointer hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-500"
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
