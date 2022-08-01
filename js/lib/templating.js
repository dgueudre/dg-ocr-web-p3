const doParse = (html, data, scope) => {
  const regexp = new RegExp(`{{\\s?${scope}.(\\w+)\\s?}}`, 'g');
  return html
    .replace(regexp, (_, token) => data[token])
    .replace(/data-tpl-raw-(\w+)/g, (_, token) => token);
};

const foreach = (sources, elem, parent, callback) => {
  const { tplSource, tplItem } = elem.dataset;
  const container = elem;
  const html = container.innerHTML;
  container.innerHTML = '';
  const source = sources[tplSource](parent);
  source.forEach((item) => {
    container.innerHTML += doParse(html, item, tplItem);
    callback(item);
  });
};

const replace = (sources, elem, parent, callback) => {
  const { tplSource } = elem.dataset;
  const container = elem;
  const html = container.innerHTML;
  container.innerHTML = '';
  const source = sources[tplSource](parent);
  container.innerHTML += doParse(html, source, tplSource);
  callback(source);
};

const include = (elem, callback) => {
  const { tplSource } = elem.dataset;
  const container = elem;
  fetch(tplSource)
    .then((response) => response.text())
    .then((newHtml) => {
      container.outerHTML = newHtml;
      callback();
    });
};

const parse = (sources, root = document, parent = null) => {
  let elem = root.querySelector('[data-tpl-action]');
  while (elem) {
    const { tplAction } = elem.dataset;
    const container = elem;
    if (tplAction === 'foreach') {
      foreach(sources, container, parent, (item) => parse(sources, container, item));
    } else if (tplAction === 'replace') {
      replace(sources, container, parent, (item) => parse(sources, container, item));
    } else if (tplAction === 'include') {
      include(container, () => parse(sources, container));
    }
    elem.removeAttribute('data-tpl-action');
    elem = root.querySelector('[data-tpl-action]');
  }
};

export default {
  parse,
};
