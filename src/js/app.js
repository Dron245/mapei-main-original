import { toggleAccordion } from "./js_module/accordeon.js";
import { changeIconFunc } from "./js_module/change-icon.js";
import { choiseSizeFunc } from "./js_module/choiseSize.js";
import { modalOpen } from "./js_module/modalOpen.js";
import { noUisliderFunc } from "./js_module/noUislider.js";
import { swiperEnable } from "./js_module/swiper.js";

try {
	const slider = document.querySelectorAll(".slider__wrapper");
	if (slider) {
		document.addEventListener("DOMContentLoaded", function () {
			
			slider.forEach((elem) => {
				noUisliderFunc(elem);
			});
		});
	}
} catch (error) {
	console.log(error);
}
try {
	const slider = document.querySelector(".swiper-container");
	if (slider) {
		document.addEventListener("DOMContentLoaded", function () {
			swiperEnable();
		});
	}
} catch (error) {
	console.log(error);
}
try {
	const input = document.querySelectorAll(".inputs__input");
	if (input) {
		changeIconFunc();
	}
} catch (error) {
	console.log(error);
}

try {
	const size = document.querySelector('input[name="size"]');
	if (size) {
		choiseSizeFunc();
	}
} catch (error) {
	console.log(error);
}

try {
	const accardeons = document.querySelectorAll(".castom__select");
	accardeons.forEach((elem) => {
		if (elem) {
			toggleAccordion(elem);
		}
	});
} catch (error) {
	console.log(error);
}

try {
	const share = document.querySelector(".share__open");
	if (share) {
		modalOpen();
	}
} catch (error) {
	console.log(error);
}
// const links = document.querySelectorAll('.main__wrapper > a')
// links.forEach(element => {
// 	element.addEventListener('click', (event) => {
 
//   event.preventDefault()
// });

// })