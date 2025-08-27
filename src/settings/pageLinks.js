const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/our-boat", label: "Our Boat" },
  {
    href: "/our-tours",
    label: "Our Tours",
    children: [
      { href: "/our-tours/blue-lagoon-trogir-solta", label: "Blue Lagoon, Čiovo, Trogir, Šolta", image: "/assets/images/tours/lagoon.jpg" },
      { href: "/our-tours/blue-cave-five-islands", label: "Blue Cave & Five Islands", image: "/assets/images/tours/cave.jpg" },
      { href: "/our-tours/hvar-pakleni", label: "Hvar & Pakleni Islands", image: "/assets/images/tours/pakleni.jpg" },
      { href: "/our-tours/bol-golden-horn", label: "Bol & Golden Horn", image: "/assets/images/tours/zlatni-rat.jpg" },
    ],
  },

  { href: "/faq", label: "FAQ-s" },
  { href: "/contact", label: "Contact" },
];

export default pageLinks;
