import data from './data.js';
import templating from './lib/templating.js';

templating.parse({
  steps: () => data.howto,
  restaurants: () => data.restaurants.sort((a, b) => a.id - b.id),
});
