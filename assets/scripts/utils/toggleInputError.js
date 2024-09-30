const toggleInputError = (e, message = "") => {
  const targetNode = e.target.closest("section").querySelector(".message");
  targetNode.innerText = message;
  if (message.length) {
    e.target.classList.add("error");
    return targetNode.classList.add("show");
  }
  e.target.classList.remove("error");
  targetNode.classList.remove("show");
};

export default toggleInputError;
