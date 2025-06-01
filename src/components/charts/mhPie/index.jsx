import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import MH from "../../../../src/assets/mh/pieImages/mountainHemlock.webp";
import AF from "../../../../src/assets/mh/pieImages/amabilisFir.webp";
import WH from "../../../../src/assets/mh/pieImages/westernHemlock.webp";
import YC from "../../../../src/assets/mh/pieImages/yellowCedar.webp";
import SA from "../../../../src/assets/mh/pieImages/sitkaAlder.webp";
import SF from "../../../../src/assets/mh/pieImages/subalpineFir.webp";

import { useState, useEffect } from "react";

const imageMap = {
  "Mountain hemlock": MH,
  "Amabilis fir": AF,
  "Western hemlock": WH,
  "Yellow-cedar": YC,
  "Sitka alder": SA,
  "Subalpine fir": SF,
};

const data = [
  { name: "Mountain hemlock", value: 35 },
  { name: "Amabilis fir", value: 30 },
  { name: "Western hemlock", value: 15 },
  { name: "Yellow-cedar", value: 7 },
  { name: "Sitka alder", value: 5 },
  { name: "Subalpine fir", value: 8 },
];

const COLORS = [
  "#bdbdbd", // Mountain hemlock
  "#e53935", // Amabilis fir (modern red)
  "#5e5a95", // Western hemlock
  "#fdd835", // Yellow-cedar
  "#26c6da", // Sitka alder
  "#ffa726", // Subalpine fir
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const species = payload[0].name;
    const imgSrc = imageMap[species];

    return (
      <div className="bg-white rounded shadow p-2 border border-gray-200 w-[80vw] max-w-[320px] h-auto">
        <img
          src={imgSrc}
          alt={species}
          className="w-full h-40 object-cover rounded mb-2"
        />
        <p className="text-center text-sm font-medium">{species}</p>
      </div>
    );
  }

  return null;
};

export default function MHPieChart() {
  const [radius, setRadius] = useState(180);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 480) setRadius(80);
      else if (width < 768) setRadius(120);
      else setRadius(180);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        MH Zone Species Composition
      </h2>

      <div className="relative w-full h-[70vw] max-h-[400px] min-h-[250px] sm:h-[50vw] sm:max-h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={radius}
              innerRadius={40}
              paddingAngle={3}
              label={({ name }) => name}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
