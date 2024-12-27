export const state = {
  items: [],
}
export const loadData = async function () {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  data.forEach((item) => {
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
