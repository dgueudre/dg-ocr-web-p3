const templates = document.querySelector('#templates');

const parse = (html, data) => html
  .replace(/{{\s?(\w+)\s?}}/g, (_, token) => data[token])
  .replace(/data-tpl-raw-(\w+)/g, (_, token) => token);

const replace = (selector, data) => {
  const element = document.querySelector(selector);
  element.outerHTML = parse(element.outerHTML, data);
};

const foreach = (containerSelector, tplSelector, data) => {
  const container = document.querySelector(containerSelector);
  const tplHtml = templates.querySelector(tplSelector).outerHTML;
  data.forEach((item) => {
    container.innerHTML += parse(tplHtml, item);
  });
};

const destroy = () => {
  if (templates) {
    templates.remove();
  }
};

export default {
  replace, foreach, destroy,
};
