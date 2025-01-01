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
          src="${data.image}"
          alt="" />
      </div>
      <article class="detail_info">
        <span>${data.category}</span>
        <h2>${data.title}</h2>
        <p class="price">$${data.price}</p>
        <select value="Select Size" name="" class="size">
          <option value="">M</option>
          <option value="">S</option>
          <option value="">L</option>
          <option value="">XL</option>
        </select>
        <div>
          <div class="amount-container">
    <button class="amount-button amount-button-decrease" onclick="decreaseAmount()">-</button>
    <input type="text" id="amount" class="amount-value" value="0" readonly>
    <button class="amount-button amount-button-increase" onclick="increaseAmount()">+</button>
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

const addToCart = function (data) {
  //get data size and amount
  // const size = document.querySelector('.size').value
  // const amount = document.getElementById('amount').value

  // console.log(size, amount)
  // console.log(data)
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('add_to_cart')) {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      cart.push(data)
      localStorage.setItem('cart', JSON.stringify(data))
      alert('Item added to cart')
    }
  })
}
