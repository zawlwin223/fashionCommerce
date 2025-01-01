const detail_page = document.querySelector('.detail_page')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')
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
        <select value="Select Size" name="" id="">
          <option value="">M</option>
          <option value="">S</option>
          <option value="">L</option>
          <option value="">XL</option>
        </select>
        <div>
          <input type="number" />
          <button>Add To Cart</button>
        </div>
        <h3>Product Description</h3>
        <p>
         ${data.description}
        </p>
      </article>`

  detail_page.innerHTML = html
}
