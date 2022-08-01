import steps from '../data/steps.json' assert { type: "json" };
import restaurants from '../data/restaurants.json' assert { type: "json" };
import templating from './lib/templating.js';

templating.parse({
  steps: () => steps,
  restaurants: () => restaurants.sort((a, b) => a.id - b.id),
});
