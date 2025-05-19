import AlaskanBlueberry from "../assets/galleryImages/alaskanBlueberry.png";
import CarexNigricans from "../assets/galleryImages/carexNigricans.png";
import FoolsHuckleberry from "../assets/galleryImages/foolsHuckleberry.png";
import Huckleberry from "../assets/galleryImages/huckleberry.png";
import LeafBramble from "../assets/galleryImages/leafBramble.png";
import MhVeg1 from "../assets/galleryImages/mhVeg1.png";
import PartridgeFoot from "../assets/galleryImages/partridgeFoot.png";
import PipecleanerMoss from "../assets/galleryImages/pipecleanerMoss.png";
import QueensCup from "../assets/galleryImages/queensCup.png";
import SitkaValerian from "../assets/galleryImages/sitkaValerian.png";
import YellowMtnHeather from "../assets/galleryImages/yellowMtnHeather.png";

// Do NOT import JSX in a plain module like this. Instead, just export metadata.
// You'll import and use <Image360View /> directly in your Gallery.jsx later.

const galleryImages = [
  { id: 1, src: AlaskanBlueberry, alt: "Alaskan Blueberry", categories: ["Coastal"] },
  { id: 2, src: CarexNigricans, alt: "Carex Nigricans", categories: ["Coastal"] },
  { id: 3, src: FoolsHuckleberry, alt: "Fool's Huckleberry", categories: ["Coastal"] },
  { id: 4, src: Huckleberry, alt: "Huckleberry", categories: ["Coastal"] },
  { id: 5, src: LeafBramble, alt: "Leaf Bramble", categories: ["Coastal"] },
  { id: 6, src: MhVeg1, alt: "MH Vegetation", categories: ["Coastal"] },
  { id: 7, src: PartridgeFoot, alt: "Partridge Foot", categories: ["Coastal"] },
  { id: 8, src: PipecleanerMoss, alt: "Pipecleaner Moss", categories: ["Coastal"] },
  { id: 9, src: QueensCup, alt: "Queen's Cup", categories: ["Coastal"] },
  { id: 10, src: SitkaValerian, alt: "Sitka Valerian", categories: ["Coastal"] },
  { id: 11, src: YellowMtnHeather, alt: "Yellow Mountain Heather", categories: ["Coastal"] },
];

export default galleryImages;
