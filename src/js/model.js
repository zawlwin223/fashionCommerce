export const state = {
  items: [],
  isLoading: true,
}

export const loadData = async function () {
  state.isLoading = true

  const urls = [
    "https://fakestoreapi.com/products/category/men's clothing",
    "https://fakestoreapi.com/products/category/women's clothing",
    'https://fakestoreapi.com/products/category/jewelery',
  ]

  const responses = await Promise.all(urls.map((url) => fetch(url)))
  if (!responses.ok) new Error('Error fetching data')
  const data = await Promise.all(
    responses.map(async (response) => {
      return await response.json()
    })
  )
  const combinedData = data.flat()
  combinedData.forEach((item) => {
    state.items.push({
      id: item.id,
      category: item.category,
      description: item.description,
      price: item.price,
      image: item.image,
      title: item.title,
      rating: item.rating,
    })
  })

  state.totalItems = state.items.length
  state.itemsPerPage = 8
  state.totalPages = Math.ceil(state.totalItems / state.itemsPerPage)
}

export const paginate = function (currentPage) {
  if (currentPage < 1 || currentPage > state.totalPages) {
    return { error: 'Invalid page number' }
  }

  const startIndex = (currentPage - 1) * state.itemsPerPage
  const endIndex = Math.min(startIndex + state.itemsPerPage, state.totalItems)
  const items = state.items.slice(startIndex, endIndex)

  return items
}

export const getId = function (id) {
  state.id = id
}

export const detailProduct = function (id) {
  const detailItem = state.items.find((item) => item.id == id)
  state.detailItem = detailItem
}
