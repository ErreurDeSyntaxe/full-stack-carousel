import Cats from './img/cats.png';
import Cave from './img/cave.png';
import Chess from './img/chess.png';
// import Deer from './img/deer.png';
// import Reaper from './img/reaper.png';
// import Tree from './img/tree.png';

function loadImages() {
  const slideshowDiv = document.getElementById('slideshowDiv');

  const catsImg = document.createElement('img');
  const caveImg = document.createElement('img');
  const chessImg = document.createElement('img');
  // const deerImg = document.createElement('img');
  // const reaperImg = document.createElement('img');
  // const treeImg = document.createElement('img');

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  // const div4 = document.createElement('div');
  // const div5 = document.createElement('div');
  // const div6 = document.createElement('div');

  catsImg.src = Cats;
  caveImg.src = Cave;
  chessImg.src = Chess;
  // deerImg.src = Deer;
  // reaperImg.src = Reaper;
  // treeImg.src = Tree;

  div1.classList.add('slidingDiv');
  div2.classList.add('slidingDiv');
  div3.classList.add('slidingDiv');
  // div4.classList.add('slidingDiv');
  // div5.classList.add('slidingDiv');
  // div6.classList.add('slidingDiv');

  div1.setAttribute('id', 'div1');
  div2.setAttribute('id', 'div2');
  div3.setAttribute('id', 'div3');
  // div4.setAttribute('id', 'div4');
  // div5.setAttribute('id', 'div5');
  // div6.setAttribute('id', 'div6');

  div2.classList.add('inactive');
  div3.classList.add('inactive');
  // div4.classList.add('inactive');
  // div5.classList.add('inactive');
  // div6.classList.add('inactive');

  div1.appendChild(catsImg);
  div2.appendChild(caveImg);
  div3.appendChild(chessImg);
  // div4.appendChild(deerImg);
  // div5.appendChild(reaperImg);
  // div6.appendChild(treeImg);

  slideshowDiv.appendChild(div1);
  slideshowDiv.appendChild(div2);
  slideshowDiv.appendChild(div3);
  // slideshowDiv.appendChild(div4);
  // slideshowDiv.appendChild(div5);
  // slideshowDiv.appendChild(div6);
}

export default loadImages;
