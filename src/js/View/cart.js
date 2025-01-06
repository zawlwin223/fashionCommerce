const cartPage = document.querySelector('.cart_page')
const cartTableBody = document.querySelector('.cart_table_body')

export const loadCartData = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  cartTableBody.innerHTML = ''
  cart.forEach((item) => {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td><img src="${item.image}" alt="${
      item.title
    }" width="50" loading="lazy"></td>
      <td>${item.size}</td>
      <td>$${item.price}</td>
      <td>${item.amount}</td>
      <td>$${item.price * item.amount}</td>
      <td><button class="delete-btn" data-id="${item.id}">Delete</button></td>
    `
    cartTableBody.appendChild(row)
  })

  // Add event listeners to delete buttons
}

export const deletefromCartHandler = function (control) {
  console.log('Hola')
  cartTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      console.log('Hello World')
      const id = e.target.dataset.id
      deleteProduct(id)
      e.target.parentElement.parentElement.remove()
      control()
    }
  })
}
const deleteProduct = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  let index = cart.findIndex((item) => item.id == id)
  cart.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart))
}
