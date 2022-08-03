module.exports = config => {
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/css');


  config.addNunjucksFilter("filter_by_type", (dishes, type) => dishes.filter(dish => dish.type === type));
  config.addNunjucksFilter("sort_by_id", (items) => items.sort((a, b) => a.id - b.id));

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
      includes: "templates",
      data: "data"
    }
  };
};