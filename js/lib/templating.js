const templates = document.querySelector('#templates');

export default {
  foreach: (containerSelector, tplSelector, data) => {
    const container = document.querySelector(containerSelector);
    const tplHtml = templates.querySelector(tplSelector).outerHTML;
    data.forEach((item) => {
      container.innerHTML += tplHtml
        .replace(/{{\s?(\w+)\s?}}/g, (_, token) => item[token])
        .replace(/data-tpl-raw-(\w+)/g, (_, token) => token);
    });
  },
  destroy: () => {
    if (templates) {
      templates.remove();
    }
  },
};
