"use client";
import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Link from "next/link";

const noChartComponentDataLayout = () => {
  return (
    <Link
      href="/core/stocks"
      className="text-blue-500 hover:text-blue-700 underline"
    >
      Click here to add new stocks for Graphical View
    </Link>
  );
};

const ChartComponent = ({ chartComponentData }) => {
  const labelLists = chartComponentData?.map((data) => data.symbol);
  const dataList = chartComponentData?.map((data) => data.quantity);
  const data = {
    labels: labelLists,
    datasets: [
      {
        label: "Last Transaction Price (LTP) ",
        data: dataList,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return chartComponentData.length ? (
    <Bar data={data} width={400} height={200} />
  ) : (
    noChartComponentDataLayout()
  );
};

export default ChartComponent;
