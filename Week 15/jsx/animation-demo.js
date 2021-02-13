import { Timeline, Animation } from './animation';
import { ease, easeIn } from './ease.js';

let tl = new Timeline();

tl.start();

console.log(ease);
tl.add(new Animation(document.querySelector("#el").style, "transform", 0, 500, 2000, 0, easeIn, v => `translateX(${v}px)`));
// tl.add(new Animation(document.querySelector("#el2").style, "transform", 0, 500, 2000, 0, ease, v => `translateX(${v}px)`));

document.querySelector("#el2").style.transition = 'transform ease-in 2s';
document.querySelector("#el2").style.transform = 'translateX(500px)';

document.querySelector('#pause-btn').addEventListener('click', () => {
	tl.pause();
});
document.querySelector('#resume-btn').addEventListener('click', () => {
	tl.resume();
});
