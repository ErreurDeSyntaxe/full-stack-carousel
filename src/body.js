import loadImages from './images';

function buildBody() {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  const largeDiv = document.createElement('div');
  const arrowLeft = document.createElement('button');
  const arrowRight = document.createElement('button');
  const circleDiv = document.createElement('div');
  const circle1 = document.createElement('button');
  const circle2 = document.createElement('button');
  const circle3 = document.createElement('button');

  // TODO: make divs for the arrows
  circleDiv.classList.add('circleDiv');
  circle1.classList.add('circle');
  circle2.classList.add('circle');
  circle3.classList.add('circle');

  largeDiv.setAttribute('id', 'largeDiv');
  arrowLeft.classList.add('arrow');
  arrowLeft.classList.add('left');
  arrowRight.classList.add('arrow');
  arrowRight.classList.add('right');

  main.appendChild(largeDiv);
  body.appendChild(main);
  circleDiv.appendChild(circle1);
  circleDiv.appendChild(circle2);
  circleDiv.appendChild(circle3);
  main.appendChild(circleDiv);
  main.appendChild(arrowLeft);
  main.appendChild(arrowRight);

  loadImages();
}

export default buildBody;
