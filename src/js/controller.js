import * as model from './model'
import * as nav from './View/nav'
import * as shop from './View/shop'

const renderShopItems = async function () {
  await model.loadData()
  shop.renderItems(model.state.items)
}

const init = function () {
  renderShopItems()
}

init()
