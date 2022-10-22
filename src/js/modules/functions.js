export const handleBurgerMenu = () => {
    const burgerBtn = document.querySelector('.burger')
    const nav = document.querySelector('.nav--header')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        nav.classList.toggle('active')
        document.body.classList.toggle('fixed')
    })
}
