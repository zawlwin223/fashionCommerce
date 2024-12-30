export const state = {
  items: [],
}

const test = async function (params) {
  const response = await fetch(
    'https://fakestoreapi.com/products/category/jewelery'
  )
  const data = await response.json()
  console.log(data)
}
// test()

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
}
