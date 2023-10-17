const sliderBrand = document.querySelector('.swiper-container--brand')
const sliderType = document.querySelector('.swiper-container--type')
const sliderPrices = document.querySelector('.swiper-container--prices')
const sliderContainer = document.querySelector('.swiper-container')

let swiperBrand = new Swiper(sliderBrand, {
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

let swiperType = new Swiper(sliderType, {
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

let swiperPrices = new Swiper(sliderPrices, {
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
    }
  }
})
