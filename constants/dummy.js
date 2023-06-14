import assets from "./assets";
import Ape1 from "../assets/Ape1.webp";
import Ape2 from "../assets/Ape2.webp";
import Ape3 from "../assets/Ape3.webp";
import Ape4 from "../assets/Ape4.webp";
import Ape5 from "../assets/Ape5.webp";

const NFTData = [
  {
    id: "NFT-01",
    name: "Apehero",
    hash: "#200",
    highestBid: "0.7",
    time: {
      days: "07",
      hours: "05",
      mins: "50",
    },
    owner: {
      name: "Gideon Nwokpor",
      pic: assets.Owner,
    },
    image: Ape1,
  },
  {
    id: "NFT-02",
    name: "Apeking",
    hash: "#210",
    highestBid: "0.8",
    time: {
      days: "09",
      hours: "15",
      mins: "20",
    },
    owner: {
      name: "Gideon Nwokpor",
      pic: assets.Owner,
    },
    image: Ape2,
  },
  {
    id: "NFT-03",
    name: "Apelord",
    hash: "#222",
    highestBid: "0.3",
    time: {
      days: "04",
      hours: "10",
      mins: "55",
    },
    owner: {
      name: "Gideon Nwokpor",
      pic: assets.Owner,
    },
    image: Ape3,
  },
  {
    id: "NFT-04",
    name: "Apechief",
    hash: "#250",
    highestBid: "0.9",
    time: {
      days: "10",
      hours: "03",
      mins: "30",
    },
    owner: {
      name: "Gideon Nwokpor",
      pic: assets.Owner,
    },
    image: Ape4,
  },
  {
    id: "NFT-05",
    name: "Apehero",
    hash: "#230",
    highestBid: "0.5",
    time: {
      days: "08",
      hours: "15",
      mins: "57",
    },
    owner: {
      name: "Gideon Nwokpor",
      pic: assets.Owner,
    },
    image: Ape5,
  },
];

export { NFTData };
