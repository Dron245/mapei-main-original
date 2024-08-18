import { noUisliderFunc, updateInputValue } from "./noUislider.js";


export function toggleAccordion(accordionItem) {
    const title = accordionItem.firstElementChild;
    const accordionHeader = accordionItem.querySelector('.castom__select__header');
    const accordionContent = accordionItem.querySelector('.castom__select__body');
    const currentDisplay = accordionItem.querySelector('.castom__select__current');
    const hiddenInput = accordionItem.querySelector('.custom__select__input__hidden');

    accordionHeader.addEventListener('click', openContent);

    function openContent(event) {
        accordionContent.classList.toggle('accardeon-hidden');

        try {
            const svg = accordionHeader.querySelector('svg');
            if (svg) {
                svg.classList.toggle('accardeon-rotate');
            }
        } catch (error) {
            console.log(error);
        }

        if (event) {
            event.stopPropagation();
        }
    }

    const items = accordionContent.querySelectorAll('.castom__select__item');
    items.forEach(item => {
        item.addEventListener('click', function () {
           

           
                const sliderWrapper = item.closest('.inner__sloi').querySelector('.slider__wrapper')
                if (sliderWrapper) {
                    const newMin = parseInt(item.dataset.min, 10);
                    const newMax = parseInt(item.dataset.max, 10);
                    const newStep = parseInt(item.dataset.step, 10); 
                    const newHide = item.dataset.hide; 
                    // console.log(hide)
                 
                   
                    noUisliderFunc(sliderWrapper, newMin, newMax, newStep, newHide);
                    updateInputValue(sliderWrapper, newMin)
                }
            
            currentDisplay.textContent = item.textContent;         
            hiddenInput.value = item.getAttribute('data-idpage');
            accordionContent.classList.add('accardeon-hidden')
        });
    });

    document.addEventListener('click', function (event) {
        if (!accordionContent.classList.contains('accardeon-hidden') && !accordionContent.closest('.filter')) {
            if (!event.target.closest('.accardeon')) {
                accordionContent.classList.add('accardeon-hidden');
                try {
                    const svg = accordionHeader.querySelector('svg');
                    if (svg) {
                        svg.classList.remove('accardeon-rotate');
                    }
                } catch (error) {
                    console.log(error);
                }
                if (event) {
                    event.stopPropagation();
                }
            }
        }
    });
}
