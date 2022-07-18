import React, { useEffect } from "react";
const token = JSON.parse(localStorage.getItem("user"));
const Dashboard = () => {
  useEffect(() => {
    const approvedDocuments = async () => {
      const res = await fetch("http://localhost:8000/api/documents/approved", {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
      const result = await res.json();
      console.log(result);
    };
    approvedDocuments();
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
