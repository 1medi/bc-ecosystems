export default function WildlifeTable() {
  const data = [
    {
      habitat: "Old-growth and mature coniferous forests",
      species: `Moose, Mule Deer, Cougar, Lynx, Gray Wolf, Coyote, Black Bear, Wolverine, Fisher, Marten, Red Squirrel, Northern Flying Squirrel, Tailed Frog, Spotted Owl (at risk), Cascade Mantled Ground Squirrel (at risk), California Bighorn Sheep (at risk), Rocky Mountain Bighorn Sheep (at risk), Grizzly Bear (at risk), Caribou (at risk), Varied Thrush, Three-toed Woodpecker, Spruce Grouse, Golden-crowned Kinglet, Red-breasted Nuthatch, Mountain Chickadee, Winter Wren, Orange- crowned Warbler, Steller’s Jay, Cassin’s Finch, Hammond’s Flycatcher, Long-toed Salamander`,
    },
    {
      habitat: "Subalpine parkland",
      species: `Mountain Goat, Mule Deer, Rocky Mountain Elk, Caribou, Moose, Bighorn Sheep, Grizzly Bear, Black Bear, Hoary Marmot, Columbian Ground Squirrel, Porcupine, Golden- crowned Sparrow, Fox Sparrow, American Robin, Rufous Hummingbird`,
    },
    {
      habitat: "Young seral forests",
      species: `Moose, Mule Deer, Black Bear, Lynx, Coyote, Little Brown Myotis, Snowshoe Hare, Porcupine, Heather Vole, Deer Mouse, Masked Shrew, Northern Goshawk, Northern Hawk Owl, Northern Pygmy-Owl, Three- toed Woodpecker, Black-backed Woodpecker, Wilson’s Warbler, Rufous Hummingbird, Pine Grosbeak, Western Tanager, Dark- eyed Junco, Yellow-rumped Warbler, Bohemian Waxwing`,
    },
    {
      habitat: "Steep, rugged, south aspect grasslands",
      species: `Mountain Goat, Cougar, Hoary Marmot, Golden-mantled Ground Squirrel, Golden Eagle, Blue Grouse`,
    },
    {
      habitat: "Avalanche tracks",
      species: `Mountain Goat, Moose, Rocky Mountain Elk, Mule Deer, Black Bear, Grizzly Bear`,
    },
    {
      habitat: "Rocky cliffs, mountains, talus, and sparsely vegetated rocks",
      species: `Mountain Goat, Common Pika, Cascade Mantled Ground Squirrel (at risk), Columbian Ground Squirrel, Anatum Peregrine Falcon (at risk) Golden Eagle, California Bighorn Sheep (at risk), Rocky Mountain Bighorn Sheep (at risk)`,
    },
    {
      habitat:
        "Riparian areas, wetlands, meadows, floodplains, lakes, and streams",
      species: `Moose, Mule Deer, Black Bear, Coyote, Long-tailed Weasel, Little Brown Myotis, Beaver, Water Vole, Deer Mouse, Western Jumping Mouse, Meadow Jumping Mouse, Mountain Beaver, Harlequin Duck, American Dipper, Tailed Frog, Western Toad, Spotted Frog, Long-toed Salamander, Rainbow Trout, Cutthroat Trout`,
    },
  ];

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto my-8">
      <table className="min-w-full border border-gray-300 text-left text-sm text-gray-800">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 font-subheader text-green-900">
              Habitat Type
            </th>
            <th className="border px-4 py-2 font-subheader text-green-900">
              Wildlife Species
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="align-top">
              <td className="border px-4 py-3 w-1/3 font-body-bold">{row.habitat}</td>
              <td className="border px-4 py-3 whitespace-pre-line font-body-copy">
                {row.species}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
