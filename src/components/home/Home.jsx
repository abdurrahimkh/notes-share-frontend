import { useRef } from "react";
import {
  useApprovedDocumentsQuery,
  useRecentDocumentsQuery,
} from "../../redux/features/document/documentApi";
import RecentNotes from "./RecentNotes";
import SearchSection from "./SearchSection";
import Loader from "../loader/Loader";
import { motion } from "framer-motion";
const Home = () => {
  const { data, isFetching } = useApprovedDocumentsQuery();
  const { data: recent, isFetching: recentFetcing } = useRecentDocumentsQuery();
  const scrollRef = useRef(null);

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <SearchSection data={data} isFetching={isFetching} />
      <div className="mb:16 divider pt-10 text-xl font-bold md:mx-40 lg:mb-10 lg:pt-0 ">
        Recent Documents
      </div>
      <motion.button
        initial={{ y: -30 }}
        animate={{ y: 60 }}
        transition={{ duration: 1, repeat: Infinity }}
        onClick={executeScroll}
        aria-label="Scroll down"
        className="mx-auto mb-5 flex h-10 w-10 transform items-center justify-center rounded-full border border-gray-400 text-gray-400 duration-300 hover:scale-110 hover:border-indigo-600 hover:text-indigo-700 hover:shadow md:mb-28"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </motion.button>
      {recentFetcing ? (
        <Loader />
      ) : (
        <RecentNotes scrollRef={scrollRef} data={recent} />
      )}
    </div>
  );
};

export default Home;
