const nav = document.querySelector('.nav')
const nav_links = document.querySelectorAll('.nav_link')
const badge = document.querySelector('.badge')
// const hero = document.querySelector('.hero')
// const promotion = document.querySelector('.promotion')
// const repairService = document.querySelector('.repair_service')
// const service = document.querySelector('.service')

const home_page = document.querySelector('.home_page')
const shop_page = document.querySelector('.shop_page')
const about_page = document.querySelector('.about_page')
const contact_page = document.querySelector('.contact_page')
const cart_page = document.querySelector('.cart_page')
const detail_page = document.querySelector('.detail_page')

const path = window.location.pathname
switch (path) {
  case '/':
    // nav_links[0].classList.add('active')
    break
  case '/home':
    home_page.style.display = 'flex'

    shop_page.style.display = 'none'
    break
  case '/shop':
    // nav_links[0].classList.add('active')
    home_page.style.display = 'none'
    shop_page.style.display = 'block'
    break
  case '/about':
    home_page.style.display = 'none'
    about_page.style.display = 'flex'
    break
  case '/contact':
    home_page.style.display = 'none'
    contact_page.style.display = 'flex'
    break
  case '/cart':
    home_page.style.display = 'none'
    cart_page.style.display = 'flex'
    break
  case '/detail':
    home_page.style.display = 'none'
    detail_page.style.display = 'flex'
    break
}

export const addBadge = function () {
  const cart = JSON.parse(localStorage.getItem('cart'))
  console.log(cart)
  if (!cart || cart.length === 0) {
    badge.style.display = 'none'
    return
  }
  badge.style.display = 'flex'
  badge.textContent = cart.length
}
