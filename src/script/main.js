const headline = document.querySelector('#headline');
headline.textContent = 'New Webpack Template';
wrapper.append(headline);

// images
import autumn from '../images/golden-autumn.jpg?as=webp';

const myImg = new Image();
myImg.src = autumn;
wrapper.append(myImg);
