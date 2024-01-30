let arrayIndex;

function slideImages(i) {
  arrayIndex = i;
  const allImgDiv = document.querySelectorAll('.slidingDiv');

  if (arrayIndex > 2) {
    arrayIndex = 0;
  }

  if (arrayIndex < 0) {
    arrayIndex = 2;
  }

  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < allImgDiv.length; j++) {
    allImgDiv[j].style.display = 'none';
  }
  allImgDiv[arrayIndex].style.display = 'block';
}

function arrowImage(direction) {
  if (direction === '<<<') {
    slideImages(arrayIndex - 1);
  }

  if (direction === '>>>') {
    slideImages(arrayIndex + 1);
  }
}

export { slideImages, arrowImage };
