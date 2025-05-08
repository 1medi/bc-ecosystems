import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import MH from "../../../src/assets/pieImages/mh.png"

const imageMap = {
    'Mountain hemlock': MH,
    'Amabilis fir': '/images/amabilis-fir.jpg',
    'Western hemlock': '/images/western-hemlock.jpg',
    'Yellow-cedar': '/images/yellow-cedar.jpg',
    'Sitka alder': '/images/sitka-alder.jpg',
    'Subalpine fir': '/images/subalpine-fir.jpg',
  }

const data = [
  { name: 'Mountain hemlock', value: 35 },
  { name: 'Amabilis fir', value: 30 },
  { name: 'Western hemlock', value: 15 },
  { name: 'Yellow-cedar', value: 7 },
  { name: 'Sitka alder', value: 5 },
  { name: 'Subalpine fir', value: 8 },
]

const COLORS = [
  '#bdbdbd', // Mountain hemlock
  '#e53935', // Amabilis fir (modern red)
  '#5e5a95', // Western hemlock
  '#fdd835', // Yellow-cedar
  '#26c6da', // Sitka alder
  '#ffa726', // Subalpine fir
]

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const species = payload[0].name
      const imgSrc = imageMap[species]
  
      return (
        <div className="bg-white rounded shadow p-2 border border-gray-200 w-80 h-80">
          <img src={imgSrc} alt={species} className="w-full h-full object-fill rounded mb-2" />
          <p className="text-center text-sm font-medium">{species}</p>
        </div>
      )
    }
  
    return null
  }

  
export default function MHPieChart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">MH Zone Species Composition</h2>

      <ResponsiveContainer width="100%" height={360}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={40}
            paddingAngle={3}
            label={({ name }) => name}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />

        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
