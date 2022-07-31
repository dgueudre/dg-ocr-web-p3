const doParse = (html, data, scope) => {
  const regexp = new RegExp(`{{\\s?${scope}.(\\w+)\\s?}}`, 'g');
  return html
    .replace(regexp, (_, token) => data[token])
    .replace(/data-tpl-raw-(\w+)/g, (_, token) => token);
};

const parse = (sources, root = document, parent = null) => {
  let elem;
  // eslint-disable-next-line no-cond-assign
  while (elem = root.querySelector('[data-tpl-action]')) {
    const { tplAction, tplSource, tplItem } = elem.dataset;
    const container = elem;
    const html = elem.innerHTML;
    container.innerHTML = '';
    const source = sources[tplSource](parent);
    if (tplAction === 'foreach') {
      // eslint-disable-next-line no-loop-func
      source.forEach((item) => {
        container.innerHTML += doParse(html, item, tplItem);
        parse(sources, elem, item);
      });
    } else if (tplAction === 'replace') {
      container.innerHTML += doParse(html, source, tplSource);
      parse(sources, elem, source);
    }
    elem.removeAttribute('data-tpl-action');
  }
};

export default {
  parse,
};
