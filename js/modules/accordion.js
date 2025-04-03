function accordion(itemsSelector, headersSelector, parentSelector) {
    const accordItems = document.querySelectorAll(itemsSelector),
        accordHeaders = document.querySelectorAll(headersSelector),
        accordParent = document.querySelector(parentSelector);

    function hideAccordItems() {
        accordItems.forEach(item => {
            item.classList.remove('active');
        })
    }

    function showAccordItems(i = 0) {
        accordItems[i].classList.add('active');
    }

    function toggleAccordItems(i) {
        accordItems[i].classList.toggle('active');
    }

    hideAccordItems();
    showAccordItems();

    accordParent.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target && (event.target.classList.contains('accord__header') || event.target.classList.contains('accord__title'))) {
            hideAccordItems();
            accordHeaders.forEach((item, i) => {
                if (event.target == item || event.target == item.querySelector('.accord__title')) {
                    toggleAccordItems(i);
                }
            })
        }
    })
};

export default accordion;