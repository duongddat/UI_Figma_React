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
import { useRef } from "react";

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
  const chartRef = useRef(null);

  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 90);
    gradient.addColorStop(0, "rgba(88, 64, 187, 0.2)");
    gradient.addColorStop(0.5, "rgba(88, 64, 187, 0.1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    return gradient;
  };

  const data = {
    labels: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [40, 28, 43, 30, 28, 45, 34],
        backgroundColor: "#5840BB",
        borderColor: "#5840BB",
        borderWidth: 2,
        pointBorderColor: "#5840bb",
        fill: {
          target: "origin",
          above: (context) => {
            const ctx = context.chart.ctx;
            return createGradient(ctx);
          },
          below: "#fff",
        },
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
        cornerRadius: {
          topLeft: 15,
          topRight: 5,
          bottomLeft: 5,
          bottomRight: 15,
        },
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

  return <Line ref={chartRef} data={data} options={options}></Line>;
}

export default VistorChart;
