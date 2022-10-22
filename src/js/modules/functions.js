export const handleBurgerMenu = () => {
    const burgerBtn = document.querySelector('.burger')
    const nav = document.querySelector('.nav--header')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        nav.classList.toggle('active')
        document.body.classList.toggle('fixed')
    })
}

export const handleModal = () => {
    const modal = document.querySelector('.modal')
    const moreBtnList = document.querySelectorAll('.modal-open')
    const modalClose = document.querySelector('.modal__close')

    if (modal) {
        moreBtnList.forEach((btn) =>
            btn.addEventListener('click', () => {
                modal.classList.add('active')
                document.body.classList.add('fixed')
            }),
        )

        modalClose.addEventListener('click', () => {
            modal.classList.remove('active')
            document.body.classList.remove('fixed')
        })

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active')
                document.body.classList.remove('fixed')
            }
        })
    }
}
