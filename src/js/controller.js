import * as model from './model'
import * as nav from './View/nav'
import * as shop from './View/shop'

const renderShopItems = async function () {
  await model.loadData()
  shop.renderPagination(model.state.totalPages)
  shop.renderItems(model.paginate(1))
}

const paginationController = async function (pageNumber) {
  shop.renderItems(model.paginate(pageNumber))
}

const init = function () {
  renderShopItems()
  shop.paginationHandler(paginationController)
}

init()
