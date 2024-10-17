export const setVisibleInput = (e) => {
  const pwdInput = e.target.previousElementSibling;
  pwdInput.type = e.target.checked ? 'text' : 'password';
}