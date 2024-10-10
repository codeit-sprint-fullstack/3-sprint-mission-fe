import * as ArticleService from './ArticleService.js';

window.addEventListener('DOMContentLoaded', () => {
  const schema = ArticleService.schema;
  schema.forEach((api) => {
    const { name, method, desc, params } = api;
    const fieldset = document.createElement('fieldset');
    fieldset.id = name;
    const legend = document.createElement('legend');
    legend.innerHTML = `<mark data-color="${method}">${method}</mark>${name}`;
    const p = document.createElement('p');
    p.textContent = desc;
    legend.style.fontWeight = 'bold';

    const parentDiv = document.createElement('div');
    parentDiv.style.display = 'grid';
    parentDiv.style.gap = '2rem';
    parentDiv.style.gridTemplateColumns = '1fr 1fr';

    const reqBoard = document.createElement('div');
    const resBoard = document.createElement('div');
    const resStatus = document.createElement('ul');
    const resStatusItem = document.createElement('li');
    resStatusItem.textContent = `status`;
    resStatus.appendChild(resStatusItem);

    const statusUl = document.createElement('ul');
    const statusLi = document.createElement('li');
    statusLi.textContent = 'nothing yet...';
    statusUl.appendChild(statusLi);
    resStatusItem.appendChild(statusUl);

    const btn = document.createElement('button');
    reqBoard.textContent = 'Request';
    resBoard.textContent = 'Response';
    resBoard.appendChild(resStatus);
    const resTextArea = document.createElement('textarea');
    resTextArea.style = `width: 90%; padding: 1rem; resize: none; border: none; background: #f5f5f5;`;
    resTextArea.readOnly = true;
    resTextArea.rows = 10;
    resTextArea.placeholder = 'call api & get response';
    resTextArea.spellcheck = true;
    resBoard.appendChild(resTextArea);

    btn.textContent = 'SEND';
    btn.id = `${name}-btn`;

    btn.onclick = async () => {
      resTextArea.textContent = 'loading...';
      const res = await ArticleService[name]();
      const resData = await res.json();
      resTextArea.textContent = JSON.stringify(resData, null, 2);
      statusLi.textContent = `${res.status} ${res.status === 200 ? 'OK' : 'Error'}`;
    };
    btn.style =
      'background: black; padding: 0.5rem; text-align: center; color: white; border: none; margin: auto; width: 100%; cursor: pointer';
    const reqList = document.createElement('ul');
    const reqListitem = document.createElement('li');

    if (params?.query !== null) {
      reqListitem.textContent = 'query';
      for (const param of params.query) {
        const queryList = document.createElement('ul');
        const queryListitem = document.createElement('li');
        const label = document.createElement('label');
        label.textContent = `${param.name}(${param.type}) : `;
        const input = document.createElement('input');
        input.type = param.type;
        input.placeholder = param.desc;
        queryListitem.appendChild(label);
        queryListitem.appendChild(input);
        queryList.appendChild(queryListitem);
        reqListitem.appendChild(queryList);
      }
    }
    if (params?.path !== null) {
      reqListitem.textContent = 'path';
      for (const param of params.path) {
        const pathList = document.createElement('ul');
        const pathListitem = document.createElement('li');
        const label = document.createElement('label');
        label.textContent = `${param.name}(${param.type}) : `;
        const input = document.createElement('input');
        input.type = param.type;
        input.placeholder = param.desc;
        pathListitem.appendChild(label);
        pathListitem.appendChild(input);
        pathList.appendChild(pathListitem);
        reqListitem.appendChild(pathList);
      }
    }
    if (params?.body !== null) {
      reqListitem.textContent = 'body';
      const textarea = document.createElement('textarea');
      textarea.rows = params.body.length + 2;
      textarea.style = `width: 90%; padding: 0.5rem 1rem;`;
      textarea.value = `${params.body.map((param) => param.name + ':').join('\n')}`;
      reqListitem.appendChild(textarea);
    }
    reqList.appendChild(reqListitem);
    reqBoard.appendChild(reqList);
    reqBoard.appendChild(btn);

    parentDiv.appendChild(reqBoard);
    parentDiv.appendChild(resBoard);

    fieldset.appendChild(legend);
    fieldset.appendChild(p);
    fieldset.appendChild(parentDiv);
    document.body.appendChild(fieldset);
  });
});
