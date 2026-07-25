import { BLUE } from "../constants.js";

export const AIRPORT_PACK = {
  id: "airport", name: "Airport Hunt", tagline: "Let's explore the airport!",
  emoji: "✈️", available: true,
  zones: [
    {
      id: "gates", label: "Gates & Planes", emoji: "✈️",
      color: BLUE.dark, accent: BLUE.bright, bg: BLUE.sky,
      items: [
        { id: "airplane", name: "Airplane", nameEs: "Avión",   emoji: "✈️",  fact: "Some airplanes cruise 6 miles high — way above the clouds!",       factEs: "¡Algunos aviones vuelan a 10 kilómetros de altura — muy por encima de las nubes!", letters: "PLANE"  },
        { id: "gate",     name: "Gate",     nameEs: "Puerta",  emoji: "🚪",  fact: "Every gate has its own number so you know just where to board!",  factEs: "¡Cada puerta tiene su propio número para que sepas dónde abordar!",                letters: "GATE"   },
        { id: "runway",   name: "Runway",   nameEs: "Pista",   emoji: "🛬",  fact: "Runways are so long some stretch over 2 miles!",                   factEs: "¡Las pistas son tan largas que algunas miden más de 3 kilómetros!",                letters: "RUNWAY" },
        { id: "cockpit",  name: "Cockpit",  nameEs: "Cabina",  emoji: "🧑‍✈️", fact: "The cockpit is where the pilots fly the whole plane!",             factEs: "¡La cabina es donde los pilotos vuelan todo el avión!",                            letters: "COCKPIT"},
        { id: "wing",     name: "Wing",     nameEs: "Ala",     emoji: "🪽",  fact: "Airplane wings are curved to help lift the plane into the sky!",  factEs: "¡Las alas del avión son curvas para ayudar a elevarlo hacia el cielo!",             letters: "WING"   },
        { id: "luggage",  name: "Luggage",  nameEs: "Equipaje",emoji: "🧳",  fact: "Your suitcase rides in a special place called the cargo hold!",   factEs: "¡Tu maleta viaja en un lugar especial llamado bodega de carga!",                   letters: "LUGGAGE"},
      ],
    },
    {
      id: "food", label: "Food Court", emoji: "🍔",
      color: "#C0392B", accent: "#F1948A", bg: "#FDEDEC",
      items: [
        { id: "pretzel",  name: "Pretzel",  nameEs: "Pretzel",  emoji: "🥨", fact: "Pretzels are twisted into a knot before they're baked!",                 factEs: "¡Los pretzels se retuercen en forma de nudo antes de hornearse!",                    letters: "PRETZEL" },
        { id: "pizza",    name: "Pizza",    nameEs: "Pizza",    emoji: "🍕", fact: "Pizza was invented in Naples, Italy!",                                    factEs: "¡La pizza fue inventada en Nápoles, Italia!",                                        letters: "PIZZA"   },
        { id: "smoothie", name: "Smoothie", nameEs: "Batido",   emoji: "🥤", fact: "A smoothie blends fruit and ice into a cold, yummy drink!",              factEs: "¡Un batido mezcla fruta y hielo en una bebida fría y deliciosa!",                    letters: "SMOOTHIE"},
        { id: "sandwich", name: "Sandwich", nameEs: "Sándwich", emoji: "🥪", fact: "The sandwich is named after an English Earl who loved eating one!",     factEs: "¡El sándwich lleva el nombre de un conde inglés que amaba comerlo!",                 letters: "SANDWICH"},
        { id: "donut",    name: "Donut",    nameEs: "Dona",     emoji: "🍩", fact: "Donuts have a hole in the middle so they cook evenly all the way through!", factEs: "¡Las donas tienen un hoyo en el medio para que se cocinen parejo por dentro!",   letters: "DONUT"   },
        { id: "coffee",   name: "Coffee",   nameEs: "Café",     emoji: "☕", fact: "Coffee beans are actually seeds from a bright red coffee cherry!",       factEs: "¡Los granos de café son en realidad semillas de una cereza roja de café!",           letters: "COFFEE"  },
      ],
    },
    {
      id: "people", label: "People & Crew", emoji: "🧑‍✈️",
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
      items: [
        { id: "pilot",     name: "Pilot",            nameEs: "Piloto",              emoji: "🧑‍✈️", fact: "Pilots train for years before flying their first real passenger plane!",     factEs: "¡Los pilotos entrenan por años antes de volar su primer avión con pasajeros!",     letters: "PILOT" },
        { id: "attendant", name: "Flight Attendant",  nameEs: "Auxiliar de Vuelo",   emoji: "👩‍✈️", fact: "Flight attendants help keep everyone safe and comfortable in the sky!",       factEs: "¡Los auxiliares de vuelo ayudan a mantener a todos seguros y cómodos en el cielo!", letters: "CREW"  },
        { id: "security",  name: "Security Officer",  nameEs: "Oficial de Seguridad",emoji: "👮",   fact: "Security officers check bags to make sure everyone stays safe!",              factEs: "¡Los oficiales de seguridad revisan las maletas para que todos estén seguros!",    letters: "GUARD" },
        { id: "passenger", name: "Passenger",         nameEs: "Pasajero",            emoji: "🧑‍🦱",  fact: "Passengers are travelers just like you, headed somewhere new!",               factEs: "¡Los pasajeros son viajeros como tú, rumbo a un lugar nuevo!",                     letters: "FLYER" },
        { id: "k9",        name: "Airport Dog",       nameEs: "Perro del Aeropuerto",emoji: "🐕",   fact: "Some airports have special dogs trained to sniff things out!",                factEs: "¡Algunos aeropuertos tienen perros especiales entrenados para detectar cosas!",    letters: "DOG"   },
        { id: "handler",   name: "Baggage Handler",   nameEs: "Manejador de Equipaje",emoji: "🧑‍🔧", fact: "Baggage handlers load hundreds of suitcases onto every flight!",              factEs: "¡Los manejadores de equipaje cargan cientos de maletas en cada vuelo!",            letters: "CART"  },
      ],
    },
    {
      id: "signs", label: "Signs & Shops", emoji: "🛍️",
      color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC",
      items: [
        { id: "arrivals",   name: "Arrivals Sign",   nameEs: "Letrero de Llegadas", emoji: "🛬", fact: "The arrivals sign tells you where landing flights are coming in!",           factEs: "¡El letrero de llegadas te dice dónde están llegando los vuelos!",           letters: "ARRIVE" },
        { id: "departures", name: "Departures Sign", nameEs: "Letrero de Salidas",  emoji: "🛫", fact: "The departures sign shows every flight taking off today!",                   factEs: "¡El letrero de salidas muestra cada vuelo que despega hoy!",                 letters: "DEPART" },
        { id: "restroom",   name: "Restroom Sign",   nameEs: "Letrero de Baño",     emoji: "🚻", fact: "Restroom signs use simple pictures so travelers from any country understand!", factEs: "¡Los letreros de baño usan dibujos simples para que cualquier viajero los entienda!", letters: "SIGN" },
        { id: "giftshop",   name: "Gift Shop",       nameEs: "Tienda de Regalos",   emoji: "🎁", fact: "Gift shops sell souvenirs so you can remember your trip!",                    factEs: "¡Las tiendas de regalos venden recuerdos para que recuerdes tu viaje!",       letters: "SHOP"  },
        { id: "bookstore",  name: "Bookstore",       nameEs: "Librería",            emoji: "📚", fact: "Airport bookstores are the perfect place to grab something to read for your flight!", factEs: "¡Las librerías del aeropuerto son perfectas para conseguir algo que leer en tu vuelo!", letters: "BOOKS" },
      ],
    },
  ],
  bonusWords: [],
  bonusCategoryMeta: {},
  badges: [
    {
      id: "boarding_pro", name: "Boarding Pass Pro", emoji: "🎫",
      desc: "Find 3 things at the gate", color: BLUE.dark, accent: BLUE.bright,
      check: (d,z) => z[0].items.filter(i=>d[i.id]).length>=3,
      progress: (d,z) => ({cur:Math.min(z[0].items.filter(i=>d[i.id]).length,3),max:3}),
      hint: (d,z) => z[0].items.filter(i=>!d[i.id]).slice(0,2).map(i=>i.name).join(", "),
    },
    {
      id: "hungry_traveler", name: "Hungry Traveler", emoji: "🍕",
      desc: "Spot 3 things in the food court", color: "#C0392B", accent: "#F1948A",
      check: (d,z) => z[1].items.filter(i=>d[i.id]).length>=3,
      progress: (d,z) => ({cur:Math.min(z[1].items.filter(i=>d[i.id]).length,3),max:3}),
      hint: (d,z) => z[1].items.filter(i=>!d[i.id]).slice(0,2).map(i=>i.name).join(", "),
    },
    {
      id: "friendly_faces", name: "Friendly Faces", emoji: "🧑‍✈️",
      desc: "Meet 3 airport crew members", color: "#7B3FA0", accent: "#B565D6",
      check: (d,z) => z[2].items.filter(i=>d[i.id]).length>=3,
      progress: (d,z) => ({cur:Math.min(z[2].items.filter(i=>d[i.id]).length,3),max:3}),
      hint: (d,z) => z[2].items.filter(i=>!d[i.id]).slice(0,2).map(i=>i.name).join(", "),
    },
    {
      id: "sign_spotter", name: "Sign Spotter", emoji: "🛍️",
      desc: "Find 3 signs or shops", color: "#B8860B", accent: "#F4B942",
      check: (d,z) => z[3].items.filter(i=>d[i.id]).length>=3,
      progress: (d,z) => ({cur:Math.min(z[3].items.filter(i=>d[i.id]).length,3),max:3}),
      hint: (d,z) => z[3].items.filter(i=>!d[i.id]).slice(0,2).map(i=>i.name).join(", "),
    },
    {
      id: "super_spotter", name: "Super Spotter", emoji: "🌟",
      desc: "Find 12 things total", color: "#1A6E8F", accent: "#2ABBE8",
      check: (d) => Object.values(d).filter(Boolean).length>=12,
      progress: (d) => ({cur:Math.min(Object.values(d).filter(Boolean).length,12),max:12}),
      hint: () => "Keep exploring every zone!",
    },
    {
      id: "zone_master", name: "Zone Master", emoji: "🎯",
      desc: "Complete any full zone", color: "#8B4513", accent: "#D2691E",
      check: (d,z) => z.some(zone=>zone.items.every(i=>d[i.id])),
      progress: (d,z) => {
        const best=z.reduce((b,zone)=>{const n=zone.items.filter(i=>d[i.id]).length;return n>b.n?{n,total:zone.items.length}:b},{n:0,total:1});
        return {cur:best.n,max:best.total};
      },
      hint: (d,z) => {
        const c=[...z].sort((a,b)=>(b.items.filter(i=>d[i.id]).length/b.items.length)-(a.items.filter(i=>d[i.id]).length/a.items.length))[0];
        return `${c.label} is your closest!`;
      },
    },
    {
      id: "airport_ranger", name: "Airport Ranger", emoji: "🏅",
      desc: "Find all 23 things in the airport!", color: BLUE.goldDark, accent: BLUE.gold,
      check: (d,z) => z.flatMap(zone=>zone.items).every(i=>d[i.id]),
      progress: (d,z) => {const all=z.flatMap(zone=>zone.items);return {cur:all.filter(i=>d[i.id]).length,max:all.length};},
      hint: () => "Find everything — you can do it!",
    },
  ],
};
