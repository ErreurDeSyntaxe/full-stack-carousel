function buildHeader() {
  const body = document.querySelector('body');
  const header = document.createElement('header');

  header.textContent = 'Image Slider';
  body.appendChild(header);
}

export default buildHeader;
