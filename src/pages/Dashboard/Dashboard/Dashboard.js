import React from "react";
import Charts from "../Charts/Charts";
import ConversionRate from "../ConversionRate/ConversionRate";
import HeaderTwo from "../UIHome/HeaderTwo/HeaderTwo";
import ImportantRoutes from "../UIHome/ImportantRoutes/ImportantRoutes";
import TotalReports from "../UIHome/TotalReports/TotalReports";

const Dashboard = () => {
  return (
    <>
      <HeaderTwo />
      <div className="container ps-3 pe-1 mt-3">
        <TotalReports />
      </div>
      <div className="container px-4">
        <Charts />
      </div>
      <div className="container px-4 mt-3">
        <ConversionRate />
      </div>
      <div className="container px-4 mt-3 mb-5">
        <ImportantRoutes />
      </div>
      {/* <div className="container px-4 mt-4">
        <OrderTimeline />
      </div> */}
    </>
  );
};

export default Dashboard;
