const itemsParent = document.querySelector('.items')
export const renderItems = function (items) {
  console.log(itemsParent)
  items.forEach((item) => {
    let card = `<div class="container">
          <div class="image_section">
            <img
              src="${item.image}" />

            
          </div>

          <div class="product">
            <p>${item.category}</p>
            <h1>${item.title}</h1>
            <h2>$${item.price}</h2>
            <p class="desc">
            ${item.desc}
            </p>
            <div class="buttons">
              <button class="add">Add to Cart</button>
              <button class="like"><span>♥</span></button>
            </div>
          </div>
        </div>`
    console.log(card)
    itemsParent.innerHTML += card
  })
}
