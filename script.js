const loader = document.querySelector('.loader');
const nav = document.querySelector('nav');

window.addEventListener('load' , () => {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.pointerEvents = 'none';
	},500)
})

window.addEventListener('scroll' , () => {
	if(window.pageYOffset > 150) {
		nav.classList.remove('-translate-y-48');
	} else {
		nav.classList.add('-translate-y-48');
	}
})