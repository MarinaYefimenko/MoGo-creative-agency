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

export default openBurgerMenu;