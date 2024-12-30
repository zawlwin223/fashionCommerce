const itemsParent = document.querySelector('.items')
export const renderItems = function (items) {
  console.log(itemsParent)
  items.forEach((item) => {
    let card = `
      <div class="item_card">
        <img
          src="${item.image}"
          alt=""
        />
        <div class="detail">
          <h3>${item.title}</h3>
          <p>$${item.price}</p>
          <button>Detail</button>
        </div>
      </div>
    `
    console.log(card)
    itemsParent.innerHTML += card
  })
}
