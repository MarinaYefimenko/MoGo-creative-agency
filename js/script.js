// use strict;
window.addEventListener('DOMContentLoaded', () => {

    // WeDo accordion
    const accordItems = document.querySelectorAll('.accord__item'),
        accordHeaders = document.querySelectorAll('.accord__header'),
        accordParent = document.querySelector('.accordion');

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
        if (event.target && event.target.classList.contains('accord__header')) {
            accordHeaders.forEach((item, i) => {
                if (event.target == item) {
                    toggleAccordItems(i);
                }
            })
        }
    })


    //   Reviews && reviews2222
    const prevButtonRev = document.querySelector('.reviews__btn--prev'),
        nextButtonRev = document.querySelector('.reviews__btn--next'),
        revContent = document.querySelectorAll('.reviews__item');

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

    
});

