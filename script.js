let sliderContainer = document.getElementById('sliderContainer')
let leftIcon = document.querySelector('.left_icon')
let rightIcon = document.querySelector('.right_icon')
let sectionUst = document.getElementById('sectionUst')
const image = document.querySelectorAll('.section_card')
const items = document.querySelector('.section_left_btn')
const item = document.querySelectorAll('.item')


for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function () {
        items.querySelector('.active').classList.remove('active')
        item[i].classList.add('active');
        let filterName = item[i].getAttribute('data-name');



        for (let i = 0; i < image.length; i++) {
            let filterImage = image[i].getAttribute('data-name')
            if (filterName === filterImage || filterName === 'All') {
                image[i].classList.add('show')
                image[i].classList.remove('hide')

            }
            else {
                image[i].classList.add('hide')
                image[i].classList.remove('show')
            }
        }
    })
}






fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            sliderContainer.innerHTML += `
        <div class="slider_card">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer.children.length; i++) {
                sliderContainer.children[i].style.transform = `translateX(${-577 * count}px)`
            }

        }



        setInterval(() => {
            if (count < sliderContainer.children.length) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        }, 4000);

        leftIcon.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon.addEventListener('click', () => {
            if (count > sliderContainer.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })

let sliderContainer1 = document.getElementById('sliderContainer1')
let leftIcon1 = document.getElementById('left_icon1')
let rightIcon1 = document.getElementById('right_icon1')


fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            sliderContainer1.innerHTML += `
        <div class="slider_card">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer1.children.length; i++) {
                sliderContainer1.children[i].style.transform = `translateX(${-577 * count}px)`
            }

        }

        setInterval(() => {
            if (count < sliderContainer1.children.length) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        }, 4000);

        leftIcon1.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon1.addEventListener('click', () => {
            if (count > sliderContainer1.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })

let sliderContainer2 = document.getElementById('sliderContainer2')
let leftIcon2 = document.getElementById('left_icon2')
let rightIcon2 = document.getElementById('right_icon2')


fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            sliderContainer2.innerHTML += `
        <div class="slider_card">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer2.children.length; i++) {
                sliderContainer2.children[i].style.transform = `translateX(${-577 * count}px)`
            }

        }

        setInterval(() => {
            if (count < sliderContainer2.children.length) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        }, 4000);

        leftIcon2.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon2.addEventListener('click', () => {
            if (count > sliderContainer2.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })

let sliderContainer3 = document.getElementById('sliderContainer3')
let leftIcon3 = document.getElementById('left_icon3')
let rightIcon3 = document.getElementById('right_icon3')


fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            sliderContainer3.innerHTML += `
        <div class="slider_card">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer3.children.length; i++) {
                sliderContainer3.children[i].style.transform = `translateX(${-577 * count}px)`
            }

        }

        setInterval(() => {
            if (count < sliderContainer3.children.length) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        }, 4000);

        leftIcon3.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon3.addEventListener('click', () => {
            if (count > sliderContainer3.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })

let sliderContainer4 = document.getElementById('sliderContainer4')
let leftIcon4 = document.getElementById('left_icon4')
let rightIcon4 = document.getElementById('right_icon4')


fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            sliderContainer4.innerHTML += `
        <div class="slider_card">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer4.children.length; i++) {
                sliderContainer4.children[i].style.transform = `translateX(${-577 * count}px)`
            }

        }

        setInterval(() => {
            if (count < sliderContainer4.children.length) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        }, 4000);

        leftIcon4.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon4.addEventListener('click', () => {
            if (count > sliderContainer4.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })

let sliderContainer5 = document.getElementById('sliderContainer5')
let leftIcon5 = document.getElementById('left_icon5')
let rightIcon5 = document.getElementById('right_icon5')


fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            sliderContainer5.innerHTML += `
        <div class="slider_card">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer5.children.length; i++) {
                sliderContainer5.children[i].style.transform = `translateX(${-577 * count}px)`
            }

        }

        setInterval(() => {
            if (count < sliderContainer5.children.length) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        }, 4000);

        leftIcon5.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon5.addEventListener('click', () => {
            if (count > sliderContainer5.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })



// slider 2
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

