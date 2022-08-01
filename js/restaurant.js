import data from '../data.json' assert { type: "json" };
import templating from './lib/templating.js';
import url from './lib/url.js';

const id = +url.getParam('id');
const restaurant = data.restaurants.find((item) => item.id === id);

templating.parse({
  restaurant: () => restaurant,
  dishTypes: () => data.dishTypes,
  dishes: (type) => restaurant.dishes.filter((dish) => dish.type === type.code),
});
