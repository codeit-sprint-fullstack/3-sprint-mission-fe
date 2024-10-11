/** type error 인 key 값을 하나씩 잡음 */
export function typeConfirm(target, compare) {
  const arr = [];
  for (let key in target) {
    arr.push({
      key,
      type: typeof target[key],
      result: typeof target[key] === typeof compare[key],
    });
  }
  const find = arr.find((x) => !x.result);
  if (find) {
    return {
      result: false,
      errKey: find.key,
      errType: find.type,
      message: `type Error: Error key "${find.key}" Error Type "${find.type}"`,
    };
  } else
    return {
      result: true,
    };
}

const elProps = {
  el: "div",
  className: "",
  text: "",
  append: null,
};
export function addEl(props = elProps) {
  const newEl = document.createElement(props.el);
  if (!!props.className) newEl.classList.add(props.className);
  if (!!props.text) newEl.innerHTML = props.text;
  if (!!props.append) props.append.appendChild(newEl);
  return newEl;
}
