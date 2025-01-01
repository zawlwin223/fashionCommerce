import * as model from './model'
import * as nav from './View/nav'
import * as detail from './View/detail'
import * as shop from './View/shop'

const renderShopItems = async function () {
  await model.loadData()
  shop.renderPagination(model.state.totalPages)
  shop.renderItems(model.paginate(1))
  detail.getItem(getProductDetailController)
  detail.renderItem(model.state.detailItem)
}

const paginationController = async function (pageNumber) {
  shop.renderItems(model.paginate(pageNumber))
}

const getProductDetailController = function (id) {
  model.detailProduct(id)
}

const init = function async() {
  renderShopItems()
  shop.paginationHandler(paginationController)
}

init()
