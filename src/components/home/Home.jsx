import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getValues } from "../../redux/features/document/documentAction";
import { useApprovedDocumentsQuery } from "../../redux/features/document/documentApi";
import SearchSection from "./SearchSection";
const Home = () => {
  console.log("HOME RENDER");
  const dispatch = useDispatch();
  const { data, error, isLoading } = useApprovedDocumentsQuery();

  useEffect(() => {
    dispatch(getValues());
    return () => {};
  }, []);

  return (
    <div className="  h-screen bg-gradient-to-b from-gray-100 to to-blue-300 ">
      <SearchSection data={data} />
    </div>
  );
};

export default Home;
