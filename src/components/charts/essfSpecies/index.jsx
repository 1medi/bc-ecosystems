import { PieChart, Pie, Cell, Tooltip } from "recharts";

const speciesData = [
  { name: "Subalpine Fir", value: 50 },
  { name: "Engelmann Spruce", value: 20 },
  { name: "Sitka Alder", value: 10 },
  { name: "Whitebark Pine", value: 5 },
  { name: "Lodgepole Pine", value: 5 },
  { name: "Western Hemlock", value: 5 },
  { name: "Mountain Hemlock", value: 5 },
];

const speciesColors = ["#fbd84a", "#8884d8", "#38bdf8", "#f97316", "#4ade80", "#86efac", "#60a5fa"];

export default function ESSFSpecies() {
  return (
    <div className="flex flex-col items-center">
     <h2 className="font-subheader text-green-900">ESSF Zone Species Composition</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={speciesData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          isAnimationActive={true}
        >
          {speciesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={speciesColors[index % speciesColors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
