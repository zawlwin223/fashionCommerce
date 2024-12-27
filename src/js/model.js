console.log('Ho la this is model page')
const sth = async function () {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  console.log(data)
}
sth()
