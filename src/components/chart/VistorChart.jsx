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
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function VistorChart() {
  const data = {
    labels: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [40, 28, 43, 30, 28, 45, 34],
        backgroundColor: "rgba(88, 64, 187, 0.1)",
        borderColor: "#5840BB",
        borderWidth: 2,
        pointBorderColor: "#5840bb",
        fill: true,
        tension: 0.6,
        radius: 3,
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
        max: 50,
        ticks: {
          color: "#a0aac8",
          stepSize: 25,
          callback: function (value) {
            return value + "K";
          },
        },
      },
    },
  };

  return <Line data={data} options={options}></Line>;
}

export default VistorChart;
