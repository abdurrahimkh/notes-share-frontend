const RenderButton = ({
  formSetup,
  nextPage,
  formState: { isValid },
  handleSubmit,
}) => {
  const submitForm = data => {
    window.alert(JSON.stringify(data, null, 2));
  };
  if (formSetup > 2) {
    return undefined;
  } else if (formSetup === 1) {
    return (
      <button
        onClick={() => nextPage()}
        type="button"
        disabled={!isValid}
        className="block w-full px-4 py-2  text-sm font-me dium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent disabled:bg-gray-400   active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
      >
        Next
      </button>
    );
  } else if (formSetup === 2) {
    return (
      <button
        type="button"
        onClick={handleSubmit(submitForm)}
        className="block w-full px-4 py-2  text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent  active:bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400  focus:outline-none focus:shadow-outline-purple"
      >
        Create Account
      </button>
    );
  } else {
    return (
      <button
        type="button"
        disabled={!isValid}
        onClick={() => nextPage()}
        className="block w-full px-4 py-2 cursor-pointer  text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent  active:bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 focus:outline-none focus:shadow-outline-purple"
      >
        Signup
      </button>
    );
  }
};

export default RenderButton;
