import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const data = [
  { month: "Jan", max: 5, avg: 2, min: -1, precip: 200 },
  { month: "Feb", max: 6, avg: 3, min: 0, precip: 160 },
  { month: "Mar", max: 9, avg: 5, min: 1, precip: 140 },
  { month: "Apr", max: 13, avg: 8, min: 3, precip: 120 },
  { month: "May", max: 17, avg: 11, min: 6, precip: 140 },
  { month: "Jun", max: 20, avg: 14, min: 9, precip: 160 },
  { month: "Jul", max: 23, avg: 17, min: 11, precip: 100 },
  { month: "Aug", max: 23, avg: 17, min: 11, precip: 90 },
  { month: "Sep", max: 19, avg: 13, min: 8, precip: 120 },
  { month: "Oct", max: 13, avg: 9, min: 5, precip: 180 },
  { month: "Nov", max: 8, avg: 4, min: 1, precip: 240 },
  { month: "Dec", max: 5, avg: 2, min: -1, precip: 260 },
];

export default function ClimateChart() {
  return (
    <div className="w-full h-[70vw] max-h-[500px] min-h-[250px] sm:h-[500px] bg-white shadow p-4 sm:p-8 rounded-lg">
      <h3 className="text-center font-semibold mb-2 text-sm sm:text-base">
        Temperature and Precipitation – Grouse Mountain (1981–2010)
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            yAxisId="left"
            label={{ value: "°C", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: "mm", angle: 90, position: "insideRight" }}
          />
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              fontSize: "0.5rem",
              paddingTop: 12,
              lineHeight: "0.5 rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          />

          <Bar
            yAxisId="right"
            dataKey="precip"
            fill="#90ee90"
            name="Precipitation (mm)"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="max"
            stroke="red"
            name="Max Temp (°C)"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="avg"
            stroke="black"
            name="Avg Temp (°C)"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="min"
            stroke="blue"
            name="Min Temp (°C)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
