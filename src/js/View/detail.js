import lazyLoadingImg from 'url:../../img/vecteezy_picture-gallery-image-line-icon-vector-illustration_4853306-1.jpg'

const detail_page = document.querySelector('.detail_page')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

let amount = 0
export const getItem = function (control) {
  if (!id) return
  control(id)
}

export const renderItem = function (data) {
  const html = `<div class="image_part">
        <img
          src="${lazyLoadingImg}"
          alt=""  class="lazy_loaded_img" />
        <img
          src="${data.image}"
          alt="" loading="lazy" class="detail_img"/>
      </div>
      <article class="detail_info">
        <span><a class="nav_link" href="?page=shop">Shop</a>/ ${data.category}</span>
        <h2>${data.title}</h2>
        <p class="price">$${data.price}</p>
        <select value="Select Size" name="" class="size">
          <option value="M">M</option>
          <option value="S">S</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <div>
          <div class="amount-container">
    <button class="amount-button amount-button-decrease" >-</button>
    <input type="text" id="amount" class="amount-value" value="0"  readonly>
    <button class="amount-button amount-button-increase" >+</button>
  </div>
          <button class="add_to_cart">Add To Cart</button>
        </div>
        <h3>Product Description</h3>
        <p>
         ${data.description}
        </p>
      </article>`

  detail_page.innerHTML = html
  //increase and decrease amount work
  increaseAmount()
  decreaseAmount()
}

function increaseAmount() {
  const btn = document.querySelector('.amount-button-increase')
  btn.addEventListener('click', () => {
    amount++
    document.getElementById('amount').value = amount
  })
}

function decreaseAmount() {
  const btn = document.querySelector('.amount-button-decrease')
  btn.addEventListener('click', () => {
    if (amount > 0) {
      // Prevents negative values
      amount--
    }
    document.getElementById('amount').value = amount
  })
}

export const addToCartHandler = function (data, control) {
  // get data size and amount

  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('add_to_cart')) {
      let size = document.querySelector('.size').value
      let amountInput = document.getElementById('amount')
      if (amountInput.value == 0) {
        alert('Please select amount')
        return
      }
      data.size = size
      data.amount = +amountInput.value
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      cart.push(data)
      localStorage.setItem('cart', JSON.stringify(cart))
      alert('Item added to cart')
      control()
      amountInput.value = 0
      amount = 0
    }
  })
}

export const loadingSpinner = function () {
  detail_page.innerHTML = `
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    `
  detail_page.style.display = 'flex'
  detail_page.style.height = '100vh'
}
export const removeLoadingSpinner = function () {
  detail_page.style.display = 'flex'
  detail_page.style.height = ''
  detail_page.innerHTML = ''
}

export const lazyLoading = function () {
  const lazyLoadedImg = document.querySelector('.lazy_loaded_img')
  const lazyImageFromServer = document.querySelector('.detail_img')

  lazyImageFromServer.addEventListener('load', () => {
    lazyImageFromServer.style.display = 'block'
    lazyLoadedImg.style.display = 'none'
  })
}
