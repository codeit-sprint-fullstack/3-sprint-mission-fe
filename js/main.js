import {
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
  getBody,
  createBody,
  patchBody,
  deleteBody,
} from "./articleService.mjs";
import {
  createProducts,
  deleteProducts,
  getProducts,
  patchProducts,
  getProductsBody,
  createProductsBody,
  patchProductsBody,
  deleteProductsBody,
} from "./ProductService.mjs";
import { addEl } from "./lib.mjs";

let overlap = false;
const method = ["Get", "Post", "Patch", "Delete"];
// const apiContainer = document.querySelector("#apiContainer");
const apiContainer_Box = document.querySelector("#methodBtn").children;
const insertBox = document.querySelector("#insertBox");

[...apiContainer_Box].map((el) => {
  const btnArea = el.children[1];
  method.forEach((v) => {
    const btn = addEl({
      el: "button",
      className: el.className,
      text: v,
      append: btnArea,
    });
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (overlap) throw alert("중복방지");
      overlap = true;
      const target = e.target.textContent;
      let type, ob;

      switch (el.className) {
        case "articles":
          type = "article";
          switch (target) {
            case "Get":
              ob = getBody;
              break;
            case "Post":
              ob = createBody;
              break;
            case "Patch":
              ob = patchBody;
              break;
            case "Delete":
              ob = deleteBody;
              break;
          }
          break;
        case "products":
          type = "products";
          switch (target) {
            case "Get":
              ob = getProductsBody;
              break;
            case "Post":
              ob = createProductsBody;
              break;
            case "Patch":
              ob = patchProductsBody;
              break;
            case "Delete":
              ob = deleteProductsBody;
              break;
          }
          break;
      }

      insertBoxElement(ob, v, type);
      overlap = false;
      console.log(`${type} ${v}`);
    });
  });
});

function insertBoxElement(object, method, part) {
  // reset
  insertBox.innerHTML = "";
  // add
  const title = addEl({
    el: "h2",
    text: `INSERT {${method}}`,
    append: insertBox,
  });
  if (object)
    for (let key in object) {
      const box = addEl({ el: "div", className: key, append: insertBox });
      const label = addEl({
        el: "label",
        className: key + "__label",
        text: key,
        append: box,
      });
      const input = addEl({
        el: "input",
        className: key + "__input",
        append: box,
      });
      if (typeof object[key] === "number") input.type = "number";
      input.placeholder = typeof object[key];
    }
  const submitBtn = addEl({
    el: "button",
    className: "submit",
    text: "송신",
    append: insertBox,
  });
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switch (part) {
      case "article":
        console.log(part, method);
        matching(part, method);
        break;
      case "products":
        console.log(part);
        break;
    }
  });
}

function matching(part, method) {}
