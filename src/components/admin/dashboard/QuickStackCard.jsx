const QuickStackCard = ({ title, statics, children }) => {
  return (
    <div className="rounded-md shadow bg-white flex flex-col">
      <div className="flex space-x-4 items-center px-4 py-3">
        {children}
        <div className="flex flex-col space-y-1">
          <h3 className="font-lg text-gray-500">{title}</h3>
          <span className="font-semibold text-2xl text-gray-600">
            {statics}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuickStackCard;
