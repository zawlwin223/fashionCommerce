const itemsParent = document.querySelector('.items')
const paginationParent = document.querySelector('.pagnination')

export const renderItems = function (items) {
  itemsParent.style.display = 'grid'
  itemsParent.style.height = ''
  itemsParent.style.justifyContent = ''
  itemsParent.style.alignItems = ''
  itemsParent.innerHTML = ''
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
          <a href="index.html?page=detail&id=${item.id}">Detail</a>
        </div>
      </div>
    `
    itemsParent.innerHTML += card
  })
}

export const renderPagination = function (totalPage) {
  const buttonParent = paginationParent.querySelector('.pagni_number')
  for (let i = 1; i <= totalPage; i++) {
    buttonParent.innerHTML += `
     <button class="page" data-page="${i}">${i}</button>
    `
  }
  buttonParent.firstElementChild.classList.add('active')
}

export const paginationHandler = function (control) {
  paginationParent.addEventListener('click', function (e) {
    this.querySelectorAll('.page').forEach((page) => {
      page.classList.remove('active')
    })
    const target = e.target.closest('.page')
    if (!target) return
    const pageNumber = +target.dataset.page
    control(pageNumber)
    target.classList.add('active')
  })
}

export const loadingSpinner = function (isLoading = false) {
  console.log(isLoading)
  if (isLoading) {
    itemsParent.innerHTML = `
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    `
    itemsParent.style.display = 'flex'
    itemsParent.style.justifyContent = 'center'
    itemsParent.style.alignItems = 'center'
    itemsParent.style.height = '100vh'
    return
  }
  // itemsParent.style.display = 'grid'
  // itemsParent.style.height = '0'
}
