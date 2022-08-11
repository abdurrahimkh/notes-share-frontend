import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getValues } from "../../redux/features/document/documentAction";
import { useApprovedDocumentsQuery } from "../../redux/features/document/documentApi";
import RecentNotes from "./RecentNotes";
import SearchSection from "./SearchSection";
import Loader from "../loader/Loader";
const Home = () => {
  console.log("HOME RENDER");
  const dispatch = useDispatch();
  const { data, isFetching } = useApprovedDocumentsQuery();

  useEffect(() => {
    dispatch(getValues());
    return () => {};
  }, []);

  return (
    <div>
      <SearchSection data={data} isFetching={isFetching} />
      <div className="divider text-xl font-bold md:mx-40 ">
        {" "}
        Recent Documents
      </div>
      {isFetching ? <Loader /> : <RecentNotes data={data} />}
    </div>
  );
};

export default Home;
