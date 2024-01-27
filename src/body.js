import loadImages from './images';

function buildBody() {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  const largeDiv = document.createElement('div');

  largeDiv.setAttribute('id', 'largeDiv');
  main.appendChild(largeDiv);
  body.appendChild(main);

  loadImages();
}

export default buildBody;
