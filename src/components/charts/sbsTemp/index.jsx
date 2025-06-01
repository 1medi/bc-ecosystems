import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

const climateData = [
  { month: "Jan", max: -3, avg: -7, min: -11, precip: 13 },
  { month: "Feb", max: 1, avg: -4, min: -9, precip: 5 },
  { month: "Mar", max: 6, avg: 1, min: -5, precip: 10 },
  { month: "Apr", max: 11, avg: 6, min: 0, precip: 25 },
  { month: "May", max: 17, avg: 12, min: 6, precip: 40 },
  { month: "Jun", max: 21, avg: 15, min: 9, precip: 65 },
  { month: "Jul", max: 23, avg: 16, min: 10, precip: 55 },
  { month: "Aug", max: 22, avg: 15, min: 9, precip: 45 },
  { month: "Sep", max: 16, avg: 10, min: 5, precip: 60 },
  { month: "Oct", max: 10, avg: 4, min: 0, precip: 55 },
  { month: "Nov", max: 2, avg: -2, min: -7, precip: 40 },
  { month: "Dec", max: -3, avg: -7, min: -11, precip: 30 },
];

export default function ClimateChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={climateData}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" />
        <YAxis
          yAxisId="left"
          label={{
            value: "Temperature (°C)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{
            value: "Precipitation (mm)",
            angle: -90,
            position: "insideRight",
          }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />

        {/* Precipitation (bar) */}
        <Bar
          yAxisId="right"
          dataKey="precip"
          fill="lightgreen"
          name="Precipitation (mm)"
        />

        {/* Temperature lines */}
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="max"
          stroke="red"
          name="Daily Max Temp (°C)"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="avg"
          stroke="black"
          name="Daily Avg Temp (°C)"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="min"
          stroke="skyblue"
          name="Daily Min Temp (°C)"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
