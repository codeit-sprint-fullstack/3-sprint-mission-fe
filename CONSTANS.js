const SITE_TITLE = '판다마켓';
const year = new Date().getFullYear();

document.title = SITE_TITLE;

if (document.getElementById('copyright-year')) {
  document.getElementById('copyright-year').innerText = `©codeit - ${year}`;
}

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' },
];

const USER_DATA_MAP = new Map();

for (const user of USER_DATA) {
  USER_DATA_MAP.set(user.email, user.password);
}
