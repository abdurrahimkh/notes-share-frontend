import React from "react";
import { useApprovedDocumentsQuery } from "../../redux/features/document/documentApi";
import SearchSection from "./SearchSection";
const Home = () => {
  const { data, error, isLoading } = useApprovedDocumentsQuery();
  return (
    <div className="  h-screen bg-gradient-to-b from-gray-100 to to-blue-300 ">
      <SearchSection data={data} />
    </div>
  );
};

export default Home;
