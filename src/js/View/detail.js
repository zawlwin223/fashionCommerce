const params = new URLSearchParams(window.location.search)
const id = params.get('id')
console.log(id) // "17"
export const getItem = function (control) {
  if (!id) return
  control(id)
}
