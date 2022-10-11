const ratingContainer = document.getElementById('rating-number-container');
const starContainer = document.getElementById('starContainer');

function generateStar(count) {
  if (count === 'add') {
    for (let j = 0; j < rates; j++) {
      const starElement = document.createElement('span');
      const imgElement = document.createElement('img');
      imgElement.src = './images/icon-star.svg';
      starElement.className = 'star';
      starElement.appendChild(imgElement);

      starContainer.appendChild(starElement);
    }
  }
  if (count === 'remove') {
    while (starContainer.children.length > 0) {
      starContainer.innerHTML = '';
    }
  }
}

let rates = 0;
let rated = 0;
for (let i = 1; i <= 5; i++) {
  const spanElement = document.createElement('span');
  spanElement.className = 'rating__number';
  spanElement.id = 'rateNumber';
  spanElement.innerHTML = i;
  spanElement.addEventListener('mouseenter', addStar, false);
  spanElement.addEventListener('mouseleave', removeStar, false);
  spanElement.addEventListener('click', handleClick, false);
  ratingContainer.appendChild(spanElement);
}
function addStar() {
  starContainer.innerHTML = '';
  rates = this.innerHTML;
  generateStar('add');
}
function removeStar() {
  generateStar('remove');
}
function handleClick() {
  for (const el of ratingContainer.children) {
    if (el.classList.contains('active')) {
      if (el !== this) {
        el.classList.remove('active');
      }
    }
  }
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.addEventListener('mouseenter', addStar, false);
  } else {
    this.classList.add('active');
    this.removeEventListener('mouseleave', removeStar, false);
  }
}

// thank you
const cardContent = document.getElementById('card-content');

function handleSubmit() {
  starContainer.style.display = 'none';
  ratingContainer.style.display = 'none';
  cardContent.classList.add('center');
  cardContent.children[0].classList.remove('image');
  cardContent.children[1].style.display = 'block';
  cardContent.children[1].innerHTML = `You rated ${rates} out of 5`;
  cardContent.children[2].innerHTML = 'Thank you!';
  cardContent.children[3].innerHTML =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  button.style.display = 'none';
}
const button = document.getElementById('submit');
button.addEventListener('click', handleSubmit, false);
