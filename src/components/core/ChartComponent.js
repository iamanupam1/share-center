"use client";
import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChartComponent = () => {
  const data = {
    labels: ["NABIL", "ADBL", "API", "CITY", "CBBL"],
    datasets: [
      {
        label: "Last Transaction Price (LTP) ",
        data: [575, 254.5, 177.2, 607.9, 940],
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
  return <Bar data={data} width={400} height={200} />;
};

export default ChartComponent;
