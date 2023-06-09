export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};
export const getCode = () => {
  const url = new URL(location.href);
  const code = url.searchParams.get('code');
  return code ? code : '';
};

export const getToken = () => {
  const token = localStorage.getItem('bearer') || '';
  if (!token && location.pathname.includes('/auth')) {
    token && setToken(token);
  }
  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }
  return token;
};
