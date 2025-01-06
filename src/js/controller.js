import * as model from './model.js'
import * as nav from './View/nav.js'
import * as detail from './View/detail.js'
import * as shop from './View/shop.js'
import * as cart from './View/cart.js'
console.log('Hello World it works')

// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
// import { async } from 'regenerator-runtime'

const render = async function () {
  model.state.id ? await renderDetailItem() : await renderShopItems()
}

const renderShopItems = async function () {
  shop.loadingSpinner()
  await model.loadData()
  shop.removeLoadingSpinner()
  shop.renderPagination(model.state.totalPages)
  shop.renderItems(model.paginate(1))
}

const renderDetailItem = async function () {
  detail.loadingSpinner()
  await model.loadData()
  detail.removeLoadingSpinner()
  model.detailProduct(model.state.id)
  detail.renderItem(model.state.detailItem)
  detail.addToCartHandler(model.state.detailItem, addToCartController)
}

const paginationController = async function (pageNumber) {
  shop.renderItems(model.paginate(pageNumber))
}

const getProductDetailController = function (id) {
  model.getId(id)
}

const deletefromCartController = function () {
  nav.addBadge()
}

const addToCartController = function () {
  nav.addBadge()
}

const init = function async() {
  detail.getItem(getProductDetailController)
  render()
  nav.addBadge()
  // nav.test()
  shop.paginationHandler(paginationController)
  // renderDetailItem()
  cart.loadCartData()
  cart.deletefromCartHandler(deletefromCartController)
}

init()
