import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register the required components for the chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = ({ monthsArray, userCountsArray }) => {
    const data = {
        labels: monthsArray,
        datasets: [
            {
                label: "user",
                data: userCountsArray,
                backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
