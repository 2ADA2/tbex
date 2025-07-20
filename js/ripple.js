export function ripple() {
    const el = document.createElement('span');
    el.classList.add('wave');

    let isAnimation = false
    const elements = document.getElementsByClassName('changeable-parent')
    for (let element of elements) {
        element.addEventListener('click', function (e) {
            element.appendChild(el)
            console.log(1)
            if (isAnimation) {
                return
            }
            isAnimation = true
            el.style.setProperty('--x', e.clientX - this.getBoundingClientRect().left - el.offsetWidth / 2 + 'px');
            el.style.setProperty('--y', e.clientY - this.getBoundingClientRect().top - el.offsetHeight / 2 + 'px');

            let scaleCount = 0,
                opacityCount = 1;

            const animationTime = 500;

            let scaleUp = setInterval(function () {
                scaleCount += 0.25;
                el.style.setProperty('--scale', scaleCount);

                opacityCount -= 0.05;
                el.style.opacity = opacityCount;
            }, animationTime / 20);

            setTimeout(function () {
                clearInterval(scaleUp);
                el.style.setProperty('--scale', 0);
                isAnimation = false
                el.remove();
            }, animationTime);
        });
    }
}