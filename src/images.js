import Cats from './img/cats.png';
import Cave from './img/cave.png';
import Chess from './img/chess.png';
import Deer from './img/deer.png';
import Reaper from './img/reaper.png';
import Tree from './img/tree.png';

function loadImages() {
  const main = document.querySelector('main');

  const catsImg = document.createElement('img');
  const caveImg = document.createElement('img');
  const chessImg = document.createElement('img');
  const deerImg = document.createElement('img');
  const reaperImg = document.createElement('img');
  const treeImg = document.createElement('img');

  catsImg.src = Cats;
  caveImg.src = Cave;
  chessImg.src = Chess;
  deerImg.src = Deer;
  reaperImg.src = Reaper;
  treeImg.src = Tree;

  catsImg.classList.add('slidingImg');
  caveImg.classList.add('slidingImg');
  chessImg.classList.add('slidingImg');
  deerImg.classList.add('slidingImg');
  reaperImg.classList.add('slidingImg');
  treeImg.classList.add('slidingImg');

  main.appendChild(catsImg);
  main.appendChild(caveImg);
  main.appendChild(chessImg);
  main.appendChild(deerImg);
  main.appendChild(reaperImg);
  main.appendChild(treeImg);
}

export default loadImages;
