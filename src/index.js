// Template JavaScript File

// Install webpack with 'npm install webpack webpack-cli --save-dev'
// Automatically compile code with 'npm run watch', stop with CTRL + C

import './style.css';
import Logo from './img/odin-logo.svg';
import greetMe from './script';

const odinLogo = new Image();
odinLogo.src = Logo;
const body = document.querySelector('body');
body.appendChild(odinLogo);

console.log('Hello, World!');
greetMe();

for (let i = 0; i < 10; i++) {
  console.log(i);
}
