"use client"; // Client Component

import React from "react";
import AIUsage from "./AIUsage";
import AIChart from "./AIChart";

const AIUsageChart = ({
  avalibaleCredit,
  totalUsage,
}: {
  avalibaleCredit: number;
  totalUsage: number;
}) => {
  return (
    <div>
      <AIChart avileveCredit={avalibaleCredit} totalUsage={totalUsage} />
    </div>
  );
};

export default AIUsageChart;
