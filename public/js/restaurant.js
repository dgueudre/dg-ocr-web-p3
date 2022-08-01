import dishTypes from '../data/dishTypes.json' assert { type: "json" };
import restaurants from '../data/restaurants.json' assert { type: "json" };
import templating from './lib/templating.js';
import url from './lib/url.js';

const id = +url.getParam('id');
const restaurant = restaurants.find((item) => item.id === id);

templating.parse({
  restaurant: () => restaurant,
  dishTypes: () => dishTypes,
  dishes: (type) => restaurant.dishes.filter((dish) => dish.type === type.code),
});
