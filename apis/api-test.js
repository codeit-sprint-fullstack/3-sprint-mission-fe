import * as ArtcleService from './service/ArticleService.js';
import * as ProductService from './service/ProductService.js';

const makeDetails = (id, api) => {
  const { name, method, desc, header, params } = api;
  const section = document.getElementById(id);
  const details = document.createElement('details');
  details.open = true;
  const summary = document.createElement('summary');
  const p = document.createElement('p');

  summary.innerHTML = `<mark class="${method}">${method}</mark><code>${name}</code>`;
  p.textContent = desc;
  details.appendChild(summary);
  details.appendChild(p);
  makeParamsDiv(details, params);
  section.appendChild(details);
};

const makeParamsDiv = (parent, params) => {
  const paramDiv = document.createElement('div');
  for (const type of Object.keys(params)) {
    if (params[type] !== null) {
      paramDiv.append(type);
    }
  }
  parent.appendChild(paramDiv);
};

for (const api of ArtcleService.schema) {
  makeDetails('article-service', api);
}

for (const api of ProductService.schema) {
  makeDetails('product-service', api);
}
