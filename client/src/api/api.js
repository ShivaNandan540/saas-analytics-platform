import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = token;
  }
  return req;
});

// 🔥 AUTO EVENT TRACK FUNCTION
export const trackEvent = async (eventType) => {
  try {
    await API.post("/event", { event_type: eventType });
  } catch (err) {
    console.log("Tracking failed:", err);
  }
};

export default API;