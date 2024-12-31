export const state = {
  items: [],
}
// const itemsPerPage = 8

export const loadData = async function () {
  const urls = [
    "https://fakestoreapi.com/products/category/men's clothing",
    "https://fakestoreapi.com/products/category/women's clothing",
    'https://fakestoreapi.com/products/category/jewelery',
  ]

  const responses = await Promise.all(urls.map((url) => fetch(url)))
  console.log(responses)
  // console.log(response)
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
  // const totalItems = state.items.length
  // const totalPages = Math.ceil(totalItems / itemsPerPage)
  if (currentPage < 1 || currentPage > state.totalPages) {
    console.log('Error')
    return { error: 'Invalid page number' }
  }

  const startIndex = (currentPage - 1) * state.itemsPerPage
  const endIndex = Math.min(startIndex + state.itemsPerPage, state.totalItems)
  const items = state.items.slice(startIndex, endIndex)

  return items
}
