const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
const headline = document.createElement('h1');
headline.textContent = 'New Webpack Template';
body.append(wrapper);
wrapper.append(headline);

// images
import autumn from '../images/golden-autumn.jpg?as=webp';

const myImg = new Image();
myImg.src = autumn;
wrapper.append(myImg);
