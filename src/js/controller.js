import * as model from './model'
import * as nav from './View/nav'
import * as detail from './View/detail'
import * as shop from './View/shop'
import * as cart from './View/cart'

const renderShopItems = async function () {
  await model.loadData()
  shop.renderPagination(model.state.totalPages)
  shop.renderItems(model.paginate(1))
  detail.getItem(getProductDetailController)
  detail.renderItem(model.state.detailItem)
  detail.addToCartHandler(model.state.detailItem)
}

const paginationController = async function (pageNumber) {
  shop.renderItems(model.paginate(pageNumber))
}

const getProductDetailController = function (id) {
  model.detailProduct(id)
}

const deletefromCartController = function () {
  nav.addBadge()
}

const init = function async() {
  renderShopItems()
  nav.addBadge()
  shop.paginationHandler(paginationController)
  cart.loadCartData()
  cart.deletefromCartHandler(deletefromCartController)
}

init()
