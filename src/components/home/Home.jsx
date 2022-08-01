import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getValues } from "../../redux/features/document/documentAction";
import { useApprovedDocumentsQuery } from "../../redux/features/document/documentApi";
import RecentNotes from "./RecentNotes";
import SearchSection from "./SearchSection";
const Home = () => {
  console.log("HOME RENDER");
  const dispatch = useDispatch();
  const { data, isFetching } = useApprovedDocumentsQuery();

  useEffect(() => {
    dispatch(getValues());
    return () => {};
  }, []);

  return (
    <div className="   bg-gradient-to-b from-gray-100 to to-blue-300 ">
      <SearchSection data={data} isFetching={isFetching} />
      <div className="divider mx-40 text-xl font-bold "> Recent Documents</div>
      <RecentNotes data={data} />
    </div>
  );
};

export default Home;
