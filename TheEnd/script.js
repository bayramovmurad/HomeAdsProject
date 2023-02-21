let leftSlider = document.getElementById('leftSlider')
let leftIcon = document.getElementById('left_icon1')
let rightIcon = document.getElementById('right_icon1')
fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            leftSlider.innerHTML += `
        <div class="slider_card">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < leftSlider.children.length; i++) {
                leftSlider.children[i].style.transform = `translateX(${-701 * count}px)`
            }

        }

        setInterval(() => {
            if (count < leftSlider.children.length) {
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
            if (count < leftSlider.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })



let centerSlider = document.getElementById('centerSlider')
fetch('././db/videos1.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            centerSlider.innerHTML += `
            <div class="center">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < centerSlider.children.length; i++) {
                centerSlider.children[i].style.transform = `translateX(${-353 * count}px)`
            }

        }

        setInterval(() => {
            if (count < centerSlider.children.length) {
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
            if (count < centerSlider.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })

let rightSlider = document.getElementById('rightSlider')
fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(movie => {
            rightSlider.innerHTML += `
        <div class="slider_card">
            <img src="${movie.image}" alt="">
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < rightSlider.children.length; i++) {
                rightSlider.children[i].style.transform = `translateX(${-370 * count}px)`
            }

        }

        setInterval(() => {
            if (count < rightSlider.children.length) {
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
            if (count < rightSlider.children.length - 10) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })