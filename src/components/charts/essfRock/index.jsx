import { PieChart, Pie, Cell, Tooltip } from "recharts";

const rockData = [
  { name: "Sedimentary Rocks", value: 59.63 },
  { name: "Volcanic Rocks", value: 16.3 },
  { name: "Intrusive Rocks", value: 15.7 },
  { name: "Metamorphic Rocks", value: 6.48 },
  { name: "Ultramafic Rocks", value: 0.83 },
  { name: "Other/Unknown", value: 1.04 },
];

const rockColors = ["#d9bfa3", "#e07247", "#e99755", "#c2b6ae", "#b2b4a3", "#dddddd"];

const total = rockData.reduce((acc, curr) => acc + curr.value, 0);

export default function RockClassesPieChart() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-subheader text-green-900">Rock Classes of ESSF by Percentage</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={rockData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          isAnimationActive={true}
        >
          {rockData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={rockColors[index % rockColors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
