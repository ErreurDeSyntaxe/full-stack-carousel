// Template JavaScript File

// Install webpack with 'npm install webpack webpack-cli --save-dev'
// Automatically compile code with 'npm run watch', stop with CTRL + C

import './style.css';
import buildPage from './page';
import { slideImages, timedSlide } from './slide';

buildPage();
slideImages(0);
timedSlide(5000);
