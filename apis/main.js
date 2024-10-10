import * as ArticleService from './ArticleService.js';

window.addEventListener('DOMContentLoaded', () => {
  const schema = ArticleService.schema;
  schema.forEach((api) => {
    const { name, method, desc, params } = api;
    const fieldset = document.createElement('fieldset');
    fieldset.id = name;
    const legend = document.createElement('legend');
    legend.innerHTML = `<mark data-color="${method}">${method}</mark>${name}`;
    params.textContent = params;
    const p = document.createElement('p');
    p.textContent = desc;
    legend.style.fontWeight = 'bold';
    fieldset.appendChild(legend);
    fieldset.appendChild(p);
    document.body.appendChild(fieldset);
  });
});
