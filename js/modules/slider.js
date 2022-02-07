function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
      //my slider 

    //    const slider = document.querySelectorAll('.slider-offer'),
    // 	  prev = document.querySelector('.icon-prev'),
    // 	  next = document.querySelector('.icon-next'),
    // 	  total = document.querySelector('#total'),
    // 	  current = document.querySelector('#current');

    // let indexSlider = 1;

    // slider.forEach(item => item.style.display = 'none');
    // slider[indexSlider - 1].style.display = 'block';

    // total.textContent = slider.length;
    // current.textContent = 0${indexSlider};

    // if (total.textContent < 10) {
    // 	total.textContent = 0${slider.length};
    // }
    // next.addEventListener('click', () => {
    // 	slider.forEach(item => item.style.display = 'none');
    // 	indexSlider++;
        
    // 	if (indexSlider > slider.length) {
    // 		indexSlider = 1;
    // 	}		
    // 	slider[indexSlider - 1].style.display = 'block';
    // 	currentFunction();
    // });

    // prev.addEventListener('click', () => {
    // 	slider.forEach(item => item.style.display = 'none');
    // 	indexSlider--;

    // 	if (indexSlider < 1) {
    // 		indexSlider = slider.length;
    // 	}
    // 	slider[indexSlider - 1].style.display = 'block';
    // 	currentFunction();
    // });

    // function currentFunction() {
    // 	if (current.textContent < 10) {
    // 	current.textContent = 0${indexSlider};
    // 	} else {
    // 		current.textContent = indexSlider;
    // 	};
    // }

    //slider udemy
    const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slideIndex < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    })    

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
        `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    };

    next.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        };
        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`
            } else {
            current.textContent = slideIndex;
        };
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    });
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1)
        } else {
            offset -= +width.replace(/\D/g, '');
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        };
        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`
            } else {
            current.textContent = slideIndex;
        };
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            
            if (slideIndex < 10) {
                current.textContent = `0${slideIndex}`
                } else {
                current.textContent = slideIndex;
            };

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = '1';

        })
    })
    // showSlides(slideIndex);

    // if (slideIndex < 10) {
    //     total.textContent = `0${slides.length}`
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     slides.forEach(item => item.style.display = 'none');
    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slideIndex < 10) {
    //         current.textContent = `0${slideIndex}`
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // };
    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // };
    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });
}
//module.exports = slider;
export default slider;//ES6