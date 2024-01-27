import buildHeader from './header';
import buildMain from './main';
import buildFooter from './footer';

function buildPage() {
  buildHeader();
  buildMain();
  buildFooter();
}

export default buildPage;
