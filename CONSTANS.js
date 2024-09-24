const SITE_TITLE = '판다마켓';
const year = new Date().getFullYear();

document.title = SITE_TITLE;

document.getElementById('copyright-year').innerText = `©codeit - ${year}`;
