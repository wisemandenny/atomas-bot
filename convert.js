const TYPES = {
  ELEMENT: "el",
  SPECIAL: "sp"
}

const elements = `H/Hydrogen/99,185,213
He/Helium/209,201,145
Li/Lithium/76,97,104
Be/Beryllium/200,200,200
B/Boron/125,83,83
C/Carbon/59,59,59
N/Nitrogen/44,198,178
O/Oxygen/111,236,152
F/Fluorine/236,196,111
Ne/Neon/190,0,134
Na/Sodium/230,157,122
Mg/Magnesium/158,128,234
Al/Aluminum/121,121,121
Si/Silicon/74,64,112
P/Phosphorus/215,70,63
S/Sulfur/55,94,124
Cl/Chlorine/109,29,123
Ar/Argon/154,61,165
K/Potassium/77,137,70
Ca/Calcium/240,240,240
Sc/Scandium/95,187,119
Ti/Titanium/90,90,90
V/Vanadium/95,158,187
Cr/Chromium/164,136,181
Mn/Manganese/220,74,74
Fe/Iron/171,150,125
Co/Cobalt/67,113,230
Ni/Nickel/186,195,149
Cu/Copper/185,87,57
Zn/Zinc/180,180,180
Ga/Gallium/57,185,117
Ge/Germanium/151,146,115
As/Arsenic/115,132,152
Se/Selenium/66,66,66
Br/Bromine/212,117,60
Kr/Krypton/60,160,212
Rb/Rubidium/210,44,31
Sr/Strontium/255,157,41
Y/Yttrium/177,41,255
Zr/Zirconium/214,228,62
Nb/Niobium/117,220,235
Mo/Molybdenum/139,163,140
Tc/Technetium/238,161,226
Ru/Ruthenium/86,62,50
Rh/Rhodium/136,209,122
Pd/Palladium/158,171,190
Ag/Silver/220,220,220
Cd/Cadmium/85,96,200
In/Indium/64,141,60
Sn/Tin/181,164,124
Sb/Antimony/198,89,140
Te/Tellurium/130,116,152
I/Iodine/255,0,252
Xe/Xenon/120,136,255
Cs/Caesium/255,212,120
Ba/Barium/233,156,156
La/Lanthanum/139,219,190
Ce/Cerium/255,147,41
Pr/Praseodymium/86,224,25
Nd/Neodymium/101,137,141
Pm/Promethium/46,233,155
Sm/Samarium/189,100,117
Eu/Europium/108,100,189
Gd/Gadolinium/110,18,137
Tb/Terbium/53,156,80
Dy/Dysprosium/68,126,231
Ho/Holmium/231,125,70
Er/Erbium/191,73,135
Tm/Thulium/33,66,107
Yb/Ytterbium/135,135,80
Lu/Lutetium/209,44,44
Hf/Hafnium/145,209,44
Ta/Tantalum/127,135,175
W/Tungsten/43,106,165
Re/Rhenium/81,47,47
Os/Osmium/48,112,96
Ir/Iridium/201,135,106
Pt/Platinum/80,80,8
Au/Gold/237,196,116
Hg/Mercury/128,165,172
Tl/Thallium/172,128,137
Pb/Lead/60,124,102
Bi/Bismuth/255,5,6
Po/Polonium/255,255,0
At/Astatine/0,255,0
Rn/Radon/218,232,58
Fr/Francium/255,108,0
Ra/Radium/0,255,255
Ac/Actinium/66,73,24
Th/Thorium/170,61,130
Pa/Protactinium/61,170,130
U/Uranium/156,255,0
Np/Neptunium/0,174,255
Pu/Plutonium/255,144,0
Am/Americium/129,51,73
Cm/Curium/255,121,208
Bk/Berkelium/174,135,126
Cf/Californium/143,60,180
Es/Einsteinium/134,196,220
Fm/Fermium/191,220,134
Md/Mendelevium/220,134,134
No/Nobelium/255,217,101
Lr/Lawrencium/92,36,160
Rf/Rutherfordium/107,102,117
Db/Dubnium/176,80,50
Sg/Seaborgium/37,73,135
Bh/Bohrium/155,175,160
Hs/Hassium/255,86,45
Mt/Meitnerium/205,205,44
Ds/Darmstadtium/58,126,72
Rg/Roentgenium/28,115,235
Cn/Copernicium/170,69,148
Nh/Nihonium/143,143,143
Fl/Flerovium/46,237,230
Mc/Moscovium/190,175,100
Lv/Livermorium/242,46,106
Ts/Tennessine/112,234,120
Og/Oganesson/255,0,185
Bn/Bananium/237,230,116
Gb/GravityBlockium/61,230,195
Bb/BreakingBadium/48,145,65
Pi/314159265359/77,200,230
Sir/Sirnicanium/255,0,0
Ea/Earthium/17,119,245`

function parseString(string) {
  const result = [
    { symbol: "+", name: "_Plus", color: [201, 66, 62], type: TYPES.SPECIAL },
    { symbol: "-", name: "_Minus", color: [66, 119, 195], type: TYPES.SPECIAL }
    // { symbol: '/', name: '_Merge', color: [66, 119, 195], type: TYPES.SPECIAL },
    // { symbol: '*', name: '_Clone', color: [66, 119, 195], type: TYPES.SPECIAL },
  ]

  let counter = 1
  return string.split("\n").map((line) => {
    const pieces = line.split("/")
    return {
      symbol: pieces[0],
      name: pieces[1],
      number: counter++,
      color: pieces[2].split(","),
      type: TYPES.ELEMENT
    }
  })
}

console.log(JSON.stringify(parseString(elements)))
// return parseString(string)
