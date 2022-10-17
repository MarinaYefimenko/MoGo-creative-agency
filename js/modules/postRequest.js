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

export default postRequest;