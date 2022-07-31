import data from './data.js';
import templating from './lib/templating.js';

templating.foreach(
  '.section-howto>ul',
  '.card-howto',
  data.howto,
);

templating.foreach(
  '.section-restaurants>div',
  '.card-restaurant',
  data.restaurants.sort((a, b) => a.id - b.id),
);

templating.destroy();
