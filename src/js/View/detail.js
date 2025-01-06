const detail_page = document.querySelector('.detail_page')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')
// const badge = document.querySelector('.badge')
let amount = 0
export const getItem = function (control) {
  if (!id) return
  control(id)
}

export const renderItem = function (data) {
  const html = `<div class="image_part">
        <img
          src="${data.image}"
          alt="" />
      </div>
      <article class="detail_info">
        <span>${data.category}</span>
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
  addToCart(data)
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

const addToCart = function (data, control) {
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
      size.value = 'M'
      amountInput.value = 0
      amount = 0
      // addBadge()
    }
  })
}

// const addBadge = function () {
//   const cart = JSON.parse(localStorage.getItem('cart'))
//   if (cart.length === 0) return
//   badge.style.display = 'flex'
//   badge.textContent = cart.length
// }
