import { useEffect, useState } from "react";
import API, { trackEvent } from "../api/api";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard({ darkMode }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 🔥 TRACK PAGE VIEW
    trackEvent("page_view");

    API.get("/analytics")
      .then((res) => setData(res.data))
      .catch(() => alert("Error"));
  }, []);

  if (!data) return <h2 style={{ padding: 20 }}>Loading...</h2>;

  const chartData = {
    labels: data.events_by_type.map((e) => e.event_type),
    datasets: [
      {
        label: "Events",
        data: data.events_by_type.map((e) => e.count),
        backgroundColor: "#6366f1",
      },
    ],
  };

  return (
    <div style={{ padding: "25px" }}>

      <h2>Dashboard</h2>

      {/* BUTTON CLICK TRACK */}
      <button
        onClick={() => trackEvent("button_click")}
        style={{ marginBottom: "20px" }}
      >
        Test Click Event
      </button>

      <Bar data={chartData} />

    </div>
  );
}

export default Dashboard;