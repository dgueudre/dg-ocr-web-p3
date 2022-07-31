import data from "../data.json" assert { type: "json" };
import templating from './lib/templating.js';

templating.parse({
  steps: () => data.howto,
  restaurants: () => data.restaurants.sort((a, b) => a.id - b.id),
});
