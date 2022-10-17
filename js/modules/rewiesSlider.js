function rewiesSlider(prevBtn, nextBtn, itemsSelector) {
    const prevButtonRev = document.querySelector(prevBtn),
        nextButtonRev = document.querySelector(nextBtn),
        revContent = document.querySelectorAll(itemsSelector);

    let count = 0;

    function hide(contents) {
        contents.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    function show(contents, i) {
        contents[i].classList.add('show', 'fade');
        contents[i].classList.remove('hide');
    }

    hide(revContent);
    show(revContent, count);

    prevButtonRev.addEventListener('click', (event) => {
        count--;
        hide(revContent);
        if (count < 0) {
            count = (revContent.length - 1);
            show(revContent, count);
        } else {
            show(revContent, count);
        }
    });

    nextButtonRev.addEventListener('click', (event) => {
        count++;
        hide(revContent);
        if (count > (revContent.length - 1)) {
            count = 0;
            show(revContent, count);
        } else {
            show(revContent, count);
        }
    });
};

export default rewiesSlider;