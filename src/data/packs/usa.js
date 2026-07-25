import { BLUE } from "../constants.js";

// USA pack — zoned by state (50 zones, one per state). Item ids are prefixed
// with the state's lowercase abbreviation (e.g. "ca_bridge") to guarantee
// global uniqueness against every other pack's item ids, since state.discovered
// is a single flat map keyed by item id across the whole app.
//
// Batch 1 (14 states populated): CA, TX, FL, NY, CO, HI, AK, WA, AZ, LA, IL, MA, NV, PA
// Remaining 36 states are present as zones with empty items — they render as
// "coming soon" on the map and in the Field Guide until a future content batch.
export const USA_PACK = {
  id: "usa", name: "USA Explorer", tagline: "50 states, 50 adventures!",
  emoji: "🇺🇸", available: true, mapType: "usaStates",
  zones: [
    {
      id: "al", label: "Alabama", emoji: "🗺️",
      color: "#1A4A7A", accent: "#3B9EE8", bg: "#EAF6FF",
      items: [

      ],
    },
    {
      id: "ak", label: "Alaska", emoji: "🐻‍❄️",
      color: "#C0392B", accent: "#F1948A", bg: "#FDEDEC",
      items: [
        { id: "ak_bear", name: "Polar Bear", nameEs: "Oso Polar", emoji: "🐻‍❄️", fact: "Polar bears have black skin under their white fur to soak up the sun's heat!", factEs: "¡Los osos polares tienen piel negra bajo su pelaje blanco para absorber el calor del sol!", letters: "POLAR" },
        { id: "ak_glacier", name: "Glacier Bay", nameEs: "Bahía de los Glaciares", emoji: "🧊", fact: "Alaska has thousands of glaciers — more than anywhere else in the US!", factEs: "¡Alaska tiene miles de glaciares — más que en cualquier otro lugar de EE.UU.!", letters: "GLACIER" },
        { id: "ak_salmon", name: "Salmon", nameEs: "Salmón", emoji: "🐟", fact: "Alaskan salmon swim all the way back to the exact stream where they were born!", factEs: "¡El salmón de Alaska nada de regreso exactamente al mismo arroyo donde nació!", letters: "SALMON" },
      ],
    },
    {
      id: "az", label: "Arizona", emoji: "🏜️",
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
      items: [
        { id: "az_canyon", name: "Grand Canyon", nameEs: "Gran Cañón", emoji: "🏜️", fact: "The Grand Canyon is so big it took 6 million years for the river to carve it!", factEs: "¡El Gran Cañón es tan grande que le tomó 6 millones de años al río tallarlo!", letters: "CANYON" },
        { id: "az_roadrunner", name: "Roadrunner", nameEs: "Correcaminos", emoji: "🐦", fact: "Roadrunners can run up to 20 miles per hour chasing their food!", factEs: "¡Los correcaminos pueden correr hasta 32 km/h persiguiendo su comida!", letters: "RUNNER" },
        { id: "az_cactus", name: "Saguaro Cactus", nameEs: "Cactus Saguaro", emoji: "🌵", fact: "A saguaro cactus can live to be over 150 years old!", factEs: "¡Un cactus saguaro puede vivir más de 150 años!", letters: "CACTUS" },
      ],
    },
    {
      id: "ar", label: "Arkansas", emoji: "🗺️",
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
      items: [

      ],
    },
    {
      id: "ca", label: "California", emoji: "🌉",
      color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC",
      items: [
        { id: "ca_bridge", name: "Golden Gate Bridge", nameEs: "Puente Golden Gate", emoji: "🌉", fact: "The Golden Gate Bridge is painted orange so ships can see it in the fog!", factEs: "¡El Puente Golden Gate está pintado de naranja para que los barcos lo vean entre la niebla!", letters: "BRIDGE" },
        { id: "ca_condor", name: "California Condor", nameEs: "Cóndor de California", emoji: "🦅", fact: "California condors have the biggest wingspan of any bird in North America!", factEs: "¡Los cóndores de California tienen la envergadura más grande de cualquier ave en Norteamérica!", letters: "CONDOR" },
        { id: "ca_redwood", name: "Redwood Tree", nameEs: "Secuoya", emoji: "🌲", fact: "Redwood trees can grow taller than a 30-story building!", factEs: "¡Las secuoyas pueden crecer más altas que un edificio de 30 pisos!", letters: "REDWOOD" },
      ],
    },
    {
      id: "co", label: "Colorado", emoji: "🏔️",
      color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF",
      items: [
        { id: "co_rockies", name: "Rocky Mountain National Park", nameEs: "Parque Nacional de las Montañas Rocosas", emoji: "🏔️", fact: "Colorado has more mountains over 14,000 feet than any other state!", factEs: "¡Colorado tiene más montañas de más de 4,200 metros que cualquier otro estado!", letters: "ROCKIES" },
        { id: "co_bighorn", name: "Bighorn Sheep", nameEs: "Borrego Cimarrón", emoji: "🐑", fact: "Bighorn sheep can climb steep cliffs most animals can't touch!", factEs: "¡Los borregos cimarrones pueden escalar acantilados que la mayoría de los animales no pueden tocar!", letters: "BIGHORN" },
        { id: "co_aspen", name: "Aspen Tree", nameEs: "Álamo Temblón", emoji: "🍂", fact: "Whole aspen groves can share one giant root system underground!", factEs: "¡Bosques enteros de álamos temblones pueden compartir un sistema de raíces gigante bajo tierra!", letters: "ASPEN" },
      ],
    },
    {
      id: "ct", label: "Connecticut", emoji: "🗺️",
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
      items: [

      ],
    },
    {
      id: "de", label: "Delaware", emoji: "🗺️",
      color: "#1A4A7A", accent: "#3B9EE8", bg: "#EAF6FF",
      items: [

      ],
    },
    {
      id: "fl", label: "Florida", emoji: "🐊",
      color: "#C0392B", accent: "#F1948A", bg: "#FDEDEC",
      items: [
        { id: "fl_gator", name: "Alligator", nameEs: "Caimán", emoji: "🐊", fact: "Alligators have been on Earth for over 150 million years!", factEs: "¡Los caimanes han existido en la Tierra por más de 150 millones de años!", letters: "GATOR" },
        { id: "fl_rocket", name: "Kennedy Space Center", nameEs: "Centro Espacial Kennedy", emoji: "🚀", fact: "Rockets have launched to the Moon from right here in Florida!", factEs: "¡Los cohetes han despegado hacia la Luna desde aquí mismo en Florida!", letters: "ROCKET" },
        { id: "fl_orange", name: "Orange", nameEs: "Naranja", emoji: "🍊", fact: "Florida grows more oranges than almost anywhere else in the world!", factEs: "¡Florida cultiva más naranjas que casi cualquier otro lugar del mundo!", letters: "ORANGE" },
      ],
    },
    {
      id: "ga", label: "Georgia", emoji: "🗺️",
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
      items: [

      ],
    },
    {
      id: "hi", label: "Hawaii", emoji: "🌋",
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
      items: [
        { id: "hi_volcano", name: "Kilauea Volcano", nameEs: "Volcán Kilauea", emoji: "🌋", fact: "Kilauea is one of the most active volcanoes on Earth!", factEs: "¡Kilauea es uno de los volcanes más activos de la Tierra!", letters: "VOLCANO" },
        { id: "hi_turtle", name: "Sea Turtle", nameEs: "Tortuga Marina", emoji: "🐢", fact: "Hawaiian green sea turtles can hold their breath for hours underwater!", factEs: "¡Las tortugas verdes marinas de Hawái pueden aguantar la respiración por horas bajo el agua!", letters: "TURTLE" },
        { id: "hi_hula", name: "Hula Dance", nameEs: "Danza Hula", emoji: "💃", fact: "Hula dancing tells a story using hand movements and hips!", factEs: "¡El baile hula cuenta una historia usando movimientos de manos y caderas!", letters: "HULA" },
      ],
    },
    {
      id: "id", label: "Idaho", emoji: "🗺️",
      color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC",
      items: [

      ],
    },
    {
      id: "il", label: "Illinois", emoji: "🫘",
      color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF",
      items: [
        { id: "il_bean", name: "Cloud Gate (The Bean)", nameEs: "Puerta de Nube (El Frijol)", emoji: "🫘", fact: "Chicago's giant shiny sculpture reflects the whole skyline like a mirror!", factEs: "¡La gigante escultura brillante de Chicago refleja todo el horizonte como un espejo!", letters: "BEAN" },
        { id: "il_deepdish", name: "Deep Dish Pizza", nameEs: "Pizza de Plato Hondo", emoji: "🍕", fact: "Chicago-style pizza is baked so deep it's eaten with a fork!", factEs: "¡La pizza estilo Chicago se hornea tan profunda que se come con tenedor!", letters: "DEEPDISH" },
        { id: "il_cardinal", name: "Northern Cardinal", nameEs: "Cardenal Norteño", emoji: "🐦", fact: "The bright red cardinal is Illinois's official state bird!", factEs: "¡El cardenal rojo brillante es el ave oficial del estado de Illinois!", letters: "CARDINAL" },
      ],
    },
    {
      id: "in", label: "Indiana", emoji: "🗺️",
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
      items: [

      ],
    },
    {
      id: "ia", label: "Iowa", emoji: "🗺️",
      color: "#1A4A7A", accent: "#3B9EE8", bg: "#EAF6FF",
      items: [

      ],
    },
    {
      id: "ks", label: "Kansas", emoji: "🗺️",
      color: "#C0392B", accent: "#F1948A", bg: "#FDEDEC",
      items: [

      ],
    },
    {
      id: "ky", label: "Kentucky", emoji: "🗺️",
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
      items: [

      ],
    },
    {
      id: "la", label: "Louisiana", emoji: "🎺",
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
      items: [
        { id: "la_jazz", name: "Jazz Trumpet", nameEs: "Trompeta de Jazz", emoji: "🎺", fact: "New Orleans, Louisiana is known as the birthplace of jazz music!", factEs: "¡Nueva Orleans, Luisiana es conocida como la cuna de la música jazz!", letters: "JAZZ" },
        { id: "la_bayou", name: "Louisiana Bayou", nameEs: "Pantano de Luisiana", emoji: "🌿", fact: "A bayou is a slow, swampy river full of cypress trees!", factEs: "¡Un pantano es un río lento y pantanoso lleno de árboles de ciprés!", letters: "BAYOU" },
        { id: "la_gumbo", name: "Gumbo", nameEs: "Gumbo", emoji: "🍲", fact: "Gumbo is a Louisiana stew that mixes French, African, and Spanish cooking!", factEs: "¡El gumbo es un guiso de Luisiana que mezcla cocina francesa, africana y española!", letters: "GUMBO" },
      ],
    },
    {
      id: "me", label: "Maine", emoji: "🗺️",
      color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC",
      items: [

      ],
    },
    {
      id: "md", label: "Maryland", emoji: "🗺️",
      color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF",
      items: [

      ],
    },
    {
      id: "ma", label: "Massachusetts", emoji: "⛵",
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
      items: [
        { id: "ma_mayflower", name: "Mayflower Ship", nameEs: "Barco Mayflower", emoji: "⛵", fact: "The Mayflower sailed to Massachusetts over 400 years ago!", factEs: "¡El Mayflower navegó hacia Massachusetts hace más de 400 años!", letters: "SHIP" },
        { id: "ma_lobster", name: "Lobster", nameEs: "Langosta", emoji: "🦞", fact: "Massachusetts fishing boats catch lobsters right off the coast!", factEs: "¡Los barcos pesqueros de Massachusetts atrapan langostas justo en la costa!", letters: "LOBSTER" },
        { id: "ma_cranberry", name: "Cranberry", nameEs: "Arándano Rojo", emoji: "🔴", fact: "Cranberries float, so farmers flood the fields with water to harvest them!", factEs: "¡Los arándanos rojos flotan, así que los agricultores inundan los campos con agua para cosecharlos!", letters: "CRANBERRY" },
      ],
    },
    {
      id: "mi", label: "Michigan", emoji: "🗺️",
      color: "#1A4A7A", accent: "#3B9EE8", bg: "#EAF6FF",
      items: [

      ],
    },
    {
      id: "mn", label: "Minnesota", emoji: "🗺️",
      color: "#C0392B", accent: "#F1948A", bg: "#FDEDEC",
      items: [

      ],
    },
    {
      id: "ms", label: "Mississippi", emoji: "🗺️",
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
      items: [

      ],
    },
    {
      id: "mo", label: "Missouri", emoji: "🗺️",
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
      items: [

      ],
    },
    {
      id: "mt", label: "Montana", emoji: "🗺️",
      color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC",
      items: [

      ],
    },
    {
      id: "ne", label: "Nebraska", emoji: "🗺️",
      color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF",
      items: [

      ],
    },
    {
      id: "nv", label: "Nevada", emoji: "🎰",
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
      items: [
        { id: "nv_lights", name: "Las Vegas Lights", nameEs: "Luces de Las Vegas", emoji: "🎰", fact: "Las Vegas is famous for its bright lights that you can see from space!", factEs: "¡Las Vegas es famosa por sus luces brillantes que se pueden ver desde el espacio!", letters: "LIGHTS" },
        { id: "nv_mustang", name: "Wild Mustang", nameEs: "Mustang Salvaje", emoji: "🐎", fact: "Nevada has more wild horses roaming free than any other state!", factEs: "¡Nevada tiene más caballos salvajes en libertad que cualquier otro estado!", letters: "MUSTANG" },
        { id: "nv_desert", name: "Desert Dunes", nameEs: "Dunas del Desierto", emoji: "🏜️", fact: "Nevada is the driest state in the entire United States!", factEs: "¡Nevada es el estado más seco de todo Estados Unidos!", letters: "DUNES" },
      ],
    },
    {
      id: "nh", label: "New Hampshire", emoji: "🗺️",
      color: "#1A4A7A", accent: "#3B9EE8", bg: "#EAF6FF",
      items: [

      ],
    },
    {
      id: "nj", label: "New Jersey", emoji: "🗺️",
      color: "#C0392B", accent: "#F1948A", bg: "#FDEDEC",
      items: [

      ],
    },
    {
      id: "nm", label: "New Mexico", emoji: "🗺️",
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
      items: [

      ],
    },
    {
      id: "ny", label: "New York", emoji: "🗽",
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
      items: [
        { id: "ny_liberty", name: "Statue of Liberty", nameEs: "Estatua de la Libertad", emoji: "🗽", fact: "The Statue of Liberty was a gift from France in 1886!", factEs: "¡La Estatua de la Libertad fue un regalo de Francia en 1886!", letters: "LIBERTY" },
        { id: "ny_bagel", name: "Bagel", nameEs: "Bagel", emoji: "🥯", fact: "New York bagels are boiled before they're baked — that's their secret!", factEs: "¡Los bagels de Nueva York se hierven antes de hornearse — ese es su secreto!", letters: "BAGEL" },
        { id: "ny_taxi", name: "Yellow Taxi", nameEs: "Taxi Amarillo", emoji: "🚕", fact: "New York's taxis have been bright yellow since the 1900s so they're easy to spot!", factEs: "¡Los taxis de Nueva York son amarillos brillantes desde principios del siglo 20 para que sean fáciles de ver!", letters: "TAXI" },
      ],
    },
    {
      id: "nc", label: "North Carolina", emoji: "🗺️",
      color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC",
      items: [

      ],
    },
    {
      id: "nd", label: "North Dakota", emoji: "🗺️",
      color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF",
      items: [

      ],
    },
    {
      id: "oh", label: "Ohio", emoji: "🗺️",
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
      items: [

      ],
    },
    {
      id: "ok", label: "Oklahoma", emoji: "🗺️",
      color: "#1A4A7A", accent: "#3B9EE8", bg: "#EAF6FF",
      items: [

      ],
    },
    {
      id: "or", label: "Oregon", emoji: "🗺️",
      color: "#C0392B", accent: "#F1948A", bg: "#FDEDEC",
      items: [

      ],
    },
    {
      id: "pa", label: "Pennsylvania", emoji: "🔔",
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
      items: [
        { id: "pa_bell", name: "Liberty Bell", nameEs: "Campana de la Libertad", emoji: "🔔", fact: "The Liberty Bell has a famous crack right through the middle!", factEs: "¡La Campana de la Libertad tiene una famosa grieta justo por el medio!", letters: "BELL" },
        { id: "pa_groundhog", name: "Groundhog", nameEs: "Marmota", emoji: "🐿️", fact: "Every February, a famous groundhog named Phil predicts the weather in Pennsylvania!", factEs: "¡Cada febrero, una famosa marmota llamada Phil predice el clima en Pensilvania!", letters: "GROUNDHOG" },
        { id: "pa_pretzel", name: "Soft Pretzel", nameEs: "Pretzel Blando", emoji: "🥨", fact: "Pennsylvania has been twisting soft pretzels since the 1700s!", factEs: "¡Pensilvania ha estado retorciendo pretzels blandos desde el siglo 18!", letters: "PRETZEL" },
      ],
    },
    {
      id: "ri", label: "Rhode Island", emoji: "🗺️",
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
      items: [

      ],
    },
    {
      id: "sc", label: "South Carolina", emoji: "🗺️",
      color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC",
      items: [

      ],
    },
    {
      id: "sd", label: "South Dakota", emoji: "🗺️",
      color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF",
      items: [

      ],
    },
    {
      id: "tn", label: "Tennessee", emoji: "🗺️",
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
      items: [

      ],
    },
    {
      id: "tx", label: "Texas", emoji: "🤠",
      color: "#1A4A7A", accent: "#3B9EE8", bg: "#EAF6FF",
      items: [
        { id: "tx_alamo", name: "The Alamo", nameEs: "El Álamo", emoji: "🏛️", fact: "The Alamo was an old mission that became a famous Texas landmark!", factEs: "¡El Álamo era una antigua misión que se convirtió en un famoso monumento de Texas!", letters: "ALAMO" },
        { id: "tx_armadillo", name: "Armadillo", nameEs: "Armadillo", emoji: "🦔", fact: "Armadillos wear their own natural armor made of bony plates!", factEs: "¡Los armadillos llevan su propia armadura natural hecha de placas óseas!", letters: "ARMOR" },
        { id: "tx_boots", name: "Cowboy Boots", nameEs: "Botas Vaqueras", emoji: "👢", fact: "Cowboy boots have pointed toes to slide into stirrups easily!", factEs: "¡Las botas vaqueras tienen punta para deslizarse fácilmente en los estribos!", letters: "BOOTS" },
      ],
    },
    {
      id: "ut", label: "Utah", emoji: "🗺️",
      color: "#C0392B", accent: "#F1948A", bg: "#FDEDEC",
      items: [

      ],
    },
    {
      id: "vt", label: "Vermont", emoji: "🗺️",
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
      items: [

      ],
    },
    {
      id: "va", label: "Virginia", emoji: "🗺️",
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
      items: [

      ],
    },
    {
      id: "wa", label: "Washington", emoji: "🗻",
      color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC",
      items: [
        { id: "wa_rainier", name: "Mount Rainier", nameEs: "Monte Rainier", emoji: "🗻", fact: "Mount Rainier is covered in more glacier ice than any other US mountain!", factEs: "¡El Monte Rainier está cubierto de más hielo glaciar que cualquier otra montaña de EE.UU.!", letters: "RAINIER" },
        { id: "wa_orca", name: "Orca Whale", nameEs: "Orca", emoji: "🐋", fact: "Orcas are actually the largest member of the dolphin family!", factEs: "¡Las orcas son en realidad el miembro más grande de la familia de los delfines!", letters: "ORCA" },
        { id: "wa_coffee", name: "Coffee Cup", nameEs: "Taza de Café", emoji: "☕", fact: "Seattle, Washington is famous as the birthplace of modern coffee shops!", factEs: "¡Seattle, Washington es famosa por ser la cuna de las cafeterías modernas!", letters: "BREW" },
      ],
    },
    {
      id: "wv", label: "West Virginia", emoji: "🗺️",
      color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF",
      items: [

      ],
    },
    {
      id: "wi", label: "Wisconsin", emoji: "🗺️",
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
      items: [

      ],
    },
    {
      id: "wy", label: "Wyoming", emoji: "🗺️",
      color: "#1A4A7A", accent: "#3B9EE8", bg: "#EAF6FF",
      items: [

      ],
    },
  ],
  bonusWords: [],
  bonusCategoryMeta: {},
  badges: [
    {
      id: "first_state", name: "First Stop", emoji: "📍",
      desc: "Find your first thing in any state", color: BLUE.dark, accent: BLUE.bright,
      check: (d) => Object.values(d).filter(Boolean).length >= 1,
      progress: (d) => ({cur: Math.min(Object.values(d).filter(Boolean).length, 1), max: 1}),
      hint: () => "Tap a highlighted state to start exploring!",
    },
    {
      id: "road_tripper", name: "Road Tripper", emoji: "🚗",
      desc: "Explore 3 different states", color: "#C0392B", accent: "#F1948A",
      check: (d,z) => z.filter(zone => zone.items.some(i => d[i.id])).length >= 3,
      progress: (d,z) => ({cur: Math.min(z.filter(zone => zone.items.some(i => d[i.id])).length, 3), max: 3}),
      hint: () => "Visit more states on the map!",
    },
    {
      id: "state_master", name: "State Master", emoji: "🎯",
      desc: "Complete every item in one state", color: "#7B3FA0", accent: "#B565D6",
      check: (d,z) => z.some(zone => zone.items.length > 0 && zone.items.every(i => d[i.id])),
      progress: (d,z) => {
        const populated = z.filter(zone => zone.items.length > 0);
        const best = populated.reduce((b,zone)=>{const n=zone.items.filter(i=>d[i.id]).length;return n>b.n?{n,total:zone.items.length}:b},{n:0,total:1});
        return {cur:best.n,max:best.total};
      },
      hint: (d,z) => {
        const populated = z.filter(zone => zone.items.length > 0);
        const c = [...populated].sort((a,b)=>(b.items.filter(i=>d[i.id]).length/b.items.length)-(a.items.filter(i=>d[i.id]).length/a.items.length))[0];
        return c ? `${c.label} is your closest!` : "Explore a state to get started!";
      },
    },
    {
      id: "super_spotter", name: "Super Spotter", emoji: "🌟",
      desc: "Find 20 things total", color: "#2A6B4A", accent: "#3DBF7A",
      check: (d) => Object.values(d).filter(Boolean).length>=20,
      progress: (d) => ({cur:Math.min(Object.values(d).filter(Boolean).length,20),max:20}),
      hint: () => "Keep exploring — every state has new things to find!",
    },
    {
      id: "coast_to_coast", name: "Coast to Coast", emoji: "🗺️",
      desc: "Explore both a West Coast and East Coast state", color: "#B8860B", accent: "#F4B942",
      check: (d,z) => {
        const west = ["ca","wa"]; const east = ["ny","ma"];
        const visited = (ids) => ids.some(id => { const zone = z.find(zz=>zz.id===id); return zone && zone.items.some(i=>d[i.id]); });
        return visited(west) && visited(east);
      },
      progress: (d,z) => {
        const west = ["ca","wa"]; const east = ["ny","ma"];
        const visited = (ids) => ids.some(id => { const zone = z.find(zz=>zz.id===id); return zone && zone.items.some(i=>d[i.id]); });
        return {cur:(visited(west)?1:0)+(visited(east)?1:0), max:2};
      },
      hint: () => "Try a state on each coast!",
    },
  ],
};
