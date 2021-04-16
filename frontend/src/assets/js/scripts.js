export const changeMinify = () => {
  const body = document.querySelector('.mod-bg-1');
  body.classList.toggle('nav-function-minify');
  document.querySelector('.profile-image').classList.toggle('rounded-circle');
};

export const changeMenuOnMobile = () => {
  document.querySelector('.mod-bg-1').classList.toggle('mobile-nav-on');
  document.querySelector('.fechaMenu').classList.remove('isClose');
};

export const closeMenuOnMobile = () => {
  document.querySelector('.mod-bg-1').classList.toggle('mobile-nav-on');
  document.querySelector('.fechaMenu').classList.toggle('isClose');
};

export const closeModalAvatar = () => {
  document.querySelector('.modal').classList.remove('show');
  const body = document.getElementById('newCategory');
  body.style.display = 'none';
};

export const hideNewThread = () => {
  const body = document.getElementById('panel-compose');
  body.style.display = 'none';
};

export const showNewThread = () => {
  const body = document.getElementById('panel-compose');
  body.style.display = 'block';
};
