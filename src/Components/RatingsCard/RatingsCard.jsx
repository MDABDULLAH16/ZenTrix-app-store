import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingsCard = ({ ratings }) => {
  const sortRatings = [...ratings].sort((a, b) => {
    const a5 = parseInt(a.name);
    const a1 = parseInt(b.name);
    return a1 - a5;
  });
  // console.log(sortRatings);

  return (
    <div className="w-full h-64  py-4 ">
      <h2 className="text-2xl text-left font-semibold mb-3 ml-2 ">Ratings</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={sortRatings}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsCard;
