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

// insertBox 생성 코드
function insertBoxElement(object, method, part) {
  // reset
  insertBox.innerHTML = "";
  // add
  const title = addEl({
    el: "h2",
    text: `INSERT {${method}}`,
    append: insertBox,
  });
  const arrTypeText = ",로 배열을 구분합니다";

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
      let placeholder =
        typeof object[key] === "object" ? arrTypeText : typeof object[key];
      input.placeholder = placeholder;
      input.dataset.key = key;
    }
  const submitBtn = addEl({
    el: "button",
    className: "submit",
    text: "송신",
    append: insertBox,
  });

  // 송신 버튼 클릭 이벤트
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll("#insertBox input");
    const dataOb = [...inputs].reduce((a, c, i) => {
      let value = c.value;
      if (c.placeholder === arrTypeText) {
        a[c.dataset.key] = value.split(",");
      } else if (c.placeholder === "number") {
        a[c.dataset.key] = Number(value);
      } else {
        a[c.dataset.key] = value;
      }
      // console.log(c.placeholder);
      return a;
    }, {});
    let result;
    switch (part) {
      case "article":
        switch (method) {
          case "Get":
            result = await getArticle(dataOb);
            break;
          case "Post":
            result = await createArticle(dataOb);
            break;
          case "Patch":
            result = await patchArticle(dataOb);
            break;
          case "Delete":
            result = await deleteArticle(dataOb);
            break;
        }
        break;
      case "products":
        switch (method) {
          case "Get":
            result = await getProducts(dataOb);
            break;
          case "Post":
            result = await createProducts(dataOb);
            break;
          case "Patch":
            result = await patchProducts(dataOb);
            break;
          case "Delete":
            result = await deleteProducts(dataOb);
            break;
        }
        break;
    }
    if (!!!result && method !== "Delete") alert("정확한 값을 입력해주세요");
    console.log("result", result);
    if (result !== undefined) resultElement(result, method, part);
    else resultElement([], method);
  });
}

function resultElement(data, method, part) {
  const resultBox = document.querySelector("#resultBox");
  resultBox.innerHTML = "";
  if (data.length === 0 && !!!part) {
    const errorTitle = addEl({
      el: "h2",
      className: "resultTitle",
      text: `ERROR 결과`,
      append: resultBox,
    });
    const box = addEl({
      el: "div",
      className: "dataBoxRed",
      text: `${method} 실패"`,
      append: resultBox,
    });
    return;
  }
  const resultTitle = addEl({
    el: "h2",
    className: "resultTitle",
    text: `${method} 결과 (${!!data.length ? data.length : 0})`,
    append: resultBox,
  });

  if (method === "Delete") {
    const box = addEl({
      el: "div",
      className: "dataBox",
      text: "Delete 성공",
      append: resultBox,
    });
    return;
  }
  if (!Array.isArray(data)) {
    const box = addEl({ el: "div", className: "dataBox", append: resultBox });
    const id = addEl({ el: "p", text: `id:${data.id}`, append: box });
    if (part === "article") {
      const title = addEl({
        el: "p",
        text: `title:${data.title}`,
        append: box,
      });
      ImgBox(data.image, box);
      const content = addEl({
        el: "p",
        text: `content:${data.content}`,
        append: box,
      });
    } else {
    }
  } else
    [...data].map((el) => {
      const box = addEl({ el: "div", className: "dataBox", append: resultBox });
      const id = addEl({ el: "p", text: `id:${el.id}`, append: box });
      if (part === "article") {
        const title = addEl({
          el: "p",
          text: `title:${el.title}`,
          append: box,
        });

        ImgBox(el.image, box);
        const content = addEl({
          el: "p",
          text: `content:${el.content}`,
          append: box,
        });
      } else {
        const tagBox = addEl({
          el: "div",
          className: "tagBox",
          append: box,
        });
        el.tags.map((tag) => {
          addEl({
            el: "p",
            className: "tag",
            text: tag,
            append: tagBox,
          });
        });
        const name = addEl({
          el: "p",
          text: `name:${el.name}`,
          append: box,
        });
        const description = addEl({
          el: "p",
          text: `description:${el.description}`,
          append: box,
        });
        const price = addEl({
          el: "p",
          text: `price:${el.price}`,
          append: box,
        });
        const manufacturer = addEl({
          el: "p",
          text: `manufacturer:${el.manufacturer}`,
          append: box,
        });
        ImgBox(el.images[0], box);
      }
    });
}

function ImgBox(img, append) {
  const imgBox = addEl({ el: "div", className: "imgBox", append });
  const image = addEl({ el: "img", append: imgBox });
  image.src = img;
  image.addEventListener("error", (e) => {
    e.target.src =
      "https://media.istockphoto.com/id/1334645334/video/error-with-glitch-effect-on-screen-error-404-page-not-found-motion-graphics.jpg?s=640x640&k=20&c=UOUyKCEVdOZOZ0t21s1vBlU3FmhLyMtJ6gxLwSmWn7M=";
  });
}
