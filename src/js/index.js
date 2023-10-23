import '../scss/style.scss'
import Swiper, { Pagination } from 'swiper'
Swiper.use([Pagination])

// S L I D E R
const sliderBrand = document.querySelector('.swiper-container--brand')
const sliderType = document.querySelector('.swiper-container--type')
const sliderPrices = document.querySelector('.swiper-container--prices')
const sliderContainer = document.querySelector('.swiper-container')

// SWIPER BREND
let swiperBrand = new Swiper(sliderBrand, {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1.25,
      spaceBetween: 19
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    660: {
      slidesPerView: 3
    }
  }
})

// SWIPER TECh
let swiperType = new Swiper(sliderType, {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1.25,
      spaceBetween: 19
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    660: {
      slidesPerView: 3
    }
  }
})

window.addEventListener('load', () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    swiperType.destroy()
  }
})

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    swiperType.destroy()
  }
})

window.addEventListener('resize', () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    if (swiperType.destroyed) {
      swiperType = new Swiper(sliderType, {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        breakpoints: {
          460: {
            slidesPerView: 2,
            spaceBetween: 10
          },

          660: {
            slidesPerView: 3
          }
        }
      })
    }
  }
})

// SWIPER PRICE

let swiperPrices = new Swiper(sliderPrices, {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 19
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    660: {
      slidesPerView: 2
    }
  }
})

const textContainer = document.querySelector('.about-us__text-container')
const aboutMoreButton = document.querySelector('.about-us__more-button')
const pageNavigationLinks = document.querySelectorAll(
  '.service__page-navigation_link'
)
const brandMoreButton = document.querySelector('.equipment-brand__more-button')
const brandContainer = document.querySelector('.swiper-wrapper--brand')

pageNavigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    pageNavigationLinks.forEach((link) => {
      if (link.classList.contains('service__page-navigation_link--active')) {
        link.classList.remove('service__page-navigation_link--active')
      }
    })

    link.classList.add('service__page-navigation_link--active')
  })
})

aboutMoreButton.addEventListener('click', () => {
  if (aboutMoreButton.innerText === 'Читать далее') {
    aboutMoreButton.innerText = 'Скрыть'
    aboutMoreButton.classList.add('more-button--less')
    textContainer.classList.add('about-us__text-container--full')
  } else {
    aboutMoreButton.innerText = 'Читать далее'
    aboutMoreButton.classList.remove('more-button--less')
    textContainer.classList.remove('about-us__text-container--full')
  }
})

brandMoreButton.addEventListener('click', () => {
  if (brandMoreButton.innerText === 'Показать все') {
    brandMoreButton.innerText = 'Скрыть'
    brandMoreButton.classList.add('more-button--less')
    brandContainer.classList.add('swiper-wrapper--full')
  } else {
    brandMoreButton.innerText = 'Показать все'
    brandMoreButton.classList.remove('more-button--less')
    brandContainer.classList.remove('swiper-wrapper--full')
  }
})

// Section Tech
const typeContainer = document.querySelector('.swiper-wrapper--type')
const typeMoreButton = document.querySelector('.tech__more-button')

typeMoreButton.addEventListener('click', () => {
  if (typeMoreButton.innerText === 'Показать все') {
    typeMoreButton.innerText = 'Скрыть'
    typeMoreButton.classList.add('more-button--less')
    typeContainer.classList.add('swiper-wrapper--full')
  } else {
    typeMoreButton.innerText = 'Показать все'
    typeMoreButton.classList.remove('more-button--less')
    typeContainer.classList.remove('swiper-wrapper--full')
  }
})

// SITE MENU AND MODAL
const navigationLinks = document.querySelectorAll('.navigation__link')
const siteMenu = document.querySelector('.site-menu')
const feedback = document.querySelector('.feedback')
const call = document.querySelector('.call')
const openButton = document.querySelector('.header__btn-burger')
const closeButton = document.querySelector('.site-menu__nav-toggle-cross')
const closeFeedbackButton = document.querySelector('.feedback__button-cross')
const closeCallButton = document.querySelector('.call__button-cross')
const contactButtons = document.querySelectorAll('.contact-list__link--message')
const callButtons = document.querySelectorAll('.contact-list__link--phone')
const overlay = document.querySelector('.overlay')

const onOverlayClick = () => {
  overlay.classList.remove('overlay--active')
  switch (true) {
    case siteMenu.classList.contains('site-menu--open'):
      openButton.classList.remove('header__btn-burger--open')
      siteMenu.classList.remove('site-menu--open')
      break

    case feedback.classList.contains('feedback--open'):
      feedback.classList.remove('feedback--open')
      closeFeedbackButton.classList.remove('feedback__button-cross--open')
      break

    case call.classList.contains('call--open'):
      call.classList.remove('call--open')
      closeCallButton.classList.remove('call__button-cross--open')
      break
  }
}

openButton.addEventListener('click', () => {
  openButton.classList.add('header__btn-burger--open')
  siteMenu.classList.add('site-menu--open')
  overlay.classList.add('overlay--active')

  overlay.addEventListener('click', (evt) => {
    onOverlayClick(evt)
  })
})

closeButton.addEventListener('click', () => {
  openButton.classList.remove('header__btn-burger--open')
  siteMenu.classList.remove('site-menu--open')
  overlay.classList.remove('overlay--active')

  document.removeEventListener('click', onOverlayClick)
})

closeFeedbackButton.addEventListener('click', () => {
  feedback.classList.remove('feedback--open')
  closeFeedbackButton.classList.remove('feedback__button-cross--open')
  overlay.classList.remove('overlay--active')
  document.removeEventListener('click', onOverlayClick)
})

contactButtons.forEach((item) => {
  item.addEventListener('click', () => {
    feedback.classList.add('feedback--open')
    closeFeedbackButton.classList.add('feedback__button-cross--open')
    overlay.classList.add('overlay--active')

    if (siteMenu.classList.contains('site-menu--open')) {
      siteMenu.classList.remove('site-menu--open')
    }
    overlay.addEventListener('click', (evt) => {
      onOverlayClick(evt)
    })
  })
})

closeCallButton.addEventListener('click', () => {
  call.classList.remove('call--open')
  closeCallButton.classList.remove('call__button-cross--open')
  overlay.classList.remove('overlay--active')
  document.removeEventListener('click', onOverlayClick)
})

callButtons.forEach((item) => {
  item.addEventListener('click', () => {
    call.classList.add('call--open')
    closeCallButton.classList.add('call__button-cross--open')
    overlay.classList.add('overlay--active')

    if (siteMenu.classList.contains('site-menu--open')) {
      siteMenu.classList.remove('site-menu--open')
    }

    overlay.addEventListener('click', (evt) => {
      onOverlayClick(evt)
    })
  })
})

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navigationLinks.forEach((link) => {
      if (link.classList.contains('navigation__link--active')) {
        link.classList.remove('navigation__link--active')
      }
    })

    link.classList.add('navigation__link--active')
  })
})
