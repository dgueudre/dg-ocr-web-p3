import data from './data.js';
import templating from './lib/templating.js';
import url from './lib/url.js';

const id = +url.getParam('id');
const restaurant = data.restaurants.find((item) => item.id === id);

templating.foreach(
  'main section>ul',
  '.menu-section',
  data.dishTypes,
);

data.dishTypes.forEach((type) => {
  templating.foreach(
    `.menu-section-${type.code} ul`,
    '.card-dish',
    restaurant.dishes.filter((dish) => dish.type === type.code),
  );
});

templating.replace('body', restaurant);

templating.destroy();
