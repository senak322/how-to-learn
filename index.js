
let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;

const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const elements = document.querySelectorAll('.slider__element');
const elementWidth = container.clientWidth / slidesToShow;
const leftBtn = document.querySelector('.slider__btn_left');
const rightBtn = document.querySelector('.slider__btn_right');
const movePosition = slidesToScroll * elementWidth;
const itemsCount = elements.length;

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
}

const checkBtn = () => {
  leftBtn.disabled = position === 0
  rightBtn.disabled = position <= - (itemsCount - slidesToShow) * elementWidth
}

elements.forEach((item) => {
  item.style.minWidth = `${elementWidth}px`;
})

leftBtn.addEventListener('click', ()=> {
  const itemsLeft = Math.abs(position) / elementWidth
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * elementWidth
  setPosition();
  checkBtn()
})

rightBtn.addEventListener('click', ()=> {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * elementWidth) / elementWidth

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * elementWidth
  setPosition();
  checkBtn()
})

checkBtn()
