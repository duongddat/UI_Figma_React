import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function SaleChart() {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        data: [10, 26, 40, 62, 83],
        backgroundColor: "#5840bb",
        borderColor: "#c7f2ff",
        borderWidth: 4,
        pointBorderColor: "#5840bb",
        fill: false,
        tension: 0.6,
        radius: 3,
        hoverRadius: 10,
      },
      {
        data: [20, 35, 55, 72, 92],
        backgroundColor: "#5840bb",
        borderColor: "#ffe5ee",
        borderWidth: 4,
        pointBorderColor: "#5840bb",
        fill: false,
        tension: 0.6,
        radius: 2,
        hoverRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#5840bb",
        titleColor: "#8A74E8",
        bodyColor: "#ffffff",
        borderWidth: 1,
        padding: 15,
        yAlign: "bottom",
        callbacks: {
          title: (tooltipItems) => {
            return `10.06 - ${tooltipItems[0].formattedValue * 25000}`;
          },
          label: (tooltipItem) => {
            return `$ ${tooltipItem.formattedValue * 100000}`;
          },
        },
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        border: {
          color: "#F3F6FF",
          width: 1,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#a0aac8",
        },
      },
      y: {
        border: {
          color: "#F3F6FF",
          width: 1,
        },
        grid: {
          display: true,
          color: "#F3F6FF",
        },
        min: 0,
        max: 100,
        ticks: {
          color: "#a0aac8",
          stepSize: 20,
          callback: function (value) {
            return value;
          },
        },
      },
    },
  };

  return <Line data={data} options={options}></Line>;
}

export default SaleChart;
