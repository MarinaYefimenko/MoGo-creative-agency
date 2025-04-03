/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./js/modules/navigation.js":
/*!**********************************!*\
  !*** ./js/modules/navigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navigation(linksSelector, elem1Selector, elem2Selector, elem3Selector, elem4Selector, elem5Selector, elem6Selector) {
    const links = document.querySelectorAll(linksSelector),
        elem1 = document.querySelector(elem1Selector),
        elem2 = document.querySelector(elem2Selector),
        elem3 = document.querySelector(elem3Selector),
        elem4 = document.querySelector(elem4Selector),
        elem5 = document.querySelector(elem5Selector),
        elem6 = document.querySelector(elem6Selector);

    let elems = [elem1, elem2, elem3, elem4, elem5, elem6];

    function scrollTo(section) {
        window.scroll({
            left: 0,
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }

    links.forEach((link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollTo(elems[i]);
        })
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);

/***/ }),

/***/ "./js/modules/openBurgerMenu.js":
/*!**************************************!*\
  !*** ./js/modules/openBurgerMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openBurgerMenu(burgerSelector, menuSelector, crossSelector, linkSelector) {
    const burger = document.querySelector(burgerSelector),
        menu = document.querySelector(menuSelector),
        cross = document.querySelector(crossSelector),
        links = document.querySelectorAll(linkSelector);

    burger.addEventListener('click', () => {
        menu.style.display = "block";
        burger.style.display = "none";
        cross.style.display = "block";
        document.body.style.overflow = 'hidden';
    });

    function close() {
        menu.style.display = "none";
        burger.style.display = "block";
        cross.style.display = "none";
        document.body.style.overflow = '';
    }

    menu.addEventListener('click', (e) => {
        if (document.documentElement.clientWidth < 770) {
            links.forEach((link) => {
                if (e.target == link) {
                    close();
                }
            })
        }

    });

    cross.addEventListener('click', () => {
        close();
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && window.getComputedStyle(menu).display === 'block') {
            close();
        }
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openBurgerMenu);

/***/ }),

/***/ "./js/modules/postRequest.js":
/*!***********************************!*\
  !*** ./js/modules/postRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function postRequest(formSelector) {

    const form = document.querySelector(formSelector);

    const message = {
        success: "Thank you!<br><br>Let's stay in touch!",
        failure: 'Something went wrong. Please try again later',
    };

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res;
    };

    function bindpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('server.php', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                })
        });
    }

    function showThanksModal(message) {
        const modal = document.querySelector('.modal');

        function showModal(modal) {
            modal.style.display = 'block';
            let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = paddingOffset;
        }

        function hideModal(modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.paddingRight = 0;
        }

        showModal(modal);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `<div class="modal__content">
            <div class="modal__text">${message}</div>
            </div>`;

        modal.append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            hideModal(modal);
        }, 3000);
    }

    bindpostData(form);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postRequest);

/***/ }),

/***/ "./js/modules/rewiesSlider.js":
/*!************************************!*\
  !*** ./js/modules/rewiesSlider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rewiesSlider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion */ "./js/modules/accordion.js");
/* harmony import */ var _modules_rewiesSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/rewiesSlider */ "./js/modules/rewiesSlider.js");
/* harmony import */ var _modules_openBurgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/openBurgerMenu */ "./js/modules/openBurgerMenu.js");
/* harmony import */ var _modules_postRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/postRequest */ "./js/modules/postRequest.js");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation */ "./js/modules/navigation.js");
// use strict;






window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_0__["default"])('.accord__item', '.accord__header', '.accordion');
    (0,_modules_rewiesSlider__WEBPACK_IMPORTED_MODULE_1__["default"])('.reviews__btn--prev', '.reviews__btn--next', '.reviews__item');
    (0,_modules_openBurgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"])('.nav-toggle', '.nav', '.cross', '.nav__link');
    (0,_modules_postRequest__WEBPACK_IMPORTED_MODULE_3__["default"])('.subscribe');
    (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_4__["default"])('.btn__intro', '#learn-more');
    (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_4__["default"])('.nav__link', '#about', '#service', '#team', '#work', '#blog', '#footer-contacts');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map