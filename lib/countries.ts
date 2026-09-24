// Countries with Nishu plants installed, plotted on the global presence globe.
// Coordinates are [latitude, longitude]. Keep the list to countries we can name.
// Pages never quote a count: they name a few countries and add "and many more".
export interface PlantCountry {
  id: string
  name: string
  region: "Africa" | "South Asia"
  location: [number, number]
  /** Optional city shown next to the country name. */
  city?: string
}

/** Vasai East, where every plant is built. Arcs start here. */
export const HOME_BASE: [number, number] = [19.4169, 72.8611]

export const PLANT_COUNTRIES: PlantCountry[] = [
  { id: "india", name: "India", region: "South Asia", location: [20.5937, 78.9629] },
  { id: "nepal", name: "Nepal", region: "South Asia", location: [28.3949, 84.124] },
  { id: "bangladesh", name: "Bangladesh", region: "South Asia", location: [23.685, 90.3563] },
  { id: "sudan", name: "Sudan", region: "Africa", location: [15.5007, 32.5599], city: "Khartoum" },
  { id: "nigeria", name: "Nigeria", region: "Africa", location: [9.082, 8.6753] },
  { id: "ghana", name: "Ghana", region: "Africa", location: [5.6037, -0.187] },
  { id: "dr-congo", name: "DR Congo", region: "Africa", location: [-4.0383, 21.7587] },
  { id: "tanzania", name: "Tanzania", region: "Africa", location: [-6.369, 34.8888] },
  { id: "angola", name: "Angola", region: "Africa", location: [-11.2027, 17.8739] },
  { id: "zambia", name: "Zambia", region: "Africa", location: [-13.1339, 27.8493] },
  { id: "malawi", name: "Malawi", region: "Africa", location: [-13.2543, 34.3015] },
  { id: "mozambique", name: "Mozambique", region: "Africa", location: [-18.6657, 35.5296] },
]

/** The countries named wherever the site talks about our reach. */
export const FEATURED_COUNTRIES = ["Nigeria", "Ghana", "Tanzania", "Nepal"]

/** "Nigeria, Ghana, Tanzania, Nepal and many more" */
export const COUNTRIES_LINE = `${FEATURED_COUNTRIES.join(", ")} and many more`
