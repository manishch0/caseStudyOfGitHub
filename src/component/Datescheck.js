import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Chart = ({ DateCreated }) => {
  const data = [DateCreated];
  console.log(data);

  const sortData = (data) => {
    return data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  };
  const sortedData = sortData(data);

  return (
    <BarChart width={500} height={300} data={sortedData} >
      <XAxis dataKey="created_at"  />
      <YAxis fill="#333" />
      <Tooltip  />
      <Legend  />
      <Bar dataKey="created_at" fill="#333" />
    </BarChart>
  );
};

export default Chart;
