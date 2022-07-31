import data from './data.js';
import templating from './templating.js';

templating.foreach(
  '.section-restaurants>div',
  '.card-restaurant',
  data.sort((a, b) => a.id - b.id),
);

templating.destroy();
