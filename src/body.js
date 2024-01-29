import loadImages from './images';

function buildBody() {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  const slideshowDiv = document.createElement('div');
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
  circle1.textContent = '--1--';
  circle2.textContent = '--2--';
  circle3.textContent = '--3--';

  slideshowDiv.setAttribute('id', 'slideshowDiv');
  arrowLeft.classList.add('arrow');
  arrowLeft.classList.add('left');
  arrowLeft.textContent = '<<<';
  arrowRight.classList.add('arrow');
  arrowRight.classList.add('right');
  arrowRight.textContent = '>>>';

  main.appendChild(arrowLeft);
  main.appendChild(slideshowDiv);
  main.appendChild(arrowRight);
  body.appendChild(main);
  circleDiv.appendChild(circle1);
  circleDiv.appendChild(circle2);
  circleDiv.appendChild(circle3);

  loadImages();

  slideshowDiv.appendChild(circleDiv);
}

export default buildBody;
