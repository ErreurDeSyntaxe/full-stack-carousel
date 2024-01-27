import loadImages from './images';

function buildMain() {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  body.appendChild(main);

  loadImages();
}

export default buildMain;
