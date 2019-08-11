const ELEMENTS = [
  {
    symbol: "+",
    name: "_PLUS",
    number: 1000,
    color: [201, 66, 61],
    type: "sp"
  },
  {
    symbol: "-",
    name: "_MINUS",
    number: 1001,
    color: [66, 120, 196],
    type: "sp"
  },
  {
    symbol: "/",
    name: "_MERGE",
    number: 1002,
    color: [66, 119, 195],
    type: "sp"
  },
  {
    symbol: "*",
    name: "_CLONE",
    number: 1003,
    color: [66, 119, 195],
    type: "sp"
  },
  {
    symbol: "H",
    name: "Hydrogen",
    number: 1,
    color: [99, 185, 213],
    type: "el"
  },
  {
    symbol: "He",
    name: "Helium",
    number: 2,
    color: [209, 201, 145],
    type: "el"
  },
  {
    symbol: "Li",
    name: "Lithium",
    number: 3,
    color: [76, 97, 104],
    type: "el"
  },
  {
    symbol: "Be",
    name: "Beryllium",
    number: 4,
    color: [200, 200, 200],
    type: "el"
  },
  {
    symbol: "B",
    name: "Boron",
    number: 5,
    color: [125, 83, 83],
    type: "el"
  },
  {
    symbol: "C",
    name: "Carbon",
    number: 6,
    color: [59, 59, 59],
    type: "el"
  },
  {
    symbol: "N",
    name: "Nitrogen",
    number: 7,
    color: [44, 198, 178],
    type: "el"
  },
  {
    symbol: "O",
    name: "Oxygen",
    number: 8,
    color: [111, 236, 152],
    type: "el"
  },
  {
    symbol: "F",
    name: "Fluorine",
    number: 9,
    color: [236, 196, 111],
    type: "el"
  },
  {
    symbol: "Ne",
    name: "Neon",
    number: 10,
    color: [190, 0, 134],
    type: "el"
  },
  {
    symbol: "Na",
    name: "Sodium",
    number: 11,
    color: [230, 157, 122],
    type: "el"
  },
  {
    symbol: "Mg",
    name: "Magnesium",
    number: 12,
    color: [158, 128, 234],
    type: "el"
  },
  {
    symbol: "Al",
    name: "Aluminum",
    number: 13,
    color: [121, 121, 121],
    type: "el"
  },
  {
    symbol: "Si",
    name: "Silicon",
    number: 14,
    color: [74, 64, 112],
    type: "el"
  },
  {
    symbol: "P",
    name: "Phosphorus",
    number: 15,
    color: [215, 70, 63],
    type: "el"
  },
  {
    symbol: "S",
    name: "Sulfur",
    number: 16,
    color: [55, 94, 124],
    type: "el"
  },
  {
    symbol: "Cl",
    name: "Chlorine",
    number: 17,
    color: [109, 29, 123],
    type: "el"
  },
  {
    symbol: "Ar",
    name: "Argon",
    number: 18,
    color: [154, 61, 165],
    type: "el"
  },
  {
    symbol: "K",
    name: "Potassium",
    number: 19,
    color: [77, 137, 70],
    type: "el"
  },
  {
    symbol: "Ca",
    name: "Calcium",
    number: 20,
    color: [240, 240, 240],
    type: "el"
  },
  {
    symbol: "Sc",
    name: "Scandium",
    number: 21,
    color: [95, 187, 119],
    type: "el"
  },
  {
    symbol: "Ti",
    name: "Titanium",
    number: 22,
    color: [90, 90, 90],
    type: "el"
  },
  {
    symbol: "V",
    name: "Vanadium",
    number: 23,
    color: [95, 158, 187],
    type: "el"
  },
  {
    symbol: "Cr",
    name: "Chromium",
    number: 24,
    color: [164, 136, 181],
    type: "el"
  },
  {
    symbol: "Mn",
    name: "Manganese",
    number: 25,
    color: [220, 74, 74],
    type: "el"
  },
  {
    symbol: "Fe",
    name: "Iron",
    number: 26,
    color: [171, 150, 125],
    type: "el"
  },
  {
    symbol: "Co",
    name: "Cobalt",
    number: 27,
    color: [67, 113, 230],
    type: "el"
  },
  {
    symbol: "Ni",
    name: "Nickel",
    number: 28,
    color: [186, 195, 149],
    type: "el"
  },
  {
    symbol: "Cu",
    name: "Copper",
    number: 29,
    color: [185, 87, 57],
    type: "el"
  },
  {
    symbol: "Zn",
    name: "Zinc",
    number: 30,
    color: [180, 180, 180],
    type: "el"
  },
  {
    symbol: "Ga",
    name: "Gallium",
    number: 31,
    color: [57, 185, 117],
    type: "el"
  },
  {
    symbol: "Ge",
    name: "Germanium",
    number: 32,
    color: [151, 146, 115],
    type: "el"
  },
  {
    symbol: "As",
    name: "Arsenic",
    number: 33,
    color: [115, 132, 152],
    type: "el"
  },
  {
    symbol: "Se",
    name: "Selenium",
    number: 34,
    color: [66, 66, 66],
    type: "el"
  },
  {
    symbol: "Br",
    name: "Bromine",
    number: 35,
    color: [212, 117, 60],
    type: "el"
  },
  {
    symbol: "Kr",
    name: "Krypton",
    number: 36,
    color: [60, 160, 212],
    type: "el"
  },
  {
    symbol: "Rb",
    name: "Rubidium",
    number: 37,
    color: [210, 44, 31],
    type: "el"
  },
  {
    symbol: "Sr",
    name: "Strontium",
    number: 38,
    color: [255, 157, 41],
    type: "el"
  },
  {
    symbol: "Y",
    name: "Yttrium",
    number: 39,
    color: [177, 41, 255],
    type: "el"
  },
  {
    symbol: "Zr",
    name: "Zirconium",
    number: 40,
    color: [214, 228, 62],
    type: "el"
  },
  {
    symbol: "Nb",
    name: "Niobium",
    number: 41,
    color: [117, 220, 235],
    type: "el"
  },
  {
    symbol: "Mo",
    name: "Molybdenum",
    number: 42,
    color: [139, 163, 140],
    type: "el"
  },
  {
    symbol: "Tc",
    name: "Technetium",
    number: 43,
    color: [238, 161, 226],
    type: "el"
  },
  {
    symbol: "Ru",
    name: "Ruthenium",
    number: 44,
    color: [86, 62, 50],
    type: "el"
  },
  {
    symbol: "Rh",
    name: "Rhodium",
    number: 45,
    color: [136, 209, 122],
    type: "el"
  },
  {
    symbol: "Pd",
    name: "Palladium",
    number: 46,
    color: [158, 171, 190],
    type: "el"
  },
  {
    symbol: "Ag",
    name: "Silver",
    number: 47,
    color: [220, 220, 220],
    type: "el"
  },
  {
    symbol: "Cd",
    name: "Cadmium",
    number: 48,
    color: [85, 96, 200],
    type: "el"
  },
  {
    symbol: "In",
    name: "Indium",
    number: 49,
    color: [64, 141, 60],
    type: "el"
  },
  {
    symbol: "Sn",
    name: "Tin",
    number: 50,
    color: [181, 164, 124],
    type: "el"
  },
  {
    symbol: "Sb",
    name: "Antimony",
    number: 51,
    color: [198, 89, 140],
    type: "el"
  },
  {
    symbol: "Te",
    name: "Tellurium",
    number: 52,
    color: [130, 116, 152],
    type: "el"
  },
  {
    symbol: "I",
    name: "Iodine",
    number: 53,
    color: [255, 0, 252],
    type: "el"
  },
  {
    symbol: "Xe",
    name: "Xenon",
    number: 54,
    color: [120, 136, 255],
    type: "el"
  },
  {
    symbol: "Cs",
    name: "Caesium",
    number: 55,
    color: [255, 212, 120],
    type: "el"
  },
  {
    symbol: "Ba",
    name: "Barium",
    number: 56,
    color: [233, 156, 156],
    type: "el"
  },
  {
    symbol: "La",
    name: "Lanthanum",
    number: 57,
    color: [139, 219, 190],
    type: "el"
  },
  {
    symbol: "Ce",
    name: "Cerium",
    number: 58,
    color: [255, 147, 41],
    type: "el"
  },
  {
    symbol: "Pr",
    name: "Praseodymium",
    number: 59,
    color: [86, 224, 25],
    type: "el"
  },
  {
    symbol: "Nd",
    name: "Neodymium",
    number: 60,
    color: [101, 137, 141],
    type: "el"
  },
  {
    symbol: "Pm",
    name: "Promethium",
    number: 61,
    color: [46, 233, 155],
    type: "el"
  },
  {
    symbol: "Sm",
    name: "Samarium",
    number: 62,
    color: [189, 100, 117],
    type: "el"
  },
  {
    symbol: "Eu",
    name: "Europium",
    number: 63,
    color: [108, 100, 189],
    type: "el"
  },
  {
    symbol: "Gd",
    name: "Gadolinium",
    number: 64,
    color: [110, 18, 137],
    type: "el"
  },
  {
    symbol: "Tb",
    name: "Terbium",
    number: 65,
    color: [53, 156, 80],
    type: "el"
  },
  {
    symbol: "Dy",
    name: "Dysprosium",
    number: 66,
    color: [68, 126, 231],
    type: "el"
  },
  {
    symbol: "Ho",
    name: "Holmium",
    number: 67,
    color: [231, 125, 70],
    type: "el"
  },
  {
    symbol: "Er",
    name: "Erbium",
    number: 68,
    color: [191, 73, 135],
    type: "el"
  },
  {
    symbol: "Tm",
    name: "Thulium",
    number: 69,
    color: [33, 66, 107],
    type: "el"
  },
  {
    symbol: "Yb",
    name: "Ytterbium",
    number: 70,
    color: [135, 135, 80],
    type: "el"
  },
  {
    symbol: "Lu",
    name: "Lutetium",
    number: 71,
    color: [209, 44, 44],
    type: "el"
  },
  {
    symbol: "Hf",
    name: "Hafnium",
    number: 72,
    color: [145, 209, 44],
    type: "el"
  },
  {
    symbol: "Ta",
    name: "Tantalum",
    number: 73,
    color: [127, 135, 175],
    type: "el"
  },
  {
    symbol: "W",
    name: "Tungsten",
    number: 74,
    color: [43, 106, 165],
    type: "el"
  },
  {
    symbol: "Re",
    name: "Rhenium",
    number: 75,
    color: [81, 47, 47],
    type: "el"
  },
  {
    symbol: "Os",
    name: "Osmium",
    number: 76,
    color: [48, 112, 96],
    type: "el"
  },
  {
    symbol: "Ir",
    name: "Iridium",
    number: 77,
    color: [201, 135, 106],
    type: "el"
  },
  {
    symbol: "Pt",
    name: "Platinum",
    number: 78,
    color: [80, 80, 8],
    type: "el"
  },
  {
    symbol: "Au",
    name: "Gold",
    number: 79,
    color: [237, 196, 116],
    type: "el"
  },
  {
    symbol: "Hg",
    name: "Mercury",
    number: 80,
    color: [128, 165, 172],
    type: "el"
  },
  {
    symbol: "Tl",
    name: "Thallium",
    number: 81,
    color: [172, 128, 137],
    type: "el"
  },
  {
    symbol: "Pb",
    name: "Lead",
    number: 82,
    color: [60, 124, 102],
    type: "el"
  },
  {
    symbol: "Bi",
    name: "Bismuth",
    number: 83,
    color: [255, 5, 6],
    type: "el"
  },
  {
    symbol: "Po",
    name: "Polonium",
    number: 84,
    color: [255, 255, 0],
    type: "el"
  },
  {
    symbol: "At",
    name: "Astatine",
    number: 85,
    color: [0, 255, 0],
    type: "el"
  },
  {
    symbol: "Rn",
    name: "Radon",
    number: 86,
    color: [218, 232, 58],
    type: "el"
  },
  {
    symbol: "Fr",
    name: "Francium",
    number: 87,
    color: [255, 108, 0],
    type: "el"
  },
  {
    symbol: "Ra",
    name: "Radium",
    number: 88,
    color: [0, 255, 255],
    type: "el"
  },
  {
    symbol: "Ac",
    name: "Actinium",
    number: 89,
    color: [66, 73, 24],
    type: "el"
  },
  {
    symbol: "Th",
    name: "Thorium",
    number: 90,
    color: [170, 61, 130],
    type: "el"
  },
  {
    symbol: "Pa",
    name: "Protactinium",
    number: 91,
    color: [61, 170, 130],
    type: "el"
  },
  {
    symbol: "U",
    name: "Uranium",
    number: 92,
    color: [156, 255, 0],
    type: "el"
  },
  {
    symbol: "Np",
    name: "Neptunium",
    number: 93,
    color: [0, 174, 255],
    type: "el"
  },
  {
    symbol: "Pu",
    name: "Plutonium",
    number: 94,
    color: [255, 144, 0],
    type: "el"
  },
  {
    symbol: "Am",
    name: "Americium",
    number: 95,
    color: [129, 51, 73],
    type: "el"
  },
  {
    symbol: "Cm",
    name: "Curium",
    number: 96,
    color: [255, 121, 208],
    type: "el"
  },
  {
    symbol: "Bk",
    name: "Berkelium",
    number: 97,
    color: [174, 135, 126],
    type: "el"
  },
  {
    symbol: "Cf",
    name: "Californium",
    number: 98,
    color: [143, 60, 180],
    type: "el"
  },
  {
    symbol: "Es",
    name: "Einsteinium",
    number: 99,
    color: [134, 196, 220],
    type: "el"
  },
  {
    symbol: "Fm",
    name: "Fermium",
    number: 100,
    color: [191, 220, 134],
    type: "el"
  },
  {
    symbol: "Md",
    name: "Mendelevium",
    number: 101,
    color: [220, 134, 134],
    type: "el"
  },
  {
    symbol: "No",
    name: "Nobelium",
    number: 102,
    color: [255, 217, 101],
    type: "el"
  },
  {
    symbol: "Lr",
    name: "Lawrencium",
    number: 103,
    color: [92, 36, 160],
    type: "el"
  },
  {
    symbol: "Rf",
    name: "Rutherfordium",
    number: 104,
    color: [107, 102, 117],
    type: "el"
  },
  {
    symbol: "Db",
    name: "Dubnium",
    number: 105,
    color: [176, 80, 50],
    type: "el"
  },
  {
    symbol: "Sg",
    name: "Seaborgium",
    number: 106,
    color: [37, 73, 135],
    type: "el"
  },
  {
    symbol: "Bh",
    name: "Bohrium",
    number: 107,
    color: [155, 175, 160],
    type: "el"
  },
  {
    symbol: "Hs",
    name: "Hassium",
    number: 108,
    color: [255, 86, 45],
    type: "el"
  },
  {
    symbol: "Mt",
    name: "Meitnerium",
    number: 109,
    color: [205, 205, 44],
    type: "el"
  },
  {
    symbol: "Ds",
    name: "Darmstadtium",
    number: 110,
    color: [58, 126, 72],
    type: "el"
  },
  {
    symbol: "Rg",
    name: "Roentgenium",
    number: 111,
    color: [28, 115, 235],
    type: "el"
  },
  {
    symbol: "Cn",
    name: "Copernicium",
    number: 112,
    color: [170, 69, 148],
    type: "el"
  },
  {
    symbol: "Nh",
    name: "Nihonium",
    number: 113,
    color: [143, 143, 143],
    type: "el"
  },
  {
    symbol: "Fl",
    name: "Flerovium",
    number: 114,
    color: [46, 237, 230],
    type: "el"
  },
  {
    symbol: "Mc",
    name: "Moscovium",
    number: 115,
    color: [190, 175, 100],
    type: "el"
  },
  {
    symbol: "Lv",
    name: "Livermorium",
    number: 116,
    color: [242, 46, 106],
    type: "el"
  },
  {
    symbol: "Ts",
    name: "Tennessine",
    number: 117,
    color: [112, 234, 120],
    type: "el"
  },
  {
    symbol: "Og",
    name: "Oganesson",
    number: 118,
    color: [255, 0, 185],
    type: "el"
  },
  {
    symbol: "Bn",
    name: "Bananium",
    number: 119,
    color: [237, 230, 116],
    type: "el"
  },
  {
    symbol: "Gb",
    name: "GravityBlockium",
    number: 120,
    color: [61, 230, 195],
    type: "el"
  },
  {
    symbol: "Bb",
    name: "BreakingBadium",
    number: 121,
    color: [48, 145, 65],
    type: "el"
  },
  {
    symbol: "Pi",
    name: 314159265359,
    number: 122,
    color: [77, 200, 230],
    type: "el"
  },
  {
    symbol: "Sir",
    name: "Sirnicanium",
    number: 123,
    color: [255, 0, 0],
    type: "el"
  },
  {
    symbol: "Ea",
    name: "Earthium",
    number: 124,
    color: [17, 119, 245],
    type: "el"
  }
]

module.exports = { ELEMENTS }
