document.querySelector('.toggle-password').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  this.querySelector('img').alt = type === 'password' ? '토글패스워드' : '비밀번호 숨기기';
});
