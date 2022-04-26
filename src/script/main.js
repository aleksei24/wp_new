const headline = document.querySelector('#headline');
headline.textContent = 'New Webpack Template';

// images
const imgBox = document.querySelector('#img');
const myImg = new Image();
myImg.src =
  'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1645098404/audio/golden-autumn_t56he6.jpg';
imgBox.append(myImg);
