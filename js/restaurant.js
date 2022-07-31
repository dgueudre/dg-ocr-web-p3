import data from './data.js';
import templating from './templating.js';
import url from './url.js';

const id = +url.getParam('id');

templating.foreach(
  'body',
  '.card-dish',
  data.find((item) => item.id === id).dishes,
);

templating.destroy();
