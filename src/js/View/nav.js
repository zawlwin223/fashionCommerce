const nav_links = document.querySelectorAll('.nav_link')
const badge = document.querySelector('.badge')

const home_page = document.querySelector('.home_page')
const shop_page = document.querySelector('.shop_page')
const cart_page = document.querySelector('.cart_page')
const detail_page = document.querySelector('.detail_page')

// Get the query parameter from URL
const urlParams = new URLSearchParams(window.location.search)
const path = urlParams.get('page') || 'home'

switch (path) {
  case 'home':
    home_page.style.display = 'flex'
    shop_page.style.display = 'none'
    cart_page.style.display = 'none'
    detail_page.style.display = 'none'
    break
  case 'shop':
    home_page.style.display = 'none'
    shop_page.style.display = 'block'
    cart_page.style.display = 'none'
    detail_page.style.display = 'none'
    break
  case 'cart':
    home_page.style.display = 'none'
    shop_page.style.display = 'none'
    cart_page.style.display = 'flex'
    detail_page.style.display = 'none'
    break
  case 'detail':
    home_page.style.display = 'none'
    shop_page.style.display = 'none'
    cart_page.style.display = 'none'
    detail_page.style.display = 'flex'
    break
  default:
    home_page.style.display = 'flex'
    shop_page.style.display = 'none'
    cart_page.style.display = 'none'
    detail_page.style.display = 'none'
}

export const addBadge = function () {
  const cart = JSON.parse(localStorage.getItem('cart'))
  if (!cart || cart.length === 0) {
    badge.style.display = 'none'
    return
  }
  badge.style.display = 'flex'
  badge.textContent = cart.length
}

const navLinks = document.querySelectorAll('.nav_link')

const setActiveLink = () => {
  navLinks.forEach((link) => {
    const linkPage = new URLSearchParams(link.getAttribute('href')).get('page')
    if (linkPage === path) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

setActiveLink()
