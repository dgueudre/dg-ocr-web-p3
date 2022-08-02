module.exports = config => {
  config.addPassthroughCopy('./assets/');

  config.addNunjucksFilter("bytype", (dishes, type) => dishes.filter(dish => dish.type === type));

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public'
    }
  };
};