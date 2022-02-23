const header = document.querySelector(".header");
const about = document.querySelector(".about");
const team = document.querySelector(".team");
const price = document.querySelector(".price");
const promotion = document.querySelector(".promotion");
const contact = document.querySelector(".contact");
const listItem = document.querySelectorAll(".nav__list-item");
const navBurger = document.querySelector(".nav__burger");
const burgerIcons = document.querySelectorAll(".nav__burger .fas");
const navList = document.querySelector(".nav__mobile .nav__list");
const aboutImageOne = document.querySelector(".about__image-one")
const aboutImageTwo = document.querySelector(".about__image-two")
const teamCard = document.querySelectorAll(".team__card")
const priceImage = document.querySelector(".price__image")
const priceGroups = document.querySelector(".price__groups")
const promotionButtons = document.querySelectorAll(".promotion__card-button")
const promotionText = document.querySelectorAll(".promotion__card-text")
const promotionCard = document.querySelectorAll(".promotion__card")


// Scroll spy menu
const scrollSpy = () => {
    if (window.scrollY > header.offsetTop) {
        listItem.forEach(e => {
            e.classList.remove("nav__list-item--active")
        })
    }
    if (window.scrollY + 30 > about.offsetTop) {
        listItem.forEach(e => {
            e.classList.remove("nav__list-item--active")
        })
        listItem[0].classList.add("nav__list-item--active")
    }
    if (window.scrollY + 30 > price.offsetTop) {
        listItem.forEach(e => {
            e.classList.remove("nav__list-item--active")
        })
        listItem[1].classList.add("nav__list-item--active")
    }
    if (window.scrollY + 30 > promotion.offsetTop) {
        listItem.forEach(e => {
            e.classList.remove("nav__list-item--active")
        })
        listItem[2].classList.add("nav__list-item--active")
    }
    if (window.scrollY > promotion.offsetTop + promotion.scrollHeight / 3) {
        listItem.forEach(e => {
            e.classList.remove("nav__list-item--active")
        })
        listItem[3].classList.add("nav__list-item--active")
    }
}

// Show page elements on scroll
const showPageElements = () => {
    if (window.scrollY > about.offsetTop * 0.1) {
        aboutImageOne.classList.add("active")
        aboutImageTwo.classList.add("active")
    }
    if (window.scrollY > team.offsetTop * 0.8) {
        teamCard.forEach(e => {
            e.classList.add("active")
        })
    }
    if (window.scrollY > price.offsetTop * 0.8) {
        priceGroups.classList.add("active")
        priceImage.classList.add("active")
    }

    if (window.scrollY > promotion.offsetTop * 0.8) {
        promotionCard.forEach(e => {
            e.classList.add("active")
        })
    }
}
window.addEventListener("scroll", () => {
    scrollSpy()
    showPageElements()
})

//Change burger icon and open/close menu
navBurger.addEventListener("click", () => {
    burgerIcons.forEach(e => {
        e.classList.toggle("display")
    })
    navList.classList.toggle("change")
})

//Open/close menu on click menuItem in moblie version
listItem.forEach(e => {
    e.addEventListener("click", () => {
        navList.classList.toggle("change")
    })
})

//Show more information about promotion
for (let i = 0; i < promotionButtons.length; i++) {
    promotionButtons[i].addEventListener("click", () => {
        promotionText[i].classList.toggle("active")
    })
}