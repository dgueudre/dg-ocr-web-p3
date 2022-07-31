import data from './data.js';
import templating from './lib/templating.js';
import url from './lib/url.js';

const id = +url.getParam('id');

templating.foreach(
  'body',
  '.card-dish',
  data.restaurants.find((item) => item.id === id).dishes,
);

templating.destroy();
