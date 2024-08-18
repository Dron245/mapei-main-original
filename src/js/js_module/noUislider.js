
import noUiSlider from 'nouislider';

export function noUisliderFunc(item, min, max, step, hide) {
    const sliderElement = item.querySelector('.slider');

    if (!sliderElement) return;
    if (min === undefined) {
        min = parseInt(sliderElement.dataset.min, 10);
    }
    if (max === undefined) {
        max = parseInt(sliderElement.dataset.max, 10);
    }
    if (step === undefined) {
        step = parseInt(sliderElement.dataset.step, 10);
    }
    if(hide === undefined){
        try {
            hide = sliderElement.closest('.inner__sloi').querySelector('.castom__select__body .castom__select__item').dataset.hide
        } catch (error) {
            console.log(error)
        }
      
    }
    if(hide === '1'){
        try {
            if( sliderElement.closest('.slider-obertka'))
            sliderElement.closest('.slider-obertka').classList.add('none')
        } catch (error) {
            console.log(error)
        }
       
        return
    }else{
        try {
            if( sliderElement.closest('.slider-obertka'))
            sliderElement.closest('.slider-obertka').classList.remove('none')
        } catch (error) {
            console.log(error)
        }
    }
 


    if (!sliderElement.noUiSlider) {
        noUiSlider.create(sliderElement, {
            range: {
                'min': [min],
                'max': [max]
            },
            connect: true,
            orientation: 'horizontal',
            step: step,
            start: [min]
        });
    } else {
        sliderElement.noUiSlider.updateOptions({
            range: {
                'min': [min],
                'max': [max]
            },
            step: step
        });
    }
    sliderElement.noUiSlider.set(min);
    generatePoints(min, max, step, sliderElement);
    updateInputValue(sliderElement.closest('.slider__wrapper'), min);
}


function generatePoints(min, max, step, slider) {
    const pointsContainer = slider.parentNode.querySelector('.points');
    pointsContainer.innerHTML = ''; 

    const sliderWidth = pointsContainer.offsetWidth; 

    for (let i = min; i <= max; i += step) {
        const point = document.createElement('span');
        point.textContent = i;

        // Рассчитываем положение метки
        const position = ((i - min) / (max - min)) * 100;

        point.addEventListener('click', () => {
            slider.noUiSlider.set(i);
            try {
                const input = point.closest(".slider__wrapper").querySelector('.vir_sloi')

                if (input) {
                    console.log(input.value)
                    console.log(i)
                    // Обновляем HTML
                    input.setAttribute('value', i.toString()); 

                }
            } catch (error) {
                console.log(error)
            }



        });

        //стили для метки
        point.style.position = 'absolute';
        point.style.left = `${position}%`;
        point.style.transform = 'translateX(-50%)';
        point.style.textAlign = 'center';

        pointsContainer.appendChild(point);
    }
}

export function updateInputValue(sliderWrapper, value) {
    const input = sliderWrapper.querySelector('.vir_sloi');
    if (input) {
        input.setAttribute('value', value.toString());
        console.log(input.value)
        input.dispatchEvent(new Event('change')); 
    }
}