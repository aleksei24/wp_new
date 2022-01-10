const headline = document.querySelector('#headline');
headline.textContent = 'New Webpack Template';

// images
import autumn from '../images/golden-autumn.jpg?as=webp';

const imgBox = document.querySelector('#img');
const myImg = new Image();
myImg.src = autumn;
imgBox.append(myImg);
