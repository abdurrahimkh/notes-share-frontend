import LoaderSm from "./LoaderSm";
const Progress = ({ progress }) => {
  return (
    <div className="flex flex-col gap-1">
      <LoaderSm />
      <div className="mt-2 w-48 rounded-full bg-gray-300">
        <div
          className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
          style={{ width: `${progress}` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Progress;
